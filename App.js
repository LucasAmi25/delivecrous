import { StyleSheet, Text, View,Image,Button,TouchableHighlight,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilScreen from './Page/AccueilScreen';
import Panier from './Page/Panier';
import Home from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer >
          <Stack.Navigator  initialRouteName="Delivecrous" >
            <Stack.Screen  name="Delivecrous" component={Home}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('Panier')}>
                  <Image source={require('./assets/utilisateur.png')} style={styles.image} />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#fdf7ef', // Couleur de fond de la barre de navigation
              },
              headerTitleStyle: {
                marginLeft: 120,
                textAlign: 'center', // Pour centrer le texte horizontalement
              },
            })}
            />
            <Stack.Screen name="Panier" component={Panier}
            options={({ navigation, route }) => ({
              headerTitleStyle: {
                marginLeft: 90,
                textAlign: 'center', // Pour centrer le texte horizontalement
              },
              headerStyle: {
                backgroundColor: '#fdf7ef', // Couleur de fond de la barre de navigation
              },
            })}
            />
          </Stack.Navigator>
        </NavigationContainer>
  )
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
  mainContent: {
    marginTop: 110,
  }
});
