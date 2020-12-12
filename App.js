import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-native-navigation'
import {AppDrawerNavigator} from '../components/AppDrawerNavigator'
import Welcome from './screens/Welcome.js';


export default class App extends React.Component{

  render(){
    return(
      <Welcome/>    

      
    );
  }
}


const switchNavigator = createSwitchNavigator({
  Welcome:{
    screen:Welcome
  },
  Drawer:{
    screen:AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(switchNavigator);