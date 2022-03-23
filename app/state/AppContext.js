import React, {createContext, useReducer} from 'react';
import { Children } from 'react/cjs/react.production.min';

// Création du STATE initial
const initialState = {toDoList: [] };

const store = createContext(initialState);
const {Provider} = store;

function AppStateProvider({children}){
  
  const [state, dispatch] = useReducer((previousState, action) => {
    switch(action.type) {

      case "TO_DO_LIST_CHANGE" :
        return {...previousState, toDoList: action.toDoList} ;

      default: return previousState;
    }
  }, initialState);
  
  return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, AppStateProvider};