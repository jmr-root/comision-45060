import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaJrIEtThzOnv6ya7MvzA-LIHYIxFiVFY",
  authDomain: "react-45060-juanreina.firebaseapp.com",
  projectId: "react-45060-juanreina",
  storageBucket: "react-45060-juanreina.appspot.com",
  messagingSenderId: "537789307983",
  appId: "1:537789307983:web:fa501db6eba374907e5e3a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, "productos");
export const collectionOrders = collection(db, "ordenes");
