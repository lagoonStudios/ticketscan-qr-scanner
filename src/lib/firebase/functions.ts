import { firestore } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const userCollection = "Users"

export const testFirebase = async () => {
  try {
    const ref = collection(firestore, userCollection);
    const docRef = await addDoc(ref, {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
