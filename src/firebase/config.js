import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqWgpusjBk-gYBV94URsDjhFsLOJ3UbOs",
  authDomain: "mini-blog-fbe8b.firebaseapp.com",
  projectId: "mini-blog-fbe8b",
  storageBucket: "mini-blog-fbe8b.appspot.com",
  messagingSenderId: "156698236434",
  appId: "1:156698236434:web:2e3fa405229f59e6352acb",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
