import {StyleProp, ViewStyle} from "react-native/types";

type OnboardingFooterProps = {
  style: StyleProp<ViewStyle>;
  currentSlideIndex: number;
  onPressPrevious: () => void;
  onPressNext: () => void;
  onPressGetStarted: () => void;
};

export default OnboardingFooterProps;
