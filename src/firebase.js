import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY_FIREBASE,
  authDomain: "netflix-build-clone-acd10.firebaseapp.com",
  projectId: "netflix-build-clone-acd10",
  storageBucket: "netflix-build-clone-acd10.appspot.com",
  messagingSenderId: "1009456186537",
  appId: "1:1009456186537:web:258e3ac67dea0bb2e715b8",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
