import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  scanner: {
    position: "relative",
    height: "50%",
    width: "100%",
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 5,
  },
});
