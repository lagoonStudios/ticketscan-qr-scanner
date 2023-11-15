import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { collection, doc } from "firebase/firestore";
import { firestore } from "@/lib/firebase/firebaseConfig";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";

import { View, Text } from "react-native";
import { AppLogo } from "@/components/atoms/AppLogo";
import { BackButton } from "@/components/atoms/BackButton";

import { Collections } from "@/lib/firebase/functions";

import { handleTicketUpdate } from "./Scanner.functions";

import { styles } from "./Scanner.styles";

export function Scanner(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  const ticketMutation = useMutation(async (ticketId: string) => {
    setScanned(true);
    const ticketRef = doc(collection(firestore, Collections.Tickets), ticketId);
    handleTicketUpdate({ ticketRef }).finally(() => setScanned(false));
  });
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
      setScanned(false);
    })();
  }, []);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const handleBarCodeScanned = ({ data }: { data: string }) => ticketMutation.mutate(data);
  // --- END: Data and handlers ----------------------------------------------------------

  if (hasPermission === null) {
    return (
      <View>
        <Text>Esperando permisos</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>Sin acceso a la cámara</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackButton containerStyles={styles.backButton} />
      <AppLogo height={100} width={100} />

      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}></BarCodeScanner>
      )}
    </View>
  );
}
