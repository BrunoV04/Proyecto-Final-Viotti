import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBE1pWQwyrPgwWe9flcQeFJY20YiWTNS3k",
  authDomain: "ecommerce-giro.firebaseapp.com",
  projectId: "ecommerce-giro",
  storageBucket: "ecommerce-giro.appspot.com",
  messagingSenderId: "173478474955",
  appId: "1:173478474955:web:5953c98513c31a2119174e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)