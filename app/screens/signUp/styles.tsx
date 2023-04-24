import {StyleSheet} from "react-native";
import {montserrat700} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  scrollview: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },
  inputStyle: {
    marginVertical: 10,
  },
  checkboxContainer: {
    marginVertical: 20,
  },
  orWith: {
    fontSize: 14,
    fontFamily: montserrat700,
    color: "#91919F",
    textAlign: "center",
    marginVertical: 10,
  },
  googleButton: {
    backgroundColor: "#F1F1FA",
  },
  googleButtonText: {
    color: "#212325",
  },
  hasAccount: {
    marginVertical: 20,
  },
});
