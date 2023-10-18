import React from 'react';
import { View, Text, StyleSheet, FlatList, Button,TouchableOpacity } from 'react-native';

function Panier({ route,navigation }) {
  const { panierItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panier</Text>
      <FlatList 
        data={panierItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.panierItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            {/* Vous pouvez afficher d'autres détails de l'article ici si nécessaire */}
          </View>
        )}
      />
       <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('CommandeValide',navigation) }}>
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
