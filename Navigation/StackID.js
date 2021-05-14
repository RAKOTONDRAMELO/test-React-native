import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../Components/Login'
import Navigation from './Navigation'

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
        headerTransparent:true,
        animationTypeForReplace:"push",
    }}
      initialRouteName="Log In"
    >
    
      <Stack.Screen 
        name="Log In" 
        component={LogIn} 
        
    />
    <Stack.Screen 
        name="Client" 
        component={Navigation}
        options={{
          transitionSpec: {
            open: configTransitionScreen,
            close: configTransitionScreen,
          },
          headerShown:false
        }} 
      /> 
    </Stack.Navigator>
  );
}
class HomeScreen extends React.Component{
    render(){
        return (
            StackConnection()
          );
    }
}
        
export default HomeScreen  

