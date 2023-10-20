import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const panierItems = [
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
  }
];
//changer panierItems par une requete qui donne le panier de l'utilisateur
function Panier({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panier</Text>
      <FlatList
        data={panierItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.panierItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemAllergens}>{item.allergens}</Text>
            {/* Vous pouvez afficher d'autres détails de l'article ici si nécessaire */}
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('CommandeValide', { panierItems }) }}>
        <Text style={styles.buttonText}>Valider achat</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  panierItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7b38d8',
    borderRadius: 10,
    borderColor: '#cccccc',
    borderWidth: 4,
    width: '48%', // Réduit la largeur des boutons
    padding: 10, // Réduit la taille du padding
    alignItems: 'center',
    marginVertical: 5, // Espace les boutons verticalement
  },
  buttonText: {
    color: '#eeeeee',
    fontSize: 16, // Réduit la taille du texte
  },
});

export default Panier;
