import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native-web';

import useAsyncStorageCRUD from './useAsyncStorageCRUD';

export default function useNewToDoManage() {
  
  const [title,setTitle] = React.useState('');
  const [description,setDescription] = React.useState('');
  
  const { toDoCreate } = useAsyncStorageCRUD();

  function titleChange(e) {
    setTitle(e)
  }

  function descriptionChange(e) {
    setDescription(e)
  }

  /*
  Champs du formulaire de création de TODO
  Ici, plutôt que d'exporter chaque variable séparément,
  On les exporte en une seule fois via ce tableau. 
  */ 
  const fieldsTab = [{
      value: title,
      onChange: (e) => titleChange(e),
      placeholder: 'Name of the task to do'
    },
    {
      value: description,
      onChange: (e) => descriptionChange(e),
      placeholder: 'Description (optionnal)'
    }
  ] // FIN fieldsTab

  async function handleSubmit(){
    if(title.length === 0) {
      return alert("The todo requires a title.")
    }
    await toDoCreate({title, description, checked: false});
    
    alert("TO DO créée :\n" + title);
    
    setTitle('');
    setDescription('');

  }

  return { fieldsTab, handleSubmit };
}