import {Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import Card from '../components/Card';
import Easing from 'react-native/Libraries/Animated/Easing';

const RotateCard = () => {
  const initialValue = useState(new Animated.Value(0))[0];
  const interpolateAnimetedStyle = initialValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animetedStyle = {
    transform: [{rotate: interpolateAnimetedStyle}],
  };

  const pressAnimation = () => {
    Animated.timing(initialValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      initialValue.setValue(0);
    });
  };
  return (
    <Card
      cardText="Rotate"
      animatedStyle={animetedStyle}
      pressAnimation={pressAnimation}
    />
  );
};

export default RotateCard;
