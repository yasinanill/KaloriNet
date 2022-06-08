import react , { useState } from "react";
import {Image, Text , TextInput, View, StyleSheet,TouchableOpacity, Picker ,ScrollView} from "react-native";
import { Searchbar } from 'react-native-paper';
import { List, Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import * as React from 'react';
import Constants from 'expo-constants';





const Bmicalculator= () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const [heigh, setheigh] = useState(0);
    const [weigh, setweigh] = useState(0);
    const [bmi, setbmi] = useState(" ");
    const [heightUnit, setheightUnit] = useState("cm");
    const [weightUnit, setweightUnit] = useState("Kg");
  
    const [showMore,setShowMore]= React.useState(false);
    const [showChart,setShowChart]= React.useState(false);
 
    function cal_bmi(lbs, ins)
  {
     let h2 = (ins) * (ins);
     let bmi = (lbs)/h2 * 703
     let f_bmi = Math.floor(bmi);
     let diff  = bmi - f_bmi;
     diff = diff * 10;
     diff = Math.round(diff);
     if (diff == 10)
     {
        f_bmi += 1;
        diff   = 0;
     }
     bmi = f_bmi + "." + diff;
     return bmi;
  }
  
  function chnages(wei, weiType, hei, heiType){
      var weCh = wei;
      var heCh = hei;
      if(isNaN(weCh) || weCh <=0){
      
    alert("Geçerlı Bir Değer Girin"); 
    return "Bos Olamaz"
      }
      else if(isNaN(heCh) || heCh <=0){
      
        alert("Geçerlı Bir Değer Girin"); 
        return "Bos Olamaz"
      }
      else{
      if(weiType == "Kg"){
          weCh = wei * 2.20462;
      }

      if(heiType == "cm"){
          heCh = hei/2.54;
      }
      return cal_bmi(weCh,heCh);}
  }
  



    return (

<ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>BMI Hesaplama</Text>
  
        <View style={[{maxHeight: 500, width: "100%"}]}>
        <Text style={styles.text}>Boy</Text>
  
        <View style={[styles.inpV,{flexDirection: "row"}]}>
          <TextInput
            style={[styles.inpo,{flex:1}]}
            placeholder={heightUnit} 
            keyboardType="numeric"
        
            onChangeText={(text) => {
              setheigh(parseFloat(text));
            }}>
          </TextInput>

        </View>
        <Text style={styles.text}>Kilo</Text>
        <View style={[styles.inpV,{flexDirection: "row"}]}>
          <TextInput
          keyboardType="numeric"
            style={[styles.inpo,{flex:1}]}
            placeholder={weightUnit}
            onChangeText={(text) => {
              setweigh(parseFloat(text));
            }}
          ></TextInput>
       
        
      
        </View>
  
        </View>
  <View style={[{width: "100%",flexDirection: "row",alignContent:"center", justifyContent:"center"}]}>
  <TouchableOpacity
          style={[styles.submi,styles.shadow]}
          onPress={() => {
            setbmi("BMI = " + chnages(weigh,weightUnit , heigh, heightUnit));
          }}
          title="Submit"
        ><Text style={styles.text}>Hesapla</Text></TouchableOpacity></View>
    
    
        <Text style={styles.text2}>{bmi}</Text>

        <Button  style={[{alignContent:"center", justifyContent:"center",padding:5,marginTop:10}]}mode="contained" color='#BDFFF3' onPress={() => setShowMore (!showMore)}>
        Bmi Nedir? Nasıl Hesaplanır?
                </Button>
 

  {showMore &&
          <View style={[{width: "90%",alignContent:"center", justifyContent:"center", marginLeft:10,padding:5}]}>
          
            <View><Text style={styles.text3}>BMI, sağlık durumunu vücudunun boy oranlamasına göre ne kadar ağırlığa sahip olması gerektiğini yansıtan bir tablodur.</Text></View>
  <Image
               style={[{width: "100%",alignContent:"center", justifyContent:"center", marginLeft:10,padding:5}]}         
                            source={require('./images/indir.png')}
                        />

                  
              <Text style={styles.text3}>0 ila 18,4 BMI: Zayıf. Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.
.</Text>
<View>
<Text style={styles.text3}>18.5 ila 24.9 BMI:   Normal. Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.</Text>
<Text style={styles.text3}>25 ila 29.9 BMI:    Fazla Kilolu. Kişinin boyuna oranla kilosunun fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.</Text>
<Text style={styles.text3}>30 ila 34.9 BMI:     Şişman. Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.</Text>
<Text style={styles.text3}>35 ila 44.9 BMI:     Şişman. İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.</Text>
  <Text style={styles.text3}>45+ BMI:    Aşırı Şişman. Üçüncü derece obez kategorisinde olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve diyetisyen eşliğinde kilo verilmesi önerilir.</Text>          
            
         </View>
         
            </View>
            
            }  
            
            
             </View>
    </ScrollView>

    );
};



  
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
    text3: {
      textAlign: "center",
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 6,
      lineHeight: 25,
      padding:10
    },


})

export default Bmicalculator;