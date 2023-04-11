import {StyleSheet} from "react-native";
import {montserrat500} from "../../../utils/fonts/montserrat";
import {poppins700} from "../../../utils/fonts/poppins";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: poppins700,
    color: "#212325",
    textAlign: "center",
    alignSelf: "center",
    lineHeight: 36,
    marginBottom: 20,
    maxWidth: "90%",
  },
  description: {
    maxWidth: "90%",
    fontSize: 16,
    fontFamily: montserrat500,
    color: "#91919F",
    textAlign: "center",
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
