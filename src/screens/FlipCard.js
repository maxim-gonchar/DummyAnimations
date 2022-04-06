import {Animated} from 'react-native';
import React, {useState} from 'react';
import Card from '../components/Card';

const FlipCard = () => {
  const initialValue = useState(new Animated.Value(0))[0];
  const interpolateAnimetedStyle = initialValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animetedStyle = {
    transform: [{rotateY: interpolateAnimetedStyle}],
  };
  const pressAnimation = () => {
    Animated.spring(initialValue, {
      toValue: 1,
      useNativeDriver: true,
      friction: 12,
      tension: 10,
    }).start(() => {
      initialValue.setValue(0);
    });
  };
  return (
    <Card
      cardText="Flip"
      animatedStyle={animetedStyle}
      pressAnimation={pressAnimation}
    />
  );
};

export default FlipCard;
