import {FlatList} from "react-native/types";

const previousSlide = (
  width: number,
  currentSlideIndex: number,
  ref: React.RefObject<FlatList<any>>,
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const previousSlideIndex = currentSlideIndex - 1;

  if (previousSlideIndex > -1) {
    const offset = previousSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(previousSlideIndex);
  }
};

export default previousSlide;
