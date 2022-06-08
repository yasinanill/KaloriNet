import React from "react";

import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import react, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home';
import FoodInfo from '../Foodinfo';
import MyCalorieeCart from '../MyCalorieCart';
import HomePage from '../Homepage';
import SingUp from "../SingUp";

const Drawer = createDrawerNavigator();

const AuthDraver = () => {
    return (
 
  
        <Drawer.Navigator>
        
          

          <Drawer.Screen name="Home" component={Home} options={{ headerShown:false, DrawerBarIcon: (props) => <Ionicons name="layers" {...props}/> }} />
          <Drawer.Screen name="HomePage" component={HomePage}  options={{ headerShown:false, DrawerBarIcon: (props) => <Ionicons name="layers" {...props}/> }}/>
          <Drawer.Screen name="SingUp" component={SingUp}  options={{ headerShown:false, DrawerBarIcon: (props) => <Ionicons name="layers" {...props}/> }}/>
          


         
        </Drawer.Navigator>
  
  

  
    );
  };
  export default AuthDraver;