import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Button from '../components/UI/Button';

import useAsyncStorageCRUD from '../hooks/useAsyncStorageCRUD';

import ToDoCard from '../components/ToDoCard';

export default function Home({navigation}) {
  const { toDoList, toDoDelete } = useAsyncStorageCRUD();
  function handlePress() {
    navigation.navigate("ToDoCreate")
  }

  return (
    <View style={styles.container}>

      {toDoList.map(({title, description}, index) => {
        function handleDelete() {

          // Boîte de dialogue pour confirmer que l'USER veut supprimer la TODO.
          Alert.alert("Supprimer","Etes-vous sûr de vouloir supprimer la todo\n< " + title + " > ?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => {
                toDoDelete(index);
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
          );
        }
        return (
          <ToDoCard
            key={index}
            title={title}
            description={description}
            handleDelete={handleDelete}
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