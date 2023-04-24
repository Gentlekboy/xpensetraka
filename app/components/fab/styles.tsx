import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#7F3DFF",
    borderRadius: 30,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    marginTop: -20,
    position: "relative",
  },
  incomeButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00A86B",
    width: 50,
    height: 50,
    top: -15,
    left: 0,
    borderRadius: 25,
  },
  expenseButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FD3C4A",
    width: 50,
    height: 50,
    top: -15,
    left: 0,
    borderRadius: 25,
  },
});
