import { View, Text } from 'react-native';

import React, {useState, useEffect} from 'react';
import {SafeAreaView,
  StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,TextInput
  } from 'react-native';
import { COLOURS,Items } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import SearchBar from "react-native-dynamic-search-bar";





const Foodlist = ({navigation}) => {



        const [Foods, setFoods] = useState([]);
        const [Recipes, setRecipes] = useState([]);
      
     
        useEffect(() => {
          const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
          });

         
          return unsubscribe;
        }, [navigation]);
      


        const getDataFromDB = () => {
            let foodList = [];
            let recipesList = [];
            for (let index = 0; index < Items.length; index++) {
              if (Items[index].category == 'Foods') {
                foodList.push(Items[index]);
              } else if (Items[index].category == 'Recipes') {
                recipesList.push(Items[index]);
              }
            }
        
            setFoods(foodList);
            setRecipes(recipesList);
          };

                
          const FoodListCard = ({data}) => {
            return (
   
                      <SafeAreaView  style={{flex:1}}>
        
        
         <View style={styles.container}>
                 
                 
                    <View style={styles.listItem}>
                               <Image source={data.productImage}  style={{width:70, height:70,borderRadius:1,marginLeft:5} } />
                            <View style={{alignItems:"center",flex:1}}>
                                   <Text style={{fontWeight:"bold",padding:5,fontSize:16}}>   {data.productName}</Text>
                                   <Text>   {data.productCalorie} Kalori </Text>
                                    <Text>   {data.Amount}</Text>
                           </View>
      
      
     
        
        <TouchableOpacity
                onPress={() => navigation.navigate('FoodInfo', {productID: data.id})}
                style={{height:60,width:60, justifyContent:"center",alignItems:"center"
                 
              
                }}><Text  style={{color:"#8a2be2",alignItems:"center"}}>Detaylar</Text></TouchableOpacity>
      
                  </View>     

          </View>


            </SafeAreaView>
  





              
               
               
           
            );
          };





  return (
    <View  style= 
    {{
   width:"100%",
height:"100%",
backgroundColor: COLOURS.white,
    }}>



     
     <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
     <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
      
            flexDirection: 'column',
            justifyContent: 'space-between',
          
          }}>
          <TouchableOpacity>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCalorie')}>

          
          </TouchableOpacity>
        </View>
        
             <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '800',
              letterSpacing: 1,
              lineHeight: 24,
              marginTop:20,
              marginLeft:25,
            }}>
         
           Kalori Cetveli
          </Text>
        
        
        <View
        >
<View style={styles.Searcharea}>

<View style={styles.SearchInput}><TextInput placeholder="Arama" style={styles.Searchbar} /></View>
<View style={styles.SearchButtoncontainer}>
    <TouchableOpacity style={styles.Searchbutton}><Text>ara</Text></TouchableOpacity>

</View>

</View>

     
          <View>

      </View>


        </View>
        <View
          style={{
            padding: 10,
          }}>
         
         <SafeAreaView  style={{flex:1}}>
         <View style={styles.container}>
   {Foods.map(data => {
              return <FoodListCard data={data} key={data.id} />;
            })}
          </View>


            </SafeAreaView>


        </View>



      </ScrollView>


      </View>

   




   
  )
}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:10,

    },
    listItem:{
    
      padding:5,
      backgroundColor:"#FFF",
      width:"100%",
      height:80,
      flex:1,
      alignSelf:"center",
      flexDirection:"row",
      borderRadius:10
    },


      Searcharea: {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
  
      },
      SearchInput: {
          flex: 1,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 20,
          backgroundColor: "white",
          borderRadius: 8,
  
  
      },
      Searchbar: {
          padding: 10,
  
          borderWidth: 1,
          borderColor: "#8a2be2",
          borderRadius: 8,
  
  
      },
      SearchButtoncontainer: {
          padding: 14,
  
          borderWidth: 1,
          borderColor: "#8a2be2",
          borderRadius: 5,
          marginLeft: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 20,
          backgroundColor: "white",
          borderRadius: 8,
  
      },
  });
 

        export default Foodlist