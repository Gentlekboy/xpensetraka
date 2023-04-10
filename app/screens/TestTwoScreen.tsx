import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TestTwoScreenNavProps} from '../navigation/types/rootStack/navigationProp/TestTwoScreenNavProps';

const TestTwoScreen = ({navigation}: TestTwoScreenNavProps) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('TestScreen')}>
        <Text>Navigate to TestScreen</Text>
      </Pressable>
    </View>
  );
};

export default TestTwoScreen;

const styles = StyleSheet.create({});
