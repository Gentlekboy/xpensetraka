import {Dimensions, FlatList, Pressable, Text, View} from "react-native";
import React, {useRef, useState} from "react";
import {OnboardingScreenNavProps} from "../../navigation/types/rootStack/navigationProp/OnboardingScreenNavProps";
import {SafeAreaView} from "react-native-safe-area-context";
import onboardingData from "../../utils/onboarding/onboardingData";
import OnboardingScreenItem from "../../components/onboarding/onboardingScreenItem/OnboardingScreenItem";
import OnboardingFooter from "../../components/onboarding/onboardingFooter/OnboardingFooter";
import {styles} from "./styles";
import onMomentumScrollEnd from "./utils/onMomentumScrollEnd";
import skipOnboarding from "./utils/skipOnboarding";
import nextSlide from "./utils/nextSlide";
import previousSlide from "./utils/previousSlide";

const OnboardingScreen = ({navigation}: OnboardingScreenNavProps) => {
  const {width} = Dimensions.get("window");
  const ref = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      {currentSlideIndex < onboardingData.length - 1 ? (
        <Pressable
          style={styles.skipContainer}
          onPress={() => skipOnboarding(width, ref, setCurrentSlideIndex)}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.skipContainer} onPress={null}>
          <Text style={{color: "transparent"}}>Skip</Text>
        </Pressable>
      )}

      <View style={{flex: 1}}>
        <FlatList
          ref={ref}
          horizontal
          pagingEnabled
          data={onboardingData}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{height: "100%"}}
          onMomentumScrollEnd={event =>
            onMomentumScrollEnd(width, event, setCurrentSlideIndex)
          }
          renderItem={({item}) => (
            <OnboardingScreenItem
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              width={width}
            />
          )}
        />
      </View>

      <OnboardingFooter
        currentSlideIndex={currentSlideIndex}
        style={styles.onboardingFooter}
        onPressPrevious={() =>
          previousSlide(width, currentSlideIndex, ref, setCurrentSlideIndex)
        }
        onPressNext={() =>
          nextSlide(width, currentSlideIndex, ref, setCurrentSlideIndex)
        }
        onPressGetStarted={() => navigation.replace("SignUpScreen")}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
