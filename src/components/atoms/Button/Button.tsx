import { Pressable } from "react-native";
import { ButtonProps } from "./Button.constants";
import { styles } from "./Button.styles";

export function Button(props: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.button,
        props.disabled ? styles.disabled : {},
      ]}
      onPress={props.onPress}>
      {props.children}
    </Pressable>
  );
}
