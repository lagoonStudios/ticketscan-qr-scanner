import { Pressable } from "react-native";
import { ButtonProps } from "./Button.constants";
import { styles } from "./Button.styles";

export function Button(props: ButtonProps) {
  const { disabled, onPress, children, ...buttonProps } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.button,
        disabled ? styles.disabled : {},
      ]}
      onPress={onPress}
      {...buttonProps}>
      {children}
    </Pressable>
  );
}
