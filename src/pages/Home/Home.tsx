import React from "react";
import { View, Text, Image, ScrollView, Pressable, Alert } from "react-native";

import { styles } from "./Home.styles";

import { logOut } from "@/hooks/auth/auth";
import { Button } from "@/components/atoms/Button/Button";
import { FooterLegent } from "@/components/atoms/FooterLegend/FooterLegend";

export function Home(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const handleLogout = () => {
    Alert.alert("Seguro que deseas cerrar sesión?", "", [
      { text: "Cancelar", style: "cancel" },
      { text: "Aceptar", onPress: logOut },
    ])
  }
  // --- END: Data and handlers ----------------------------------------------------------
  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Cerrar sesion</Text>
      </Pressable>
      <ScrollView contentContainerStyle={styles.contentView}>
        <Button>
          <Text style={styles.buttonText}>Escanear código QR</Text>
        </Button>
        <Button>
          <Text style={styles.buttonText}>Registrar usuario</Text>
        </Button>
      </ScrollView>
      <View style={styles.footer}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} alt="Ticket scan logo" />
        <FooterLegent />
      </View>
    </View>
  );
}
