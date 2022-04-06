import {View, Text, Animated} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './ScreenStyles';
import Card from '../components/Card';
import ScaleCard from './ScaleCard';
import RotateCard from './RotateCard';
import FlipCard from './FlipCard';
import MovingCard from './MovingCard';
import ShakeCard from './ShakeCard';

const CardsScreen = () => {
  return (
    <View style={styles.container}>
      <ScaleCard />
      <RotateCard />
      <FlipCard />
      <MovingCard />
      <ShakeCard />
    </View>
  );
};

export default CardsScreen;
