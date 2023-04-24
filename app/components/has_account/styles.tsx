import {StyleSheet} from "react-native";
import {montserrat500, montserrat800} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  noAccountText: {
    fontSize: 14,
    color: "#000",
    fontFamily: montserrat500,
  },
  signUpText: {
    fontSize: 14,
    color: "#000",
    fontFamily: montserrat800,
    marginLeft: 5,
  },
});
