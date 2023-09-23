import { REACT_APP_FIREBASE_CONFIG } from "@env";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = JSON.parse(REACT_APP_FIREBASE_CONFIG);

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export { firestore, firebase };
