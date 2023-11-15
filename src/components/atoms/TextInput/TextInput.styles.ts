import { StyleSheet } from "react-native";

import { Colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  label: {
    marginLeft: 15,
    marginTop: 10,
    color: Colors.gray.light,
    fontWeight: "600",
  },
  container: {
    height: "auto",
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.white.default,
    shadowColor: Colors.black.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    borderWidth: 2,
    borderColor: Colors.white.default,
  },
  containerFocus: {
    borderWidth: 2,
    borderColor: Colors.green.light,
  },
  containerError: {
    borderWidth: 2,
    borderColor: Colors.red.default,
  },
  input: {
    margin: 15,
  }
});
