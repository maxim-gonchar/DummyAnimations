import {Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import Card from '../components/Card';

const MovingCard = () => {
  const initialValue = useRef(new Animated.Value(0)).current;
  const animetedStyle = {
    transform: [{translateX: initialValue}],
  };

  const pressAnimation = () => {
    Animated.timing(initialValue, {
      toValue: 100,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(initialValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    });
  };
  return (
    <Card
      cardText="Move right"
      animatedStyle={animetedStyle}
      pressAnimation={pressAnimation}
    />
  );
};

export default MovingCard;
