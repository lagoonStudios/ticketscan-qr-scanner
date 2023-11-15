import React from "react";
import { View } from "react-native";

import { Button } from "@/components/atoms/Button";
import { EventBanner } from "@/components/atoms/EventBanner";
import { LogoutButton } from "@/components/atoms/LogoutButton";
import { FooterLegend } from "@/components/atoms/FooterLegend";

import { styles } from "./Home.styles";
import { Link } from "@react-navigation/native";
import { AppLogo } from "@/components/atoms/AppLogo";

export function Home({ navigation }: any): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  // --- END: Hooks -----------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <LogoutButton containerStyles={styles.logoutButton} />
      <View style={styles.sectionsContainer}>
        <EventBanner source={require("@/assets/logo.png")} />
        <Link to="Scanner">
          <Button onPress={() => navigation.navigate('Scanner')}>Escanear código QR</Button>
        </Link>

        <Link to="ManualRegister">
          <Button onPress={() => navigation.navigate('ManualRegister')}>Registro manual</Button>
        </Link>
      </View>
      <FooterLegend>
        <AppLogo containerStyle={{ alignItems: "flex-end" }} height={100} width={100} />
      </FooterLegend>
    </View>
  );
}
