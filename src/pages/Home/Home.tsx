import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import { styles } from "./Home.styles";

import { testFirebase } from "@/lib/firebase/functions";

export function Home(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  // --- END: Hooks -----------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Template repo for React native with Expo</Text>

      <View style={styles.sectionsContainer}>
        <View>
          <Text style={styles.subHeader}>Using Typescript, Prettier and Eslint</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Atomic design</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Env variables</Text>
        </View>
        <View>
          <TouchableHighlight onPress={() => testFirebase()}>
            <Text>Test</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
