import { TouchableOpacity, Text } from "react-native";

import { ButtonProps } from "./Button.constants";

import { styles } from "./Button.styles";

export function Button(props: ButtonProps) {
  const { disabled, onPress, children, ...buttonProps } = props;

  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabled : null]}
      onPress={onPress}
      disabled={disabled}
      {...buttonProps}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
