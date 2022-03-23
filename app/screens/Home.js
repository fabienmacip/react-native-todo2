import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/UI/Button';

import useAsyncStorageCRUD from '../hooks/useAsyncStorageCRUD';

import ToDoCard from '../components/ToDoCard';

export default function Home({navigation}) {
  const { toDoList } = useAsyncStorageCRUD();
  function handlePress() {
    navigation.navigate("ToDoCreate")
  }

  return (
    <View style={styles.container}>

      {toDoList.map(({title, description}, index) => {
        return (
          <ToDoCard
            key={index}
            title={title}
            description={description}
          />
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