import React,{ useState,Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';

function createUser(pnom,pprenom,pusername,pmdp,psolde){
  const apiUrl = 'http://localhost:8080/delivecrous/users/create';

  const utilisateur = {
    nom: 'Dupont',
    prenom: 'Jean',
    username: 'jdupont',
    password: 'motdepasse123',
    solde: 1000.50
  };
  
}

export default function Inscription({ navigation }){
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [solde, setSolde] = useState('');
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Page de connexion</Text>
      <TextInput style={styles.input} value={nom} placeholder="Nom" onChangeText={text => setNom(text)}/>
      <TextInput style={styles.input} placeholder="Prenom" value={prenom} onChangeText={text => setPrenom(text)}/>
      <TextInput style={styles.input} placeholder="Pseudo" value={pseudo}
        onChangeText={text => setPseudo(text)}/>
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} value={motDePasse}
        onChangeText={text => setMotDePasse(text)}/>
      <TextInput style={styles.input} placeholder="Solde" value={solde}
        onChangeText={text => setSolde(text)}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('Auth') //envoie faire la page de connexion
          }}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {createUser(nom,prenom,pseudo,motDePasse,solde)//tu dois faire la requete pour créer un user
        }}> 
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Ajustez la justification au centre
    alignItems: 'center', // Ajustez l'alignement au centre
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
