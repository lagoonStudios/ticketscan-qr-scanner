import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import { styles } from "./Home.styles";

import { logOut } from "@/hooks/auth/auth";

export function Home(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  // --- END: Hooks -----------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Template repo for React native with Expo</Text>

      <View style={styles.sectionsContainer}>
        <View>
          <TouchableHighlight onPress={() => logOut()}>
            <Text>LogOut</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
