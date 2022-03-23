import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default function Input({placeholder}) {
  
  return (
    <TextInput placeholder={placeholder} style={styles.container} >
      
    </TextInput>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: 'rgba(60,60,67,0.3)',
    borderBottomWidth: 1,
    paddingBottom: 19,
    paddingTop: 19,
    fontSize: 17,
    marginBottom: 24,
    },
});