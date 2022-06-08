
import react, { useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';
import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import FoodInfo from '../Foodinfo';
import MyCalorieeCart from '../MyCalorieCart';
import HomePage from '../Homepage';
import SingUp from '../SingUp';
import SingIn from '../SingIn';
import Recipeshome from '../../database/RescipesHome';
const Tabs = createBottomTabNavigator()



const TabsNavigator = () =>{ 

 
 
 
  return(

  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {


        return (<Ionicons name={route.name === 'Home' ? "chatbubbles" : "chatbubbles"}
          size={size} color={color} />
        );
      },

    })}>
    <Tabs.Screen name="Ev" component={HomePage} options={{ headerShown:false, tabBarIcon: (props) => <Ionicons name="reorder-four-outline" {...props}/> }}  /> 
    <Tabs.Screen name="Besinler" component={Home} options={{ headerShown:false,tabBarIcon: (props) => <Ionicons name="fast-food-outline" {...props}/> }}  /> 
    <Tabs.Screen name="Kalorim" component={MyCalorieeCart}  options={{ headerShown:false,tabBarIcon: (props) => <Ionicons name="timer-outline" {...props}/>}}/>
    <Tabs.Screen name="Tarifler" component={Recipeshome}  options={{ headerShown:false,tabBarIcon: (props) => <Ionicons name="pizza-outline" {...props}/>}}/>
     <Tabs.Screen name="Profil" component={SingIn}  options={{  headerShown:false,tabBarIcon: (props) => <Ionicons name="person-outline" {...props}/>}}/>

  </Tabs.Navigator>
);
  };


export default TabsNavigator;