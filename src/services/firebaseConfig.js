
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";          
const firebaseConfig = {
  apiKey: "AIzaSyABR4XFnqBrpAbID0343eQGdniKsP6GnzY",
  authDomain: "carart-a7eeb.firebaseapp.com",
  projectId: "carart-a7eeb",
  storageBucket: "carart-a7eeb.appspot.com",
  messagingSenderId: "779305855363",
  appId: "1:779305855363:web:2cd8fbcf4112d43702aeb6"
};


const app = initializeApp(firebaseConfig);
export const dataBase=getFirestore(app)