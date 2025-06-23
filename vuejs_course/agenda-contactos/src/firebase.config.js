// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSGJpUqbuKhH2XZFPHvazJNbUruVlvqRU",
  authDomain: "agenda-contactos-3d88a.firebaseapp.com",
  projectId: "agenda-contactos-3d88a",
  storageBucket: "agenda-contactos-3d88a.firebasestorage.app",
  messagingSenderId: "606370957094",
  appId: "1:606370957094:web:c17d71d7773b56ba2563e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };