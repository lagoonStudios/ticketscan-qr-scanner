//import { handleAuthErrorMessage, logIn } from "@/hooks/auth/auth";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./SignIn.styles";
import { FormValues } from "./SignIn.constants";
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { TextInput } from "@/components/atoms/TextInput/TextInput";
import { Button } from "@/components/atoms/Button/Button";

export function SignIn(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const { ...methods } = useForm({ defaultValues: { email: "", password: "" } });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log("submit: ", { data });

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    return console.log("Error: ", errors);
  };
  // --- END: Hooks -----------------------------------------------------------------------
  // const onSubmit = async (data: any) => {
  //   console.log(data);

  //   // try {
  //   //   await logIn(value.email, value.password);
  //   // } catch (error: any) {
  //   //   console.log("error: ", error);
  //   //   setValue({
  //   //     ...value,
  //   //     error: handleAuthErrorMessage(error.message),
  //   //   });
  //   // }
  // };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('@/assets/logo.png')} alt="Ticket scan logo"/>
      </View>
      <FormProvider {...methods}>
        <View style={styles.formContainer}>
          <TextInput
            name="email"
            label="Email"
            placeholder="jon.doe@email.com"
            keyboardType="email-address"
            rules={{ required: "Email is required!" }}
          />
          <TextInput
            name="password"
            label="Password"
            secureTextEntry
            rules={{ required: "Password is required!" }}
          />
          <Button onPress={methods.handleSubmit(onSubmit, onError)}>
            <Text style={styles.buttonText}>Submit</Text>
          </Button>
        </View>
      </FormProvider>
      <View></View>
    </View>
  );
}
