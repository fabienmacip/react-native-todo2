import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/UI/Button';

import useAsyncStorageCRUD from '../hooks/useAsyncStorageCRUD';

export default function Home({navigation}) {
  const { toDoList } = useAsyncStorageCRUD();
  function handlePress() {
    navigation.navigate("ToDoCreate")
  }

  return (
    <View style={styles.container}>

      {toDoList.map(({title, description}, index) => {
        return (
          <View key={index}>
            <Text>{title}</Text>
            <Text>{description === "" ? "No description" : description}</Text>
          </View>
        )
      })}

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