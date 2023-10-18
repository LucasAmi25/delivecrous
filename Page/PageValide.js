import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const CommandeValidee = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Votre commande a été validée !</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home') }}>
        <Text style={styles.buttonText}>Retour aux plats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default CommandeValidee;