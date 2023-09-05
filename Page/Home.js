import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from '../MenuItem.js';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>La carte</Text>
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}






const menuItems = [
  {
    image: require('./assets/image1.png'),
    title: 'Menu 1',
    description: 'Description du menu 1',
  },
  {
    image: require('./assets/image2.png'),
    title: 'Menu 2',
    description: 'Description du menu 2',
  },
  
    
  
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff0f5',  // Couleur de fond du bandeau
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 10,
  },
});
