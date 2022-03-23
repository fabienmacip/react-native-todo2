import React from 'react';
import { NavigationContainer} from "@react-navigation/native";

import  { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import ToDoCreate from '../screens/ToDoCreate';

export default function Navigation() {

  const RootStack = createNativeStackNavigator();

  return <NavigationContainer>
    <RootStack.Navigator >
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            name="Home" 
            component={Home} 
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="ToDoCreate" 
            component={ToDoCreate} 
            options={{headerShown: false}}
          />
      </RootStack.Group>
    </RootStack.Navigator>
  </NavigationContainer>;
}


