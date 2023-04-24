import {StyleProp, ViewStyle} from "react-native/types";

export type HasAccountProps = {
  firstText: string;
  secondText: string;
  onPressSecondText: () => void;
  style?: StyleProp<ViewStyle>;
};
