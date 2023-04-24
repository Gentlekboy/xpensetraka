import {StyleSheet} from "react-native";
import {montserrat500} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  scrollview: {
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
  orWith: {
    fontSize: 14,
    fontFamily: montserrat500,
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
  loginButton: {
    marginTop: 20,
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: montserrat500,
    color: "#7F3DFF",
    textAlign: "right",
    marginTop: 10,
  },
});
