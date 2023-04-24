import {StyleSheet} from "react-native";
import {montserrat500} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7F3DFF",
    paddingHorizontal: 16,
    borderRadius: 16,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: montserrat500,
    color: "#FCFCFC",
    textAlign: "center",
    marginLeft: 10,
  },
});
