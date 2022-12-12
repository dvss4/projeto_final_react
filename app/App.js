import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarHeightCallbackContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/Ionicons"
import sobre from "./telas/sobre"
import bio from "./telas/bio"
import vida_academica from "./telas/vida_academica"
import musicasfav from "./telas/musicasfav"
import fim from "./telas/fim"




export default function App() {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{tabBarShowLabel: false,}}>
      <Tab.Screen options ={{tabBarIcon:({focused})=>(<Text><Icon name="user" size={20} color={focused?"#ffb6c1":"black"} /></Text>)}} name="Sobre mim" component={sobre} />
      <Tab.Screen options ={{tabBarIcon:({focused})=>(<Text><Icon name="heart" size={20} color={focused?"#ffb6c1":"black"} /></Text>)}} name="O que eu gosto" component={bio} />
      <Tab.Screen options ={{tabBarIcon:({focused})=>(<Text><Icon2 name="school" size={20} color={focused?"#ffb6c1":"black"} /></Text>)}} name="vida acadêmica" component={vida_academica} />
      <Tab.Screen options ={{tabBarIcon:({focused})=>(<Text><Icon name="music" size={20} color={focused?"#ffb6c1":"black"} /></Text>)}} name="Cantores favoritos" component={musicasfav} />
      <Tab.Screen options ={{tabBarIcon:({focused})=>(<Text><Icon name="close" size={20} color={focused?"#ffb6c1":"black"} /></Text>)}} name="fim" component={fim} />

    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
