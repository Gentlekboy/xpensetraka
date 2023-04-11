import {NativeSyntheticEvent, NativeScrollEvent} from "react-native/types";

/**
 * This function is called when flatlist items are scrolled.
 * It calculates the current index of a flatlist item using the current
 * screen width and the flatlist item horizontal offset
 * @param width Width of the flatlist item
 * @param e Native event
 * @param setCurrentSlideIndex Function to set the current index of flatlist item
 */
const onMomentumScrollEnd = (
  width: number,
  event: NativeSyntheticEvent<NativeScrollEvent>,
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const contentOffsetX = event.nativeEvent.contentOffset.x;
  const currentIndex = Math.round(contentOffsetX / width);

  setCurrentSlideIndex(currentIndex);
};

export default onMomentumScrollEnd;
