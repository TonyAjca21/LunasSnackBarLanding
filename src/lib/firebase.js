import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLHkUNwVE3JYdRdtihYp1iSJQcpaKFMog",
  authDomain: "lunas-snack-bar.firebaseapp.com",
  projectId: "lunas-snack-bar",
  appId: "1:652966154220:web:95203befeb9947579c3ac9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);