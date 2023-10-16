import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Button } from 'react-native';

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
          </View>
        )}
      />

      <View style={styles.deliverySection}>
        <Text style={styles.deliveryPrompt}>Où veux-tu te faire livrer la course?</Text>
        
        <TextInput 
          style={styles.inputField}
          placeholder="La rue"
        />
        
        <TextInput 
          style={styles.inputField}
          placeholder="La ville"
        />

        <TextInput 
          style={styles.inputField}
          placeholder="Le code postal"
          keyboardType="numeric"
        />
        
        <Button 
          title="Passer commande"
          color="#f194ff"
          onPress={() => {
            // Ici, vous pouvez ajouter une fonction qui gère l'action de passer commande
          }}
          style={styles.orderButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
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
  deliverySection: {
    padding: 10,
  },
  deliveryPrompt: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  orderButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'votre_couleur_ici', 
    padding: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: 'votre_couleur_ici', 
    fontWeight: 'bold',
  },
});

export default Panier;
