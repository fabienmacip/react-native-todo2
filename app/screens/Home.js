import React from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';

import Title from '../components/UI/Title';
import Button from '../components/UI/Button';

import useAsyncStorageCRUD from '../hooks/useAsyncStorageCRUD';

import ToDoCard from '../components/ToDoCard';

export default function Home({navigation}) {
  const { toDoList, toDoUpdate, toDoDelete } = useAsyncStorageCRUD();
  function handlePress() {
    navigation.navigate("ToDoCreate")
  }

  return (
    <View style={styles.container}>

      <Title>My To-Do App</Title>

        <ScrollView>

          {toDoList.map(({title, description, checked}, index) => {
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

            function handleCheckChange() {
              toDoUpdate(index, {title, description, checked: !checked})
            }
            return (
              <ToDoCard
                key={index}
                title={title}
                description={description}
                checked={checked}
                handleDelete={handleDelete}
                handleCheckChange={handleCheckChange}
              />
            )
          })}

        </ScrollView>

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
    padding: 12,
    width: 'auto',
  },
});