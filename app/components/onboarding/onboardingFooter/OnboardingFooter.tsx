import {Pressable, Text, View} from "react-native";
import React from "react";
import onboardingData from "../../../utils/onboarding/onboardingData";
import OnboardingFooterProps from "../types/OnboardingFooterProps";
import {styles} from "./styles";
import NextIcon from "../../../assets/svg/nextIcon.svg";
import PreviousIcon from "../../../assets/svg/previousIcon.svg";

const OnboardingFooter = ({
  currentSlideIndex,
  style,
  onPressNext,
  onPressPrevious,
  onPressGetStarted,
}: OnboardingFooterProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.currentIndex,
            ]}
          />
        ))}
      </View>

      {currentSlideIndex === 0 && (
        <Pressable style={styles.navigateNext} onPress={onPressNext}>
          <Text style={styles.navigateText}>Next</Text>
          <NextIcon />
        </Pressable>
      )}

      {currentSlideIndex === 1 && (
        <View style={styles.navigateContainer}>
          <Pressable style={styles.navigatePrevious} onPress={onPressPrevious}>
            <PreviousIcon />
            <Text style={styles.navigateText}>Previous</Text>
          </Pressable>

          <Pressable style={styles.navigateNext} onPress={onPressNext}>
            <Text style={styles.navigateText}>Next</Text>
            <NextIcon />
          </Pressable>
        </View>
      )}

      {currentSlideIndex === 2 && (
        <View style={styles.navigateContainer}>
          <Pressable style={styles.navigatePrevious} onPress={onPressPrevious}>
            <PreviousIcon />
            <Text style={styles.navigateText}>Previous</Text>
          </Pressable>

          <Pressable style={styles.navigateNext} onPress={onPressGetStarted}>
            <Text style={styles.navigateText}>Get Started</Text>
            <NextIcon />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default OnboardingFooter;
