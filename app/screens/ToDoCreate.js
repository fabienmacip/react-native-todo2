import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import Title from '../components/UI/Title';

import useNewToDoManage from '../hooks/useNewToDoManage';


export default function ToDoCreate({navigation}) {
  
  const { fieldsTab, handleSubmit } = useNewToDoManage();

  function backHome() {
    navigation.navigate("Home")
  }


/*   function handlePress() {
    navigation.navigate("Home")
  } */
  
  return (
    <View style={styles.container}>
      <Title>Add a new task</Title>
      {fieldsTab.map(({value, onChange, placeholder},index) => {
        return <Input key={index} placeholder={placeholder} value={value} onChange={onChange} />
      })}
      <Button onPress={handleSubmit}>ToDo Add</Button>
      <Button onPress={backHome}>Home</Button>
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
    backgroundColor: '#F7F3E9',
  },
});
