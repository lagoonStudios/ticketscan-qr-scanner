import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentView: {
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    height: "90%",
  },
  logo: {
    height: 160,
    width: 260,
  },
  formContainer: {
    display: "flex",
    gap: 20,
    width: "70%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "800",
    color: Colors.white,
  },
  errorText: {
    color: Colors.red,
    marginTop: 5,
    marginLeft: 15,
    fontWeight: "600",
  },
  errroSpace: {
    height: 22,
  },
});
