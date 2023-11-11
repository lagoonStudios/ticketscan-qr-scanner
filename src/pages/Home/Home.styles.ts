import { StyleSheet } from "react-native";
import { Colors } from "@/styles/colors";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {},
  contentView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    height: "90%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "800",
    color: Colors.white,
  },
  logoutButton: {
    position: "absolute",
    top: Constants.statusBarHeight + 10,
    right: 10,
    zIndex: 10,
  },
  logoutText: {
    color: Colors.ligthGray,
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
});
