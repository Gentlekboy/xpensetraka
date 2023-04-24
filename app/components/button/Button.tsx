import {Pressable, Text, View} from "react-native";
import React from "react";
import ButtonProps from "./types/ButtonProps";
import {styles} from "./styles";

const Button = ({
  buttonText,
  style,
  textStyle,
  icon,
  onButtonPress,
}: ButtonProps) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onButtonPress}>
      {icon ? (
        <View style={styles.iconAndText}>
          {icon}
          <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
        </View>
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
      )}
    </Pressable>
  );
};

export default Button;
