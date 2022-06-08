import { View, Text } from 'react-native';

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
  } from 'react-native';
import { COLOURS,Items } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
 const Home = ({navigation}) => {



        const [Foods, setFoods] = useState([]);
        const [Recipes, setRecipes] = useState([]);
      
        //get called on screen loads
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
              <TouchableOpacity
                onPress={() => navigation.navigate('FoodInfo', {productID: data.id})}
                style={{
                  width: '48%',
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    borderRadius: 10,
                    backgroundColor: COLOURS.backgroundLight,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 8,
                  }}>
                  {data.isOff ? (
                    <></>
                  ) : null}
                  <Image
                    source={data.productImage}
                    style={{
                      width: '80%',
                      height: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLOURS.black,
                    fontWeight: '600',
                    marginBottom: 2,
                  }}>
                  {data.productName}

                </Text>
                <View  style={{
                           flexDirection: 'row',
                           alignItems: 'center',
                           
                    justifyContent:'space-between'
                }}>
                <Text
                        style={{
                          fontSize: 12,
                          color: COLOURS.Purple,
                        }}>
                      {data.Amount}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: COLOURS.black,
                        }}>
                      {data.productCalorie} Kalori
                      </Text></View>
                      
                {data.category == 'Recipes' ? (
                  data.isAvailable ? (
                   
                   
                   
                   
                    <View>
                  
 
    
      
 

                    </View>










                  ) : (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                   
                      <Text
                        style={{
                          fontSize: 12,
                          color: COLOURS.red,
                        }}>
                        Unavailable
                      </Text>
                    </View>
                  )
                ) : null}
              
               
               
              </TouchableOpacity>
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
            
          }}>

<Text
            style={{
              padding: 2,
              fontSize: 16,
              color: COLOURS.Purple,
              fontWeight: '400',
              letterSpacing: 2,
              lineHeight: 40,
            }}>
           Kalori Cetveli
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('MyCalorie')}>

          <MaterialCommunityIcons
              name="chart-bar"
              style={{
                fontSize: 20,
                color: COLOURS.Purple,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.Purple,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 5,
            padding: 2,
          }}>


        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Besinler
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text     onPress={() => navigation.navigate('Foodlist')}
               
           
              style={{
                fontSize: 14,
                color: COLOURS.Purple,
                fontWeight: '400',
              }}>
              Hepsini Gor
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {Foods.map(data => {
              return <FoodListCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
               Tarifler
              </Text>
   
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.Purple,
                fontWeight: '400',
              }}>
              Hepsini Gor
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
              
            {Recipes.map(data => {
              return <FoodListCard data={data} key={data.id} />;
            })}
          </View>
        </View>

      </ScrollView>


      </View>

   




   
  )
}
 




export default Home