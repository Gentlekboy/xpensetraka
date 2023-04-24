import {Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {HasAccountProps} from "./types/HasAccountProps";

const HasAccount = ({
  firstText,
  onPressSecondText,
  secondText,
  style,
}: HasAccountProps) => {
  return (
    <View style={[styles.signUpContainer, style]}>
      <Text style={styles.noAccountText}>{firstText}</Text>

      <Pressable onPress={onPressSecondText}>
        <Text style={styles.signUpText}>{secondText}</Text>
      </Pressable>
    </View>
  );
};

export default HasAccount;
