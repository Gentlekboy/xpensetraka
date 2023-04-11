import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types/rootStack/RootStackParamList";
import OnboardingScreen from "../../screens/onboarding/OnboardingScreen";
import TestTwoScreen from "../../screens/TestTwoScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

      <Stack.Screen
        name="TestTwoScreen"
        component={TestTwoScreen}
        options={{headerShown: true, title: "TestTwoScreen"}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
