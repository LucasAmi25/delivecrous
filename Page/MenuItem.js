import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MenuItem({ item, navigation, addToCart, removeFromCart }) {

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(prevSelected => !prevSelected);
    if (!selected) {
      addToCart(item);
    } else {
      removeFromCart(item)
    }
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MenuDetails', { item })}>
        <Text style={styles.buttonText}>Détails</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, selected && {backgroundColor: 'green'}]}
        onPress={handleSelect}>
        <Text style={styles.buttonText}>Sélectionner</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#d8bfd8',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MenuItem;
