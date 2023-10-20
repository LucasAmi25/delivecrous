import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet,  TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';

const UserDetails = ({ navigation }) => {
  const user = { nom: "Senez", prenom: "Lucas" , username : "Ami", solde : 1050 };
  //changer le user par une requete qui récupère le vrai user et par une variable fix
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nom : {user.nom}</Text>
      <Text>Prénom : {user.prenom}</Text>
      <Text>Username : {user.username}</Text>
      <Text>Solde : {user.solde}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Auth') }}>
        <Text style={styles.buttonText}>Se Déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default UserDetails;