import {Text, TextInput, View} from "react-native";
import React from "react";
import InputFieldProps from "./types/InputFieldProps";
import {styles} from "./styles";

const InputField = ({
  inputValue,
  placeholder,
  editable,
  inputStyle,
  keyboardType = "default",
  maxLength,
  onChangeText,
}: InputFieldProps) => {
  return (
    <View>
      <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={inputValue}
        keyboardType={keyboardType}
        placeholder={placeholder}
        editable={editable}
        maxLength={maxLength}
      />
    </View>
  );
};

export default InputField;
