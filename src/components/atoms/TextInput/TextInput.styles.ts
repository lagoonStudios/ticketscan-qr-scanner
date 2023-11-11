import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    marginLeft: 15,
    marginTop: 10,
    color: Colors.ligthGray,
    fontWeight: "600",
  },
  container: {
    height: "auto",
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  containerFocus: {
    borderWidth: 2,
    borderColor: Colors.lightGreen,
  },
  containerError: {
    borderWidth: 2,
    borderColor: Colors.red,
  },
  input: {
    margin: 15,
  }
});
