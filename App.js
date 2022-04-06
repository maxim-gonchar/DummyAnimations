import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CardsScreen from './src/screens/CardsScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CardsScreen />
    </SafeAreaView>
  );
};

export default App;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
