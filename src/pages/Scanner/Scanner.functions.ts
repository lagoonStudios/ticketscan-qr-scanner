import Toast from "react-native-toast-message";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

import { firestore } from "@/lib/firebase/firebaseConfig";
import { Collections, handleFirebaseErrorMessage } from "@/lib/firebase/functions";

import { Ticket } from "@/models/app.models";

export const handleTicketUpdate = async (ticketId: string) => {
  return new Promise(async (resolve, reject) => {
    const ticketRef = doc(collection(firestore, Collections.Tickets), ticketId);
    const ticketDoc = await getDoc(ticketRef);
    const ticket = ticketDoc.data() as Ticket;

    if (Boolean(ticketDoc.exists())) {
      if (ticket.attendance) {
        Toast.show({
          type: "info",
          text1: "El ticket ya fué registrado",
        });

        resolve(null);
      } else {
        updateDoc(ticketRef, { attendance: true }).then(
          async () => {
            Toast.show({
              type: "success",
              text1: "Registro exitoso",
            });
            resolve(null);
          },
          (err) => {
            Toast.show({
              type: "error",
              text1: handleFirebaseErrorMessage(err.code || ""),
            });
            reject(err);
          }
        );
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Registro no existente",
      });
      resolve(null);
    }
  });
};
