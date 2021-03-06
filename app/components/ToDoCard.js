import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ToDoCard({title, description, checked, handleDelete, handleCheckChange}) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox} onPress={handleCheckChange}>
        {checked && <Ionicons name="checkmark" size={32} color='black' />}
      </TouchableOpacity>
      <View style={{width: '100%'}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={description === "" ? styles.descriptionEmpty : styles.description}>{description === "" ? "Pas de description" : description}</Text>
        <TouchableOpacity onPress={handleDelete}><Text style={styles.deleteText}>Delete</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(60,60,67,0.6)',
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: 16,
    marginBottom: 4,
    marginTop: 12,
  },
  checkBox: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(60,60,67,0.6)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: '600',
    marginBottom: 4,
    fontSize: 18,
  },
  description: {
    color: 'rgba(60,60,67,0.6)',
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionEmpty: {
    backgroundColor: 'rgba(60,60,67,0.2)',
    fontSize: 16,
    color: 'white',
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 8,
  },
  deleteText: {
    color: 'rgba(0,122,255,1)',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
  },

});