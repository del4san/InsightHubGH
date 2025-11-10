// src/firebase.ts

import { initializeApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  AppCheck
} from "firebase/app-check";

// ✅ Declare global guard
declare global {
  interface Window {
    __appCheckInstance?: AppCheck;
  }
}

const firebaseConfig = {
  apiKey: "VWJrtcrVUw3TeMCrk4BQdV",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// ✅ Initialize Firebase FIRST
const firebaseApp = initializeApp(firebaseConfig);

// ✅ Initialize App Check IMMEDIATELY
let appCheck: AppCheck;

if (!window.__appCheckInstance) {
  appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider("your-site-key"),
    isTokenAutoRefreshEnabled: true
  });

  window.__appCheckInstance = appCheck;
} else {
  appCheck = window.__appCheckInstance;
}

export { firebaseApp, appCheck };