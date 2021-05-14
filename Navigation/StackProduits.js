import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListeProduits from '../Components/ListeProduits'
import Details from '../Components/DetailsProduits'

const Stack = createStackNavigator();
const configTransitionScreen = {
    animation: 'spring',
    config: {
      stiffness: 100,
      damping: 100,
      mass: 2,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
function StackConnection() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            height: 120,
        },
        headerTitleAlign:"center",
        headerTitleStyle: {
            color:"white",
            fontSize:35,
        },
        animationTypeForReplace:"push",
        
    }}
      initialRouteName = "Produits disponibles"
    >
    
      <Stack.Screen 
        name="Produits disponibles" 
        component={ListeProduits} 
        options={{
          headerShown:false
        }} 
        
    />
      <Stack.Screen
        name="Détails" 
        component={Details}
        options={({ route }) =>({
          transitionSpec: {
            open: configTransitionScreen,
            close: configTransitionScreen,
          },
          headerShown:true,
          title: route.params.produit.nom,
          headerStyle: {
              height: 80, 
              backgroundColor : "green"
            }
        })
        }
      />
    </Stack.Navigator>
  );
}
class StackProduis extends React.Component{
    render(){
        return (
            StackConnection()
          );
    }
}
        
export default StackProduis  