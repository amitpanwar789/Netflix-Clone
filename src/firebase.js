import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ6v2DD9LNWQq2arAsZ9LaHyBC1B7hv6w",
  authDomain: "netflix-clone-d3f0d.firebaseapp.com",
  projectId: "netflix-clone-d3f0d",
  storageBucket: "netflix-clone-d3f0d.appspot.com",
  messagingSenderId: "525135353119",
  appId: "1:525135353119:web:8865af74e7059714394c2a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export {auth}
export default db;
