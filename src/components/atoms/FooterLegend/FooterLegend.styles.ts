import { StyleSheet } from "react-native";

import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    color: Colors.green.light,
    textAlign: "center",
  },
});
