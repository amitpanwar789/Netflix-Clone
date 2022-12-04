import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbB0aPRTNgwYqtDYWZEDGxLL8P0kVYIS0",
  authDomain: "netflixclone-ad9a3.firebaseapp.com",
  projectId: "netflixclone-ad9a3",
  storageBucket: "netflixclone-ad9a3.appspot.com",
  messagingSenderId: "199288085595",
  appId: "1:199288085595:web:77813a18af482e8377f37e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export {auth}
export default db;