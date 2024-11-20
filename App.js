import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackID from './Navigation/StackID'
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import Store from './Store/ConfigStore'

export default class App extends React.Component{
  render(){
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <StackID />
          <StatusBar backgroundColor="white" />
        </NavigationContainer>
      </Provider>
    );
  }
  
}