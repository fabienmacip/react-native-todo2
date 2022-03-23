import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ToDoCreate() {
  return (
    <View style={styles.container}>
      <Text>To Do Create</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});