import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import FoodInfo from './components/screens/Foodinfo';
import MyCalorieeCart from './components/screens/MyCalorieCart';

import AuthStack from './components/screens/Navigator/StackNavigator';
import AuthDraver from './components/screens/Navigator/DrawerNavigator';

const App = () => {
  
  return (
   
    <NavigationContainer>

<AuthStack/>


</NavigationContainer>

  );
};

export default App;
