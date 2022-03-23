import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAsyncStorageCRUD() {
  
  const [toDoList, setToDoList] = React.useState([]);

  // Au lancement de la page uniquement (grâce au 2ème argument []),
  // On charge les données sauvegardées sur le téléphone.
  React.useEffect(() => {
    // Ici, pas besoin d'écrire le mot-clé AWAYT devant AsyncStorage
    // Car useEffect() est déjà par défaut une fonction asynchrone.
    AsyncStorage.getItem('toDoList').then((savedToDoList) => {
      if(savedToDoList) {
        let parsedList = JSON.parse(savedToDoList);
        setToDoList(parsedList);
      }
      
      console.log(e)
    })
  }, []);

  async function toDoCreate(todo){
    
    // Sauvegarde de la todolist actuelle
    // Il faut décomposer le tableau via les ...
    const newToDoList = [...toDoList];
    
    // Ajout de la nouvelle TODO
    newToDoList.push(todo);

    // Ces 2 lignes viennent de la documentation de AsyncStorage
    // Stockage de la liste des TODO à jour
    const jsonValue = JSON.stringify(newToDoList);
    await AsyncStorage.setItem("toDoList", jsonValue);

  }
  
  return { toDoList, toDoCreate };
}