import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import { SignUpScreenNavProps } from "../navigation/types/rootStack/navigationProp/SignUpScreenNavProps";

const SignUpScreen = ({navigation}: SignUpScreenNavProps) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate("OnboardingScreen")}>
        <Text>Navigate to TestScreen</Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
