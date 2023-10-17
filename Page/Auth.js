import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

export default function Auth({ navigation }){
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Page de connexion</Text>
      <TextInput style={styles.input} placeholder="Nom d'utilisateur" />
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home') }}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {/* navigation.navigate('Inscription') */}}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    width: '100%',
    height: 100,
    paddingTop: 40,
    backgroundColor: '#fdf7ef',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
  authContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    marginTop: 120,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Affiche les boutons en ligne
    justifyContent: 'space-between', // Espace les boutons de manière égale
    width: '80%',
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
