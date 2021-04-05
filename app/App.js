import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import GaleriaScreen from './src/screen/GaleriaScreen';
import CategoriesScreen from './src/screen/CategoriesScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#fffff'
        drawerStyle={{
          backgroundColor: '#F7DC6F',
          width: 250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#F7DC6F'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Categorias',
          }}
        />
        <Drawer.Screen
          name="Galeria"
          component={GaleriaScreen}
          options={{
            title: 'Galeria',
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;