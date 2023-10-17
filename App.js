import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Page/Home';
import MenuDetails from './Page/MenuDetails';
import Panier from './Page/Panier';
import Auth from './Page/Auth';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MenuDetails" component={MenuDetails} />
        <Stack.Screen name="Panier" component={Panier} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
