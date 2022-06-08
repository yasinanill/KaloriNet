import React from "react";

import { Text, SafeAreaView, Image, StyleSheet, FlatList,ScrollView } from "react-native";
import { View, TextInput, TouchableOpacity, } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { LinearGradient } from 'expo-linear-gradient';
import { Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { COLOURS } from "../../database/Database";


export default class Activities extends React.Component{
    render(){

        return(

        <SafeAreaView>
<ScrollView>
                <View style={style.container}>
                <Text style={{ padding:2,fontSize:18,color:COLOURS.Purple ,marginVertical:2, fontWeight:'400'} }> Favoriler
                        </Text>
                           
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Kosu')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/run.webp')}
                        />
                        <Text style={style.text}> Koşma ,Normal Tempo
                        </Text>   
                        </TouchableOpacity>
                        
                        <TouchableOpacity   onPress={()=> this.props.navigation.navigate('bicycle')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/byc.png')}
                        />
                        <Text style={style.text}> Bisiklet Sürmek
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity   onPress={()=> this.props.navigation.navigate('walking')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/yuruyus.png')}
                        />
                        <Text style={style.text}>Yürüyüş
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Kosu')}  style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/swimming.png')}
                        />
                        <Text style={style.text}> Yüzme
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Kosu')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/indir.png')}
                        />
                        <Text style={style.text}> Ağırlık Antremanı
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Kosu')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/futbol.png')}
                        />
                        <Text style={style.text}> Futbol
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Walking')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/basketbol.png')}
                        />
                        <Text style={style.text}> Basketbol
                        </Text>   
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Kosu')} style={style.card}>
                        <Image
                            style={style.Image}
                            source={require('./images/indir.png')}
                        />
                        <Text style={style.text}> Ağırlık Antremanı Gelışmiş
                        </Text>   
                        </TouchableOpacity>
                        
                        
                        
                        
                        </View>




           



</ScrollView>
        </SafeAreaView>

        )


}
};

const style = StyleSheet.create({
 card:{flexDirection:'row' ,alignItems:'center' ,marginVertical:2},
Image:{height:60, width:60 },
container: {
    marginTop:5,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,

    padding: 15,
  },
text:{ marginHorizontal:20, padding:26,fontSize:16,  fontWeight:'500'}

})



