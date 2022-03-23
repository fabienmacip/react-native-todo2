import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  
  function handlePress() {
    navigation.navigate("ToDoCreate")
  }

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="go to create page" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});