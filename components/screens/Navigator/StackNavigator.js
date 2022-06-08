import React from "react";
import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodInfo from "../Foodinfo";

import Home from "../Home";
import MyCalorieeCart from "../MyCalorieCart";
import TabsNavigator from "./TabsNavigator";
import Activities from "../../activities/ActivitieHome.js/ActivitiesHome";
import HomePage from "../Homepage";
import AuthDraver from "./DrawerNavigator";
import Bmicalculator from "../../Calculator/Bmi";
import Calculation from "../../Calculator/CalculationsHome";
import Foodlist from "../FoodList";
import RecipesDetails from "../../database/images/recipes/RecipesDetails";
import SingUp from "../SingUp";
import Recipeshome from "../../database/RescipesHome";
import UserProfile from "../UserProfil";
import Fooddetails from "../../database/images/foods/FoodDetails";
import Dailycalories from "../../Calculator/DailyCalorie";
import Idealweight from "../../Calculator/IdealWeight";
import Kosu from "../../activities/ActivitieHome.js/run";
import Bicycle from "../../activities/ActivitieHome.js/bicycle";
import Walking from "../../activities/ActivitieHome.js/walking";
import SingIn from "../SingIn";
import Userdata from "../Userdata";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
 
  
        <Stack.Navigator>
            <Stack.Screen name="TabsNavigator" component={TabsNavigator} options={{  headerShown: false }} />
            <Stack.Screen name="AuthDraver" component={AuthDraver} options={{  headerShown: false }} />
            <Stack.Screen name="HomePage"  component={HomePage}  options={{  headerShown: false }} />
            <Stack.Screen name="Activities"  component={Activities}  options={{  headerShown: false }} />
           <Stack.Screen name="Home" component={Home}  />
           <Stack.Screen name="MyCalorie" component={MyCalorieeCart} options={{ title:'Kalorim' }}/>
           <Stack.Screen name="FoodInfo" component={FoodInfo} options={{  title:'Besin Listesi' }}/>
             <Stack.Screen name="Bmicalculator" component={Bmicalculator} options={{  headerShown: false }} />
            <Stack.Screen name="Calculation" component={Calculation} options={{  headerShown: false }} />
            <Stack.Screen name="Foodlist" component={Foodlist} options={{  headerShown: false }} />
            <Stack.Screen name="SingUp" component={SingUp} options={{  headerShown: false }} />
            <Stack.Screen name="Recipeshome" component={Recipeshome} options={{  headerShown: false }}  />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{  headerShown: false }}  />
            <Stack.Screen name="RecipesDetails" component={RecipesDetails} options={{  headerShown: false }}  />
            <Stack.Screen name="Fooddetails" component={Fooddetails} options={{  headerShown: false }}  />
            <Stack.Screen name="Dailycalories" component={Dailycalories} options={{  headerShown: false }}  />
            <Stack.Screen name="Idealweight" component={Idealweight} options={{  headerShown: false }}  />
            <Stack.Screen name="Kosu" component={Kosu} options={{  headerShown: false }}  />
            <Stack.Screen name="walking" component={Walking} options={{  headerShown: false }}  />
            <Stack.Screen name="bicycle" component={Bicycle} options={{  headerShown: false }}  />
            <Stack.Screen name="SingIn" component={SingIn} options={{  headerShown: false }}  />
            <Stack.Screen name="Userdata" component={Userdata} options={{  headerShown: false }}  />
       



        </Stack.Navigator>
  
  

  
    );
  };
  export default AuthStack;