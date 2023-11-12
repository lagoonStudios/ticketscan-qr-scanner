import React from "react";
import { View, Text, Pressable } from "react-native";

import { logOut } from "@/hooks/auth";
import { styles } from "./LogoutButton.styles";
import { LogOutButtonProps } from "./LogoutButton.constants";

export function LogoutButton(props: LogOutButtonProps): React.JSX.Element {
  const { containerStyles, textStyles, ...pressableProps } = props;
  return (
    <View style={containerStyles}>
      <Pressable {...pressableProps} style={styles.logoutButton} onPress={() => logOut()}>
        <Text style={(styles.logoutText, textStyles)}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}
