import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Page/Home';
import MenuDetails from './Page/MenuDetails';
import Panier from './Page/Panier';
import Auth from './Page/Auth';
import Inscription from './Page/Inscription';
import UserDetails  from './Page/User';
import CommandeValidee from './Page/PageValide';

const Stack = createStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Auth" component={Auth} options={{
            title: 'Connexion', // Changement du nom de l'écran
            headerStyle: {
              backgroundColor: '#7b38d8',
    
            },
            headerTitleAlign: 'center',
            
            
          }}/>
          <Stack.Screen name="Inscription" component={Inscription} options={{
            title: 'Inscription', // Changement du nom de l'écran
            headerLeft: ()=> null,
            headerStyle: {
              backgroundColor: '#7b38d8',
    
            },
            headerTitleAlign: 'center',
            
            
          }}/>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={({ navigation, route }) => ({  
          title: 'Delivecrous',
          headerStyle: {
            backgroundColor: '#7b38d8',
  
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('UserDetails',{navigation})}>
              <Image source={require('./assets/utilisateur.png')} style={styles.image} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity style={styles.image2} onPress={() => navigation.navigate('Panier',{navigation})}>
              <Image source={require('./assets/chariot.png')} style={styles.image2} />
            </TouchableOpacity>
          ),
        })}
        
       
            />
        <Stack.Screen 
        name="MenuDetails" 
        component={MenuDetails} 
        options={{  
          
          title: 'Delivecrous',
          headerStyle: {
            backgroundColor: '#7b38d8',
  
          },
          headerTitleAlign: 'center',
          
          
        }}
        />
        <Stack.Screen name="UserDetails" component={UserDetails}  options={{  
          
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#7b38d8',
  
          },
          headerTitleAlign: 'center',
          
          
        }}/>
        <Stack.Screen name="Panier" component={Panier} options={{  
          
          title: 'Panier',
          headerStyle: {
            backgroundColor: '#7b38d8',
  
          },
          headerTitleAlign: 'center',
          
          
        }}/> 
        <Stack.Screen name="CommandeValide" component={CommandeValidee} options={{  
          
          title: 'Validation',
          headerStyle: {
            backgroundColor: '#7b38d8',
  
          },
          headerTitleAlign: 'center',
          
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  headerTitle: {
    color: "black",
    fontSize: 20,
    marginLeft:"36%",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: "10%"
  },
  image2: {
    width: 30,
    height: 30,
    marginLeft: "10%"
  },
  mainContent: {
    marginTop: 110,
  }
});
