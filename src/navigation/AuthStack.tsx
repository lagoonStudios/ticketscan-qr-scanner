import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "@/pages/SignIn/SignIn";

// import WelcomeScreen from '../screens/Welcome';
// import SignOutScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ cardOverlayEnabled: false, headerShown: false }}
        />
        {/* <Stack.Screen name="Sign Up" component={SignOutScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
