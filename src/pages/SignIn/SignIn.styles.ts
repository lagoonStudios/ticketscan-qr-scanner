import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
  },
  logo: {
    height: 160,
    width: 260,
  },
  formContainer: {
    display: "flex",
    gap: 30,
    width: "70%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "800",
    color: Colors.white,
  },
});
