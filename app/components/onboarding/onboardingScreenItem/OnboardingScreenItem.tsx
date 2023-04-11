import {Text, View} from "react-native";
import React from "react";
import OnboardingScreenItemProps from "../types/OnboardingScreenItemProps";
import {styles} from "./styles";

const OnboardingScreenItem = ({
  description,
  id,
  image,
  title,
  width,
}: OnboardingScreenItemProps) => {
  return (
    <View style={[styles.container, {width: width}]} key={id}>
      <View style={styles.image}>{image}</View>

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default OnboardingScreenItem;
