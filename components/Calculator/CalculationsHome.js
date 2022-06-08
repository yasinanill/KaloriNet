
import React from "react";

import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { LinearGradient } from 'expo-linear-gradient';
import { Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';



export default class Calculation extends React.Component{
    render(){

        return(

        <SafeAreaView>
            <ScrollView>
                <View style={style.container}>  
                <Text style={{ padding:18, marginVertical:3,  fontSize:18,fontWeight:'800', } }> Online Vücut Analizi Araçları
                        </Text>
                        <Image
                        
                        />
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Bmicalculator')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/Bmi.jpg')}
                        />
                        <Text style={style.text}> Vucut kitle Endeksi Hesaplama
                        </Text>   
                        </TouchableOpacity >
                        
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Dailycalories')}  style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/gki.jpg')}
                        />
                        <Text style={style.text}> Gunluk Kalori Ihtiyaci
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Idealweight')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/ideal.jpg')}
                        />
                        <Text style={style.text}>Ideal Kilo Hesaplama
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/yagg.jpeg')}
                        />
                        <Text style={style.text}> Yag Orani Hesaplama
                        </Text>   
                        </TouchableOpacity>

                        
                        
                        
                        </View>




           


            </ScrollView>

        </SafeAreaView>

        )


}
};

const style = StyleSheet.create({
 card:{flexDirection:'column' ,alignItems:'center' ,marginVertical:2 ,   height:180,
    width:320, backgroundColor:"#EDD4F6" ,borderRadius:20 ,paddingVertical:20},
Image:{height:100, width:120 },
container: {

        
   alignItems:"center",
    marginTop:24,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,

    padding: 16,
  },
text:{ marginHorizontal:10, padding:16,fontSize:16,  fontWeight:'800' ,textAlign:"center"}

})





