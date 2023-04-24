import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/rootStack/RootStackParamList";
import OnboardingScreen from "../../screens/onboarding/OnboardingScreen";
import SignUpScreen from "../../screens/signUp/SignUpScreen";
import LoginScreen from "../../screens/login/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: true, title: "Sign Up"}}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: true, title: "Login"}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
