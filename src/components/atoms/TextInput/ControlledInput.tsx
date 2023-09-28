import { useController } from "react-hook-form";
import { TextInputProps } from "./TextInput.constants";
import { View, TextInput as RNTextInput, Text, Platform } from "react-native";
import { styles } from "./TextInput.styles";
import { useRef, useState } from "react";

export const ControlledInput = (props: TextInputProps) => {
  const [focus, setFocus] = useState(false);

  //const formContext = useFormContext();
  //const { formState } = formContext;

  const { name, label, rules, defaultValue, ...inputProps } = props;

  const { field } = useController({ name, rules, defaultValue });

  const inputRef = useRef(null);

  const handleFocus = () => {
    setFocus(true);
    (inputRef.current as any)?.focus();
  };
  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <View
      style={[styles.container, focus && styles.containerFocus]}
      focusable
      onFocus={handleFocus}
      onBlur={handleBlur}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View>
        <RNTextInput
          style={[styles.input, Platform.OS === "web" ? styles.inputWeb : {}]}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
          ref={inputRef}
        />
      </View>
    </View>
  );
};
