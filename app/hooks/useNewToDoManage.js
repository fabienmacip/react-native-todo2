import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function useNewToDoManage() {
  
  const [title,setTitle] = React.useState('');
  const [description,setDescription] = React.useState('');
  
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

  function handleSubmit(){
    if(title.length === 0) {
      return alert("The todo requires a title.")
    }
    alert(title)
  }

  return { fieldsTab, handleSubmit };
}