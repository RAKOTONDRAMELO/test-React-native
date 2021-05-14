import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsCommande from '../Components/DetailsCommande'
import ListeCommandes from '../Components/ListeCommandes'

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
    <Stack.Navigator 
      screenOptions={{
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
      initialRouteName="ListeCommandes"
    >
    
      <Stack.Screen 
        name="ListeCommandes" 
        component={ListeCommandes} 
        options={{
          headerShown:false
        }} 
        
    />
      <Stack.Screen
        name="DetailsCommande" 
        component={DetailsCommande} 
        
        options={({ route }) =>({
          transitionSpec: {
            open: configTransitionScreen,
            close: configTransitionScreen,
          },
          title: "Commande n°"+route.params.commande.ref,
          headerShown:true,
          headerStyle: {
              height: 80, 
              backgroundColor : "green"
            }
        })}
      />
    </Stack.Navigator>
  );
}
class StackPanir extends React.Component{
    render(){
        return (
            StackConnection()
          );
    }
}
        
export default StackPanir