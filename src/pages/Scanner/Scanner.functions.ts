import { handleFirebaseErrorMessage } from "@/lib/firebase/functions";
import { Ticket } from "@/models/app.models";
import { DocumentData, DocumentReference, getDoc, updateDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";

export const handleTicketUpdate = async ({
  ticketRef,
}: {
  ticketRef: DocumentReference<DocumentData, DocumentData>;
}) => {
  return new Promise(async (resolve, reject) => {
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
