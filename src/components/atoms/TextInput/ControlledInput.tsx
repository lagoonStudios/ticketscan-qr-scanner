import { useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { View, TextInput as RNTextInput, Text, Platform } from "react-native";

import { styles } from "./TextInput.styles";
import { TextInputProps } from "./TextInput.constants";

export const ControlledInput = (props: TextInputProps) => {
  // --- Hooks ----------------------------------------------------------------------------
  const [focus, setFocus] = useState(false);
  const formContext = useFormContext();
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Local state ----------------------------------------------------------------------
  const { formState } = formContext;
  const { name, label, rules, defaultValue, ...inputProps } = props;
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Refs -----------------------------------------------------------------------------
  const inputRef = useRef(null);
  // --- END: Refs ------------------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const { field } = useController({ name, rules, defaultValue });

  const handleFocus = () => {
    setFocus(true);
    (inputRef.current as any)?.focus();
  };

  const handleBlur = () => {
    setFocus(false);
  };
  // --- END: Data and handlers ------------------------------------------------

  return (
    <View
      style={[
        styles.container,
        focus && styles.containerFocus,
        formState.errors[name] && styles.containerError,
      ]}
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
