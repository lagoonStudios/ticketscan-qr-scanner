import React from "react";
import { View, Text, Pressable } from "react-native";

import { styles } from "./Home.styles";

import { logOut } from "@/hooks/auth";

export function Home(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  // --- END: Hooks -----------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Template repo for React native with Expo</Text>

      <View style={styles.sectionsContainer}>
        <View>
          <Pressable onPress={() => logOut()}>
            <Text>LogOut</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
