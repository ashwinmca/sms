//Example to Refresh Previous Screen When Going Back in React Navigation//
import React, { Component } from 'react';
//import react in our code. 
 
import {createStackNavigator,createAppContainer} from 'react-navigation';
//import Navigator in our project
 
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage'
import SignUp from './pages/SignUp'

//import all the screens we are going to switch 
 
const App = createStackNavigator({
    FirstPage: { screen: FirstPage }, 
    SecondPage: { screen: SecondPage },
    ThirdPage: {screen: ThirdPage}, 
    SignUp:{screen: SignUp},
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);