// AccueilScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function AccueilScreen({ navigation }) {
  return (
    <View>
      <Text>acceuil</Text>
    </View>
  );
}

AccueilScreen.navigationOptions = {
  title: 'Delivecrous', // Titre de la page
  headerRight: () => (
    <Button
      onPress={() => alert('Bouton personnalisé dans la barre de navigation')}
      title="Bouton"
      color="blue" // Couleur du bouton
    />
  ),
};

export default AccueilScreen;
