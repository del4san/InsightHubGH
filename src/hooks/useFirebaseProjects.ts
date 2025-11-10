import { useEffect, useState } from "react";
import { db, getCurrentUID } from "../lib/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { GeminiChunk } from "./usePromptHistory";

export function useFirebaseProjects() {
  const [projects, setProjects] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    getCurrentUID().then((uid) => {
      if (!uid) return;
      const q = query(collection(db, "projects"), where("owner", "==", uid));
      getDocs(q).then((snapshot) => {
        const list = snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }));
        setProjects(list);
      });
    });
  }, []);

  async function saveProject(name: string, chunks: GeminiChunk[]) {
    const uid = await getCurrentUID();
    if (!uid) return;
    await addDoc(collection(db, "projects"), {
      name,
      chunks,
      owner: uid,
      timestamp: Date.now(),
    });
  }

  async function loadProject(id: string): Promise<GeminiChunk[] | null> {
    const docSnap = await getDoc(doc(db, "projects", id));
    return docSnap.exists() ? docSnap.data().chunks : null;
  }

  return { projects, saveProject, loadProject };
}