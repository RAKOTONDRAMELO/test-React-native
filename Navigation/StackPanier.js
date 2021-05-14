import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Panier from '../Components/Panier'
import Register from '../Components/Register'

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
          headerTransparent:true,
          animationTypeForReplace:"push",
    }}
      initialRouteName = "Panier"
    >
    
      <Stack.Screen 
        name="Panier" 
        component={Panier} 
        options={{
          headerShown:false
        }} 
        
    />
      <Stack.Screen
        name="Adresse" 
        component={Register} 
        options={{
          transitionSpec: {
            open: configTransitionScreen,
            close: configTransitionScreen,
          },
        }}
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