import {StyleSheet} from "react-native";
import {montserrat500} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noAccountText: {
    fontSize: 14,
    color: "#91919F",
    fontFamily: montserrat500,
  },
  signUpText: {
    fontSize: 14,
    color: "#7F3DFF",
    fontFamily: montserrat500,
    marginLeft: 5,
  },
});
