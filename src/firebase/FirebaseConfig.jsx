import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB5V3HwEJbfgrMNqpMZI7wXAJiESjFhxMc",
  authDomain: "ecommerce-project411.firebaseapp.com",
  projectId: "ecommerce-project411",
  storageBucket: "ecommerce-project411.firebasestorage.app",
  messagingSenderId: "726296771702",
  appId: "1:726296771702:web:774c86520ecc58b1d5b357"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth };