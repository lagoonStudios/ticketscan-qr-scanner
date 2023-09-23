import { handleAuthErrorMessage, logIn } from "@/hooks/auth/auth";
import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./SignIn.styles";

export function SignIn(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  // --- END: Hooks -----------------------------------------------------------------------

  async function handleSignIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email y contraseña son requeridos.",
      });
      return;
    }

    try {
      await logIn(value.email, value.password);
    } catch (error: any) {
      console.log("error: ", error);
      setValue({
        ...value,
        error: handleAuthErrorMessage(error.message),
      });
    }
  }
  return (
    <View style={styles.container}>
      <Text>Signin screen!</Text>

      {!!value.error && (
        <View style={styles.error}>
          <Text>{value.error}</Text>
        </View>
      )}

      <View style={styles.controls}>
        <TextInput
          placeholder="Email"
          style={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />

        <TextInput
          placeholder="Password"
          style={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.control} onPress={handleSignIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
