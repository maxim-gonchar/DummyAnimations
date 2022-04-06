import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';

const deviceWidth = Dimensions.get('window').width;

const Card = ({cardText, animatedStyle, pressAnimation}) => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <AnimatedPressable
      style={[styles.animatedCard, animatedStyle]}
      onPress={pressAnimation}>
      <Text style={styles.cardTextStyle}>{cardText}</Text>
    </AnimatedPressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  animatedCard: {
    width: deviceWidth / 2.5,
    height: deviceWidth / 2.5,
    borderRadius: 12,
    backgroundColor: 'skyblue',
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextStyle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
});
