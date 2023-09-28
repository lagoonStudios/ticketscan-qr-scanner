import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./Button.constants";
import { styles } from "./Button.styles";

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button,  props.disabled ? styles.disabled : {}]} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
}
