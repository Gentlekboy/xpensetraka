import {ViewStyle} from "react-native/types";

type InputFieldProps = {
  inputValue: string;
  editable?: boolean;
  maxLength?: number;
  placeholder: string;
  inputStyle?: ViewStyle;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
};

export default InputFieldProps;
