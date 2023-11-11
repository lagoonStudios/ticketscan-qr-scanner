import React from "react";
import { View } from "react-native";

import { Button } from "@/components/atoms/Button";
import { EventBanner } from "@/components/atoms/EventBanner";
import { LogoutButton } from "@/components/atoms/LogoutButton";
import { FooterLegend } from "@/components/atoms/FooterLegend";

import { styles } from "./Home.styles";
import { Link } from "@react-navigation/native";

export function Home({ navigation }: any): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const handleNavigate = () => {
    navigation.navigate("Scanner");
  };
  // --- END: Hooks -----------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <LogoutButton containerStyles={styles.logoutButton} />
      <View style={styles.sectionsContainer}>
        <EventBanner source={require("@/assets/logo.png")} />
        <Link to="Scanner">
          <Button onPress={() => handleNavigate()}>Escanear código QR</Button>
        </Link>

        <Button>Registro manual</Button>
      </View>
      <FooterLegend />
    </View>
  );
}
