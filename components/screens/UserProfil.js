import React from 'react';
import react, { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Picker, Image } from "react-native";

import { List, Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';


import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {

      const navigation = useNavigation();



    return (
        <SafeAreaView>
            <View>

                <View style={style.header}>


                    <View>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d" }} style={style.Avatar} />
                    </View>
                    <View style={style.UserName} >
                        <Text style={{ fontSize: 16, fontWeight: '400', fontFamily: '' }}> Yasin Kaya</Text>

                    </View>
                </View>




                <View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="person" />
                            <Text> Bilgilerim</Text></View>
                        <Button onPress={() => navigation.navigate("Userdata")} style={style.detailsbutton}><Ionicons style={style.icon} name="chevron-forward-outline" /></Button>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="calculator" />
                            <Text> Vücut Ölçülerim</Text></View>
                        <Button style={style.detailsbutton}><Ionicons style={style.icon} name="chevron-forward-outline" /></Button>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="calendar" />
                            <Text> Takvimim</Text></View>
                        <Button style={style.detailsbutton}><Ionicons style={style.icon} name="chevron-forward-outline" /></Button>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="barbell" />
                            <Text> Aktiviteler</Text></View>
                        <Button style={style.detailsbutton}><Ionicons style={style.icon} name="chevron-forward-outline" /></Button>
                    </View>
                    <View style={style.ItemList}>
                        <View style={style.ItemListText}>
                            <Ionicons style={{ padding: 8, fontSize: 20 }} name="checkbox-outline" />
                            <Text>Hedeflerim</Text></View>
                        <Button style={style.detailsbutton}><Ionicons style={style.icon} name="chevron-forward-outline" /></Button>
                    </View>

                </View>

            </View>



        </SafeAreaView>


    );


}
export default UserProfile;
const style = StyleSheet.create({



    header: {


        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89168D",

        height: 120,
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

        marginLeft: 10,
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