import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  REACT_APP_FB_apiKey,
  REACT_APP_FB_authDomain,
  REACT_APP_FB_projectId,
  REACT_APP_FB_storageBucket,
  REACT_APP_FB_messagingSenderId,
  REACT_APP_FB_appId,
  REACT_APP_FB_measurementId,
} from "@env";

export const firebaseConfig = {
  apiKey: REACT_APP_FB_apiKey,
  authDomain: REACT_APP_FB_authDomain,
  projectId: REACT_APP_FB_projectId,
  storageBucket: REACT_APP_FB_storageBucket,
  messagingSenderId: REACT_APP_FB_messagingSenderId,
  appId: REACT_APP_FB_appId,
  measurementId: REACT_APP_FB_measurementId,
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export { firestore, firebase };
