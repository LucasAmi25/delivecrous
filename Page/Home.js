import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from './MenuItem.js';
import Panier from './Panier';

export default function Home({ navigation }) {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
  };  

  
  return (
    <SafeAreaView style={styles.container}>
      
        <TouchableOpacity 
        style={styles.cartButton}
        onPress={() => navigation.navigate('Panier', { panierItems: cart,navigation })}
        >
          <Ionicons name="cart" size={24} color="black" />
        </TouchableOpacity>
      <ScrollView>
        <Text style={styles.title}>La carte</Text>
        {menuItems.map((item, index) => (
          <MenuItem 
          key={index} 
          item={item} 
          navigation={navigation} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const menuItems = [
  {
    image: require('../assets/image1.png'),
    title: 'Menu 1',
    description: 'Description du menu 1',
    allergens: 'Allergène 1, Allergène 2',
  },
  {
    image: require('../assets/image2.png'),
    title: 'Menu 2',
    description: 'Description du menu 2',
    allergens: 'Allergène 3, Allergène 4',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff0f5',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 10,
  },
});
