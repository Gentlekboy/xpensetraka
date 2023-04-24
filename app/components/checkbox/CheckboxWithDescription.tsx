import {Pressable, Text, View} from "react-native";
import React from "react";
import CheckBoxIcon from "../../assets/svg/checkbox.svg";
import TickedCheckBox from "../../assets/svg/checkboxTicked.svg";
import {styles} from "./styles";
import {CheckboxWithDescriptionProps} from "./types/CheckboxWithDescriptionProps";

const CheckboxWithDescription = ({
  isCheckboxTicked,
  onCheck,
  onPressTAndC,
  containerStyle,
}: CheckboxWithDescriptionProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable onPress={onCheck} style={styles.padding}>
        {isCheckboxTicked ? <TickedCheckBox /> : <CheckBoxIcon />}
      </Pressable>

      <Pressable onPress={onPressTAndC}>
        <Text style={styles.textStyle}>
          By signing up, you agree to the{" "}
          <Text style={styles.bold}> Terms & Conditions</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default CheckboxWithDescription;
