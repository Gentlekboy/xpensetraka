import { StyleProp, ViewStyle } from "react-native";

export type CheckboxWithDescriptionProps = {
  isCheckboxTicked: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onCheck: () => void;
  onPressTAndC: () => void;
};
