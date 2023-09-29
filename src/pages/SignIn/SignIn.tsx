import React from "react";
import Toast from "react-native-toast-message";
import { useMutation } from "@tanstack/react-query";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

import { handleAuthErrorMessage, logIn } from "@/hooks/auth/auth";

import { styles } from "./SignIn.styles";
import { FormValues } from "./SignIn.constants";

import { AntDesign } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { Button } from "@/components/atoms/Button/Button";
import { TextInput } from "@/components/atoms/TextInput/TextInput";
import { FooterLegent } from "@/components/atoms/FooterLegend/FooterLegend";

export function SignIn(): React.JSX.Element {
  // --- Hooks ----------------------------------------------------------------------------
  const { ...methods } = useForm({ defaultValues: { email: "", password: "" } });

  const loginMutation = useMutation(
    (data: { email: string; password: string }) => logIn(data.email, data.password),
    {
      onError: (error: any) => {
        Toast.show({
          type: "error",
          text1: handleAuthErrorMessage(error.message),
        });
      },
    }
  );
  // --- END: Hooks -----------------------------------------------------------------------

  // --- Local state ----------------------------------------------------------------------
  const errors = methods.formState.errors;
  // --- END: Local state ----------------------------------------------------------------

  // --- Data and handlers ----------------------------------------------------------------
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    loginMutation.mutate(data);
  };
  // --- END: Data and handlers ----------------------------------------------------------

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentView}>
        <View>
          <Image source={require("@/assets/logo.png")} alt="Ticket scan logo" />
        </View>
        <FormProvider {...methods}>
          <View style={styles.formContainer}>
            <View>
              <TextInput
                name="email"
                label="Email"
                inputMode="email"
                rules={{
                  required: "Email is required!",
                  pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                }}
              />
              {!errors.email && <View style={styles.errroSpace}></View>}
              {errors.email && errors.email.type === "required" && (
                <Text style={styles.errorText}>Requerido</Text>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <Text style={styles.errorText}>Email Inválido</Text>
              )}
            </View>

            <View>
              <TextInput
                name="password"
                label="Password"
                secureTextEntry
                rules={{ required: "Password is required!" }}
              />
              {!errors.password && <View style={styles.errroSpace}></View>}
              {errors.password && errors.password.type === "required" && (
                <Text style={styles.errorText}>Requerido</Text>
              )}
            </View>
            <Button disabled={loginMutation.isLoading} onPress={methods.handleSubmit(onSubmit)}>
              {loginMutation.isLoading && (
                <AntDesign style={styles.buttonText} name="loading1" size={16} color="black" />
              )}
              {!loginMutation.isLoading && <Text style={styles.buttonText}>Submit</Text>}
            </Button>
          </View>
        </FormProvider>
      </ScrollView>
      <FooterLegent />
    </View>
  );
}
