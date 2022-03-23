import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default function ToDoCreate({navigation}) {
  
  function handlePress() {
    navigation.navigate("Home")
  }
  
  return (
    <View style={styles.container}>
      <Input placeholder='Name of the todo' />
      <Input placeholder='Description (optionnal)' />
      <Button onPress={handlePress}>ToDo Add</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});
