import React from 'react';
import react, { useState,useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Picker, Image ,FlatList} from "react-native";

import { List, Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';


import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { authentication } from "../../firebase-config";
import { db } from "../../firebase-config";

import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

import { Auth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { async } from '@firebase/util';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Userdata = () => {

    
    const [displayName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userss, setUsers] = useState([]);
  
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    const navigation = useNavigation();
   const todoRef = firebase.firestore().collection('users');



   useEffect( () => {

    todoRef
        .onSnapshot(
            querySnapshot => {
                const userss = []
                // loop through the saved todos
                querySnapshot.forEach((doc) => {
                    const {age , gender, name ,lastName, email ,calorie,height,weight}= doc.data()
                  
                    userss.push({id : doc.id, age,gender,name ,lastName, email ,calorie,height,weight} )
                })
                setUsers(userss)
            },
            error => {
                // log any error
                console.error(error);
            }
        )
}, []);


    return (
        <SafeAreaView>
 
                            <FlatList style={{ maxWidth:20000 }}
                                showsHorizontalScrollIndicator={false}
                                data={userss} horizontal={false} renderItem={({item}) =>(
<Pressable>
           <View>

                <View style={style.header}>


                    <View>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d" }} style={style.Avatar} />
                    </View>
                    <View style={style.UserName} >
                        <Text style={{ fontSize: 16, fontWeight: '400', fontFamily: '' }}>{item.name} {item.lastName}</Text>
            <Text></Text>
                    </View>
                </View>
                <View ><View>


                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="checkbox-outline" />
                            <Text> Yaş</Text></View>< Text style={{   alignItems: "center",
        justifyContent: "center",}}>{item.age}</Text>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="checkbox-outline" />
                            <Text>Kilo</Text></View>< Text style={{   alignItems: "center",
        justifyContent: "center",}}>{item.weight}kg</Text>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="checkbox-outline" />
                            <Text>Boy</Text></View>< Text style={{   alignItems: "center",
        justifyContent: "center",}}>{item.height} cm</Text>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="checkbox-outline" />
                            <Text>Cinsiyet</Text></View>< Text style={{   alignItems: "center",
        justifyContent: "center",}}>{item.gender}</Text>
                  
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="checkbox-outline" />
                         <Text>Kalori Hedefi</Text></View>< Text style={{   alignItems: "center",
        justifyContent: "center",}}>{item.calorie} /kcal</Text>
                       
                    </View>

                </View>

                              
                    <Button style={{ backgroundColor: "#89168D",}}
                      mode="contained"
                      onPress={() => createAccount()}
                      loading={isLoading}
                    >
                  Guncelle
                    </Button>          
                        </View>

                                       
            </View>         
</Pressable>


                                ) } />
               



        </SafeAreaView>


    );


}
export default Userdata;
const style = StyleSheet.create({



    header: {


        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89168D",

        height: 140,
        marginBottom: 30,

    },
    Avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginTop: 50,




    },
    UserName: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EC93EF",
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 20,


    },
    ItemList: {


        flexDirection: "row",
        alignItems: "center",
     
        marginLeft: 1,
        padding: 10,

 

    }, detailsbutton: {



        alignItems: "center",
        justifyContent: "center",


    },
    ItemListText: {

        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    
    },






});