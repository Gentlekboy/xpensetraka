import {StyleSheet} from "react-native";
import {montserrat500} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  skip: {
    fontSize: 16,
    fontFamily: montserrat500,
    color: "#91919F",
  },
  skipContainer: {
    alignSelf: "flex-end",
    padding: 20,
  },
  onboardingFooter: {
    flex: 0.25,
  },
});
