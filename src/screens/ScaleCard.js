import {Animated} from 'react-native';
import React, {useRef} from 'react';
import Card from '../components/Card';

const ScaleCard = () => {
  const initialValue = useRef(new Animated.Value(1)).current;
  const animetedStyle = {
    transform: [{scale: initialValue}],
  };

  const pressAnimation = () => {
    Animated.timing(initialValue, {
      toValue: 1.2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(initialValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <Card
      cardText="Make bigger"
      animatedStyle={animetedStyle}
      pressAnimation={pressAnimation}
    />
  );
};

export default ScaleCard;
