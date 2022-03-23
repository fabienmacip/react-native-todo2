import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/UI/Button';

export default function Home({navigation}) {
  
  function handlePress() {
    navigation.navigate("ToDoCreate")
  }

  return (
    <View style={styles.container}>
      <Button onPress={handlePress}>+ Add a ToDo</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});