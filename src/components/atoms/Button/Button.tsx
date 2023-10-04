import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./Button.constants";
import { styles } from "./Button.styles";

export function Button(props: ButtonProps) {
  const { disabled, onPress, children, ...buttonProps } = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
      {...buttonProps}>
      {children}
    </TouchableOpacity>
  );
}
