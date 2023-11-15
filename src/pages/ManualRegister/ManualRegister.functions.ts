import { Alert } from "react-native";
import { query, collection, where, getDocs, updateDoc } from "firebase/firestore";

import { Collections } from "@/lib/firebase/functions";
import { firestore } from "@/lib/firebase/firebaseConfig";

import { Ticket } from "@/models/app.models";

export function manualRegister(document: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    console.log("document: ", document);
    const ticketsRef = collection(firestore, Collections.Tickets);
    const q = query(ticketsRef, where("identificationDoc", "==", document));
    const docsSnapshot = await getDocs(q);
    const docsRef = docsSnapshot.docs.map((doc) => (doc.exists() ? doc : undefined));
    console.log("docsRefs: ", docsRef.length);
    if (docsRef[0]) {
      let ticket = docsRef[0].data() as Ticket;
      console.log("Ticket: ", ticket);
      if (!ticket.attendance) {
        updateDoc(docsRef[0].ref, { attendance: true }).then(
          () => {
            Alert.alert("Exitoso", "Registro exitoso");
            resolve(null);
          },
          (error) => {
            reject({ message: "Error al registrar", type: "ERROR" });
          }
        );
      } else {
        reject({ message: "El ticket ya fué registrado", type: "Info" });
      }
    } else {
      reject({ message: "Registro no existente", type: "ERROR" });
    }

    resolve("");
  });
}
