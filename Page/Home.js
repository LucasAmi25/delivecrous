import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import MenuItem from './MenuItem.js';
import {Picker} from "@react-native-picker/picker";

export default function Home({ navigation }) {
  const [cart, setCart] = useState([]);
  const menu = [
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
  ]
  //remplacer la valeur de menu par la liste des menus dans la db
  const [menuItems, setMenuItems] = useState(
    menu);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
  };  

  const options = ["None","Allergène 1", "Allergène 2", "Allergène 3","Allergène 4"];
  const [selectedAllergen, setSelectedAllergen] = useState("None");

  // Fonction pour filtrer les éléments du menu en fonction de l'allergène sélectionné
  const filterMenuItems = (allergen) => {
    if (allergen === "None") {
      return menu; // Retourne tous les éléments si "None" est sélectionné
    }
    
    return menu.filter(item => item.allergens.includes(allergen));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Picker
          selectedValue={selectedAllergen}
          style={{ height: 50, width: 250 }}
          mode={"dialog"}
          onValueChange={(itemValue) => {
            setSelectedAllergen(itemValue);
            setMenuItems(filterMenuItems(itemValue)); // Filtrer les éléments du menu
          }}
        >
          {options.map((item) => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
        </Picker>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
