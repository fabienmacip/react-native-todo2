import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ToDoCard({title, description}) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
    marginBottom: 16,
  },
  checkBox: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(60,60,67,0.6)',
    borderRadius: 4,
  },
  title: {
    color: 'black',
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: 'rgba(60,60,67,0.6)',
  }

});