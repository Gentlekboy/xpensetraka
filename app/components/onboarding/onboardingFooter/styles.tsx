import {StyleSheet} from "react-native";
import {montserrat500} from "../../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: "#EEE5FF",
    marginHorizontal: 4,
    borderRadius: 8,
  },
  currentIndex: {
    width: 16,
    height: 16,
    backgroundColor: "#7F3DFF",
    borderRadius: 16,
  },
  navigateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navigateNext: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  navigatePrevious: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  navigateText: {
    fontSize: 16,
    fontFamily: montserrat500,
    color: "#212325",
  },
});
