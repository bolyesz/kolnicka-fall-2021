import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Home = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handlePress = () => setText(name);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ahoj {text}!</Text>
      <View style={{ marginBottom: 8 }}>
        <Button title="Change text" onPress={handlePress} />
      </View>
      <TextInput
        style={{
          borderWidth: 1,
          width: 100,
          padding: 8,
        }}
        onChangeText={(text: string) => setName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
});

export default Home;
