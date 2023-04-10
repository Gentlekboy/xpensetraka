import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TestScreenNavProps} from '../navigation/types/rootStack/navigationProp/TestScreenNavProps';

const TestScreen = ({navigation}: TestScreenNavProps) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('TestTwoScreen')}>
        <Text>Navigate to TestTwoScreen</Text>
      </Pressable>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
