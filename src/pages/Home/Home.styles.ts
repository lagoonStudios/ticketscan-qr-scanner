import { StyleSheet } from "react-native";
import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    height: "90%",
  },
  footer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 73,
    width: 100,
    resizeMode: "contain",
  },
  sectionsContainer: {},
  logoutButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
});
