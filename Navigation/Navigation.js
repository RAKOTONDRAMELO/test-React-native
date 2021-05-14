import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackProduits from './StackProduits'
import Logout from '../Components/Logout'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackPanier from './StackPanier'
import StackCommandes from './StackCommande'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
        tabBarOptions={
            {
            style:{
                backgroundColor:"black",
                borderColor:"black",
            },
            activeTintColor: '#e91e63',
            showLabel: true
            }
        }
        initialRouteName="Produits"
    >
      <Tab.Screen 
        name="Produits"
        component={StackProduits}
        options={
            {
                tabBarLabel:"Produits",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bottle-wine-outline" color={color} size={size} />
                    ),
            }
        } 

      />
      <Tab.Screen 
        name="Panier"
        component={StackPanier}
        options={
            {
                tabBarLabel:"Mon panier",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="shopping-outline" color={color} size={size} />
                    ),
            }
        } 

      />
      <Tab.Screen 
      name="Commandes" 
      component={StackCommandes} 
      options={
            {
                tabBarLabel:"Mes commandes",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={size} />
                    ),
            }
        } 
      />
      <Tab.Screen 
      name="Logout" 
      component={Logout} 
      options={
            {
                tabBarLabel:"Se déconnecter",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="logout" color={color} size={size} />
                    ),
            }
        } 
      />
    </Tab.Navigator>
  );
}

export default MyTabs