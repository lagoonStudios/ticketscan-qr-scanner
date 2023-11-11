import { StyleSheet } from "react-native";
import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: Colors.green,
    padding: 15,
  },
  disabled: {
    backgroundColor: Colors.lightGreen,
    pointerEvents: "none",
  },
});
