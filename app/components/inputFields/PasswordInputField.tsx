import {Pressable, TextInput, View} from "react-native";
import React from "react";
import {PasswordInputFieldProps} from "./types/PasswordInputFieldProps";
import EyeOpened from "../../assets/svg/eyeOpen.svg";
import EyeClosed from "../../assets/svg/eyeClosed.svg";
import {styles} from "./styles";

const PasswordInputField = ({
  inputValue,
  hidePassword = false,
  onChangeText,
  placeholder,
  setHidePassword,
  inputStyle,
}: PasswordInputFieldProps) => {
  return (
    <View>
      <TextInput
        style={[styles.input, styles.rightPadding, inputStyle]}
        onChangeText={onChangeText}
        value={inputValue}
        secureTextEntry={hidePassword}
        placeholder={placeholder}
        keyboardType="default"
      />

      <Pressable onPress={setHidePassword} style={styles.eyeIcon}>
        {hidePassword ? (
          <EyeClosed width={24} height={24} />
        ) : (
          <EyeOpened width={24} height={24} />
        )}
      </Pressable>
    </View>
  );
};

export default PasswordInputField;
