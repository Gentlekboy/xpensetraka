import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    borderWidth: 1,
    borderColor: "#F1F1FA",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    zIndex: 1,
    color: "#11142D",
  },
  rightPadding: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    padding: 16,
    borderTopEndRadius: 16,
    borderBottomEndRadius: 16,
    zIndex: 2,
  },
});
