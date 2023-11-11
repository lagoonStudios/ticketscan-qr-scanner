import { StyleSheet } from "react-native";

import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: Colors.green.default,
    padding: 15,
    shadowColor: Colors.black.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10
  },
});
