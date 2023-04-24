import {StyleProp, TextStyle, ViewStyle} from "react-native";

type ButtonProps = {
  buttonText: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onButtonPress?: () => void;
  icon?: JSX.Element;
};

export default ButtonProps;
