import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

function Panier({ route }) {
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
      {/* Ajouter un bouton pour passer à la caisse ou effectuer d'autres actions ici si nécessaire */}
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
});

export default Panier;
