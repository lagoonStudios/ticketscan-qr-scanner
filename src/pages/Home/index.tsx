import React from "react";
import { View, Text, Pressable } from "react-native";

import { styles } from "./Home.styles";

import { logOut } from "@/hooks/auth";
import { Button } from "@/components/atoms/Button";
import { LogoutButton } from "@/components/atoms/LogoutButton";

export function Home(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  var asd = "asd";
  // --- END: Hooks -----------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <LogoutButton containerStyles={styles.logoutButton} />
      <View style={styles.sectionsContainer}>
        <Button>Escanear código QR</Button>

        <Button>Escanear código QR</Button>
      </View>
    </View>
  );
}
