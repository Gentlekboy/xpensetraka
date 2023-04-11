import {FlatList} from "react-native/types";
import onboardingData from "../../../utils/onboarding/onboardingData";

const nextSlide = (
  width: number,
  currentSlideIndex: number,
  ref: React.RefObject<FlatList<any>>,
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const nextSlideIndex = currentSlideIndex + 1;

  if (nextSlideIndex != onboardingData.length) {
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(nextSlideIndex);
  }
};

export default nextSlide;
