import { firestore } from "./firebaseConfig";
import { collection, addDoc, doc, query, where, FieldPath, getDoc } from "firebase/firestore";

enum Collections {
  Users = "Users",
  Tickets = "Tickets",
}

const ticketsRef = collection(firestore, Collections.Tickets);

export const testFirebase = async () => {
  try {
    const ref = collection(firestore, Collections.Users);
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

export const getTicketById = async (ticketId: string) => {
  try {
    const docRef = doc(firestore, Collections.Tickets, ticketId);
    const ticket = await getDoc(docRef);
    if (ticket.exists()) {
      ticket.data();
    } else {
    }
  } catch (error) {}
};
