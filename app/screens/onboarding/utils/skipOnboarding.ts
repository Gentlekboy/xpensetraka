import {FlatList} from "react-native/types";
import onboardingData from "../../../utils/onboarding/onboardingData";

const skipOnboarding = (
  width: number,
  ref: React.RefObject<FlatList<any>>,
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const lastSlideIndex = onboardingData.length - 1;
  const offset = lastSlideIndex * width;
  ref?.current?.scrollToOffset({offset});
  setCurrentSlideIndex(lastSlideIndex);
};

export default skipOnboarding;
