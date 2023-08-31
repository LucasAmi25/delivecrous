import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <Header></Header>
  )
}
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 40,
    backgroundColor: "#fdf7ef",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
  },
  headerTitle: {
    color: "white",
    fontSize: 20
  }
});
