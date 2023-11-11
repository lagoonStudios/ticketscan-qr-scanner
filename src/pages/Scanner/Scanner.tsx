import React, { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import { Button } from "@/components/atoms/Button";

export function Scanner(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Side effects ----------------------------------------------------------
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);
  // --- END: Side effects -----------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    Alert.alert(`Bar code data ${data} has been scanned!`);
  };
  // --- END: Data and handlers ----------------------------------------------------------

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}></BarCodeScanner>

      {scanned && <Button onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  scanner: {
    position: "relative",
    height: "50%",
    width: "100%",
  }
});
