import {Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import Card from '../components/Card';
import Easing from 'react-native/Libraries/Animated/Easing';

const ShakeCard = () => {
  const initialValue = useRef(new Animated.Value(0)).current;
  const interpolateAnimetedStyle = initialValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '15deg'],
  });
  const animetedStyle = {
    transform: [{rotate: interpolateAnimetedStyle}],
  };
  const pressAnimation = () => {
    Animated.sequence([
      Animated.timing(initialValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(initialValue, {
        toValue: -1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(initialValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(initialValue, {
        toValue: -1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(initialValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(initialValue, {
        toValue: -1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(initialValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };
  return (
    <Card
      cardText="Shake"
      animatedStyle={animetedStyle}
      pressAnimation={pressAnimation}
    />
  );
};

export default ShakeCard;
