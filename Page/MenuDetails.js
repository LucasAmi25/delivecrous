
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

function MenuDetails({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.allergens}>Allergènes: {item.allergens}</Text>
      <Button title="Sélectionner" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
  allergens: {
    fontSize: 16,
    color: '#555',
  },
});

export default MenuDetails;
