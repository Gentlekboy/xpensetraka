import {StyleSheet} from "react-native";
import {montserrat500} from "../../utils/fonts/montserrat";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    flexWrap: "wrap",
  },
  textStyle: {
    color: "#000000",
    fontSize: 14,
    fontFamily: montserrat500,
    marginLeft: 8,
  },
  bold: {
    color: "#7F3DFF",
  },
  padding: {
    padding: 4,
  },
});
