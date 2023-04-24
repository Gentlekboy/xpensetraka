import {ViewStyle} from "react-native";

export type PasswordInputFieldProps = {
  inputValue: string;
  inputStyle?: ViewStyle;
  onChangeText: (text: string) => void;
  hidePassword: boolean;
  placeholder: string;
  setHidePassword: () => void;
};
