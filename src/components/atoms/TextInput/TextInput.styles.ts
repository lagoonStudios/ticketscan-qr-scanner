import { Colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    marginLeft: 15,
    marginTop: 10
  },
  container: {
    height: 'auto',
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: Colors.white
  },
  containerFocus: {
    borderWidth: 2,
    borderColor: Colors.lightGreen
  },
  containerError: {},
  input: {
    margin: 15,
    underlineColor: 'transparent',
    outlineStyle: 'none'
  }
});
