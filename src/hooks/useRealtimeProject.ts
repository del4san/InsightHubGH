import { useEffect } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useRealtimeProject(projectId: string, onUpdate: (data: any) => void) {
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "projects", projectId), (docSnap) => {
      if (docSnap.exists()) {
        onUpdate(docSnap.data());
      }
    });
    return () => unsub();
  }, [projectId, onUpdate]);
}