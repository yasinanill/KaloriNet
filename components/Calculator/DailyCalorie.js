import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,

  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import { Picker } from "react-native";

import { List, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { DataTable } from 'react-native-paper';

import Constants from 'expo-constants';

export default class Dailycalories extends Component {
    
    state = {
        height: 0,
        mass: 0,
        resultNumber: 0,
        resultText: ""
        };
        handleCalculate = () => {
        let imc = 66 + (13.7 * this.state.mass) + (5 * this.state.height) - (6.8 * this.state.age);
        this.setState({
        resultNumber: imc.toFixed(2)
        });
        if (imc == 1926) {
        this.setState({ resultText: "Little or no exercise" });
        } else if (imc > 1926 && imc == 2207) {
        this.setState({ resultText: "Exercise 1-3 times/week" });
        } else if (imc > 2207 && imc == 2351) {
        this.setState({ resultText: "Exercise 4-5 times/week" });
        } else if (imc > 2351 && imc == 2488) {
        this.setState({ resultText: "Daliy Exercise" });
        } else if (imc > 2488 && imc == 2769) {
        this.setState({ resultText: "Intense exercise 1-3 times/week" });
        } else {
        this.setState({ resultText: "Intense exercise Daliy" });
        }
        };

  render() {
    return (


        <View style={styles.container}>
        <Text style={styles.title}>BMR Hesaplama</Text>
  
        <View style={[{maxHeight: 500, width: "100%"}]}>
        <Text style={styles.text}>Boy</Text>
  
        <View style={[styles.inpV,{flexDirection: "row"}]}>
          <TextInput
            style={[styles.inpo,{flex:1}]}
            onChangeText={height => {
                this.setState({ height });
                }}
            keyboardType="numeric"
     >
          </TextInput>

        </View>

       
        
      
        </View>
        <Text style={styles.text}>Kilo</Text>
        <View style={[styles.inpV,{flexDirection: "row"}]}>
          <TextInput
          keyboardType="numeric"
            style={[styles.inpo,{flex:1}]}
        
            onChangeText={mass => {
                this.setState({ mass });
                }}
          ></TextInput>
       
        
      
        </View>
                <Text style={styles.text}>Yas</Text>
        <View style={[styles.inpV,{flexDirection: "row"}]}>
          <TextInput
          keyboardType="numeric"
            style={[styles.inpo,{flex:1}]}
            onChangeText={age => {
                this.setState({ age});
                }}
       
          ></TextInput>
        
  
        </View>
  <View style={[{width: "100%",flexDirection: "row",alignContent:"center", justifyContent:"center"}]}>
  <TouchableOpacity
          style={[styles.submi,styles.shadow]}
    onPress={this.handleCalculate}
          title="Submit"
        ><Text style={styles.text}>Hesapla</Text></TouchableOpacity></View>
        <Text style={styles.text2}>{this.state.resultNumber}</Text>
   




               </View>
    

        
  



    );
  }
}

const styles = StyleSheet.create({
 
container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  shadow:{shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 5.84,

elevation: 10,},
  submi: {
    borderRadius: 50,
    backgroundColor: "#BDFFF3",
    padding: 2,
    borderWidth: 2,
    width: 100,
  
    textAlign: "center",

    alignContent: "center",
    justifyContent: "center"
  },
  inpV:{
    borderBottomWidth: 2,
    borderColor:"#999",
    marginHorizontal: 15,
    marginBottom:25,
    paddingHorizontal: 8},
  inpo: {
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    top: 0,
    marginVertical: 20,
    textAlign: "center",
    },
  text: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 35,
  },
  text2: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
    lineHeight: 35,
  },
});
 