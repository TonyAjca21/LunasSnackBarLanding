import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLHkUNwVE3JYdRdtihYp1iSJQcpaKFMog",
  authDomain: "lunas-snack-bar.firebaseapp.com",
  projectId: "lunas-snack-bar",
  appId: "1:652966154220:web:95203befeb9947579c3ac9",
  storageBucket: "lunas-snack-bar.firebasestorage.app",
 messagingSenderId: "652966154220",
  appId: "1:652966154220:web:95203befeb9947579c3ac9",
};

// ✅ evita duplicar la app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
