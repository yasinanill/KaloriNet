import React from "react";

import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, TextInput, Title, Subheading, Button } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { LinearGradient } from 'expo-linear-gradient';
import { Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';


export default class Bicycle extends React.Component {
     
    
    constructor(props) {
 
        super(props);
        this.state = {
            kalori: 0, kilo: 0,dakika: 0,
            content: false,
            contents: true,
            checkbox: false
        };
    }
    componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
        this.setState(previousState => ({ contents: !previousState.contents }))
      }
    
    hesapla =()=>{

        var kalori = this.state.kalori;

        var kilo = this.state.kilo;
        
        var sonuc =  (kalori * 200) / (kilo * 6 * 3.5);
        sonuc = sonuc.toFixed(1)
        alert (sonuc)

    }
    hesaplaCalorie =()=>{

        var dakika = this.state.dakika;

        var kilo = this.state.kilo;
        
        var sonuc2 = (kilo * dakika * 6 * 3.5) / (200)  ;
        sonuc2 = sonuc2.toFixed(1)
        alert (sonuc2)

    }

       
    render() {
      
        return (
 
            <SafeAreaView>
                <View>
                    <View style={style.content}>
                        <View>
                            <Image
                                style={style.Image}
                                source={require('./images/byc.png')}
                            />
                     

                        </View>
                    </View>
                    
               {   this.state.contents ?     


                    <View style={{ margin: 8, }}>
                      <Button  onPress={this.componentHideAndShow} >
                   Kalori Hesapla  </Button>

                        <TextInput label="Dakika" style={{ margin: 10, }} onChangeText={dakika => this.setState({dakika})} 
                           
                        />
                        <TextInput label="Kilo" style={{ margin: 10, }}  onChangeText={kilo => this.setState({kilo})}/>



                        <Button compact mode="contained" onPress={this.hesaplaCalorie}
                            style={{ margin: 10, }}
                        > HESAPLA
                        </Button>
                   

                    </View> :null }
               
                  
              {   this.state.content ?      
                    <View style={{ margin: 8, }}>

<Button  onPress={this.componentHideAndShow} >
                    Dakika Hesapla   </Button>
                        <TextInput label="Kalori" style={{ margin: 10, }} onChangeText={kalori => this.setState({kalori})} 
                           
                        />
                        <TextInput label="Kilo" style={{ margin: 10, }}  onChangeText={kilo => this.setState({kilo})}/>



                        <Button compact mode="contained" onPress={this.hesapla}
                            style={{ margin: 10, }}
                        > HESAPLA
                        </Button>
                    
               

                    </View> :null }
    

                </View>


            </SafeAreaView>







        )



    }



}

const style = StyleSheet.create({

    Image: { width: 100, height: 100, padding: 20, borderRadius: 20, },

    content: {
        margin: 16,
        borderRadius: 20, width: 360, height: 200, color: 'white', alignItems: "center", fontSize: 16, justifyContent: 'center', marginTop: 60, backgroundColor: "#ccc",
    },
    input: { padding: 10, backgroundColor: "white", flex: 1, },
    button: { padding: 10, backgroundColor: 'blue', borderRadius: 5, },
    text: { textAlign: "center", fontSize: 24, color: 'black', fontWeight: '700', },

});


