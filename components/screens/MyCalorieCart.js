import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOURS, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DataTable } from 'react-native-paper';
import { VictoryPie } from "victory-native";
import { SafeAreaView } from 'react-native-safe-area-context';




const MyCalorieeCart = ({navigation}) => {
    
    
    const [Foods, setFoods] = useState([]);
   
  const [total, setTotal] = useState(null);
  const [totalCarbo, setTotalCarbo] = useState(null);
  const [totalProtein, setTotalProtein] = useState(null);
  const [totalFat, setTotalFat] = useState(null);
  const [totalCal, setTotalCal] = useState(null);
  const [totalSod, setTotalSod] = useState(null);
  const [totalLif, setTotalLif] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);


  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setFoods(productData);
      getTotal(productData);
      getTotalCarbo(productData);
      getTotalFat(productData);
      getTotalProtein(productData);
      getTotalCal(productData);
      getTotalSod(productData);
      getTotalLif(productData);
    } else {
        setFoods(false);
      getTotal(false);
      getTotalCarbo(false);
      getTotalFat(false);
      getTotalProtein(false);
      getTotalCal(false);
      getTotalSod(false);
      getTotalLif(false);
    }
  };

  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productCalorie = productData[index].productCalorie;
      total = total + productCalorie;
    }
    setTotal(total);
  };
  const getTotalCarbo = productData => {
    let totalCarbo = 0;
    for (let index = 0; index < productData.length; index++) {
      let productCarbo = productData[index].productCarbo;
      totalCarbo = totalCarbo + productCarbo;
    }
    setTotalCarbo(totalCarbo);
  };
  const getTotalProtein = productData => {
    let totalProtein = 0;
    for (let index = 0; index < productData.length; index++) {
      let productProtein = productData[index].productProtein;
      totalProtein = totalProtein + productProtein;
    }
    setTotalProtein(totalProtein);
  };

  const getTotalFat = productData => {
    let totalFat = 0;
    for (let index = 0; index < productData.length; index++) {
      let productFAt = productData[index].productFAt;
      totalFat = totalFat + productFAt;
    }
    setTotalFat(totalFat);
  };
  const getTotalCal = productData => {
    let totalCal = 0;
    for (let index = 0; index < productData.length; index++) {
      let kalsium = productData[index].kalsium;
      totalCal = totalCal + kalsium;
    }
    setTotalCal(totalCal);
  };
  const getTotalSod = productData => {
    let totalSod = 0;
    for (let index = 0; index < productData.length; index++) {
      let sodyum = productData[index].sodyum;
      totalSod = totalSod + sodyum;
    }
    setTotalSod(totalSod);
  };
  const getTotalLif = productData => {
    let totalLif = 0;
    for (let index = 0; index < productData.length; index++) {
      let lif = productData[index].lif;
      totalLif = totalLif + lif;
    }
    setTotalLif(totalLif);
  };




  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Temizlendi..', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.id}
        onPress={() => navigation.navigate('FoodInfo', {productID: data.id})}
        style={{
          width: '100%',
          height: 75,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '25%',
            height: 70,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 10,
            marginRight: 20,
          }}>
          <Image
            source={data.productImage}
            style={{
              width: '110%',
              height: '110%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
              {data.productName}
            </Text>
            <View
              style={{
                marginTop: 2,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                  maxWidth: '60%',
                  marginRight: 4,
                }}>
              {data.productCalorie} Kalori
              </Text>
              <Text>
               
               
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>

              <Text>{data.Amount}</Text>

            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
   
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <ScrollView>
        

        <View
          style={{
            shadowColor: "#E061E4",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 20,
            backgroundColor: "#DAF7D9",
            width: 400,
            height:440,
            flexDirection: 'row',
         
            paddingHorizontal: 10,
          
            alignItems: 'center',
            borderRadius:20,
          }}>


        <View style={{   
    
           justifyContent: 'space-between', 
            alignItems: 'center',}} >
        <VictoryPie
          data={[
            yd= 
            { x: "Karbonhidrat (gr)",  y: totalCarbo},
            { x: "Protein", y: totalProtein },
            { x: "Yağ (gr)", y: totalFat}
          ]}
          colorScale={["#4C61EC", "#F75B58", "#E4BC07", ]}
          startAngle={90}
          endAngle={-90}
          radius={(90)}
          innerRadius={150}
          height={220}
          width={350}
        
           cornerRadius={ 4}
           style={{ labels: { fill: "black", fontSize: 14, fontWeight: "bold"  } }}
           origin={{ y: 200 }}

           padAngle={ 1}
        />
        <View     style={{
      
          backgroundColor:"gray",
          borderRadius:20,
          height:70,
          width:220,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 20,
          backgroundColor: "white",
      margin:8,
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'center',
          }}>
        <Text     
           style={{
           marginTop:2,
            fontSize: 40, fontWeight: "bold" ,
          
          }}>{total}</Text>
                  <Text     
           style={{
          
            fontSize: 20, fontWeight: "bold" ,
          
          }}>  /kcal</Text>
      </View>
     
      
      
        <View style={{
           paddingHorizontal:20,
          
         margin:10,
         flexDirection: 'row',
         justifyContent:'space-between',
        alignItems: 'center',
      }}> 

      

          <View          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 20,
            backgroundColor: "#4C61EC",
            width: 90,
            height:80,
      
            margin:10,
            paddingHorizontal: 10,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius:10,       flexDirection:'column',
          }}
          > 
          <Text   style={{
          
          fontSize: 20, fontWeight: "bold" ,
        
        }} >{ totalCarbo}</Text>
          <Text style={{
          
          fontSize: 10, fontWeight: "bold" ,
        
        }} >Karbonhidrat</Text>
               </View>
          
          
          
          
          
          <View          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 20,
            backgroundColor: "#F75B58",
            width: 80,
            height:80,
            flexDirection: 'row',
            margin:10,
            paddingVertical: 10,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius:10,       flexDirection:'column',
          }}>


        <Text   style={{
          
          fontSize: 20, fontWeight: "bold" ,
        
        }}>{totalProtein}</Text>
         <Text style={{
          
          fontSize: 12, fontWeight: "bold" ,
        
        }} >Protein (gr)</Text>
          
          
          </View>
         
         
         
          <View          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 20,
            backgroundColor: "#E4BC07",
            width: 80,
            height:80,
            flexDirection: 'row',
            margin:10,
            justifyContent:'center',
          flexDirection:'column',
            alignItems: 'center',
            borderRadius:10,
          }}>

<Text   style={{
          
          fontSize: 20, fontWeight: "bold" 
        
        }}> {totalFat}</Text>
          <Text style={{
          
          fontSize: 12, fontWeight: "bold" ,
        
        }}> Yağ (gr)</Text>

          </View>

    </View>




</View>






        </View>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          Eklenilenler
        </Text>
        <View style={{paddingHorizontal: 12}}>
          {Foods ? Foods.map(renderProducts) : null}
        </View>


        <View>

          <View
            style={{
              paddingHorizontal: 12,
              marginVertical: 8,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
             Onerilenler
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View 
                  style={{
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                    borderRadius: 10,
                    marginRight: 18,
                  }}><TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <Text 
                    style={{
                      fontSize: 20,
                      fontWeight: '900',
                      color: COLOURS.blue,
                      letterSpacing: 1,
                    }}>
                    +
                  </Text></TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: COLOURS.black,
                      fontWeight: '500',
                    }}>
                   Eklemeye Devam Et
                  </Text>

                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: COLOURS.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
          Detaylar
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
            Toplam Kalori
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}> {total} /kcal
</Text>
             
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
              Toplam Karbonhidrat(g)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {total / 20}
              </Text>




            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
              Toplam Karbonhidrat(g)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {totalCarbo}(g)
              </Text>




            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
              Toplam Protein(g)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {totalProtein}
              </Text>



            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
              Toplam Yağ(g)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {totalFat}
              </Text>



            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
              Toplam Lif(mg)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {totalLif}
              </Text>



            </View>
            
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
             Sodyum (mg)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {totalSod}
              </Text>



            </View>
            

            
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>
              Kalsiyum (mg)
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '800',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>
              {totalCal}
              </Text>




            </View>

            

            

          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
           Temizle {total} /kcal 
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCalorieeCart;
