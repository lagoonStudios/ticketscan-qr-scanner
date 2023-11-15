import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "@/pages/SignIn";


// import WelcomeScreen from '../screens/Welcome';
// import SignOutScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{cardOverlayEnabled: false, headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
