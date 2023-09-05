// AccueilScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity, Image } from 'react-native';

function AccueilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}  >
        <Text style={styles.textButton}>Voir le panier </Text>
        <Image source={require('../assets/chariot.png')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  textButton: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    width: "80%",
    height: "9%",
    borderRadius: "5px",
    marginLeft: "10%",
    position: "fixed",
    marginTop: "130%",
    paddingTop: "3"
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: "80%"
  },
})

export default AccueilScreen;
