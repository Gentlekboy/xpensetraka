import {Pressable, Animated, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import AddIcon from "../../assets/svg/addIcon.svg";
import IncomeIcon from "../../assets/svg/income.svg";
import ExpenseIcon from "../../assets/svg/expense.svg";
import {styles} from "./styles";

const FloatingActionButton = () => {
  const [opened, setOpened] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  return (
    <Pressable onPress={() => setOpened(!opened)}>
      <Animated.View
        style={[
          styles.incomeButton,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -55],
                }),
              },
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}>
        <IncomeIcon />
      </Animated.View>

      <Animated.View
        style={[
          styles.expenseButton,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 55],
                }),
              },
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}>
        <ExpenseIcon />
      </Animated.View>

      <Animated.View
        style={[
          styles.addButton,
          {
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "45deg"],
                }),
              },
            ],
          },
        ]}>
        <AddIcon />
      </Animated.View>
    </Pressable>
  );
};

export default FloatingActionButton;
