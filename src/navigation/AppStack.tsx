import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "@/pages/Home";
import { Scanner } from "@/pages/Scanner/Scanner";

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ cardOverlayEnabled: false, headerShown: false }}
        />
         <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{ cardOverlayEnabled: false, headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
