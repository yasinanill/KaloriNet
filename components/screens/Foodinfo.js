import React, {useState, useEffect} from 'react';
import {
  View,StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from 'react-native-paper';
import { VictoryPie } from "victory-native";
import { List, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";




const FoodInfo= ({route, navigation}) => {
    const {productID} = route.params;
  
   
   // const [Recipes, setRecipes] = useState([]);

    const [Foods, setFoods] = useState({});
  
    const width = Dimensions.get('window').width;
  
    const scrollX = new Animated.Value(0);
  
    let position = Animated.divide(scrollX, width);
  
    const [showMore,setShowMore]= React.useState(false);
   const [showChart,setShowChart]= React.useState(false);


    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getDataFromDB();
      });
  
      return unsubscribe;
    }, [navigation]);
  
    //get product data by productID
  
    const getDataFromDB = async () => {
      for (let index = 0; index < Items.length; index++) {
        if (Items[index].id == productID) {
          await setFoods(Items[index]);
          return
         

          ;
        }
      }
    };

    const addToCart = async id => {
        let itemArray = await AsyncStorage.getItem('cartItems');
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
          let array = itemArray;
          array.push(id);
    
          try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(array));
            ToastAndroid.show(
              'Eklendi',
              ToastAndroid.SHORT,
            );
            navigation.navigate('Home');
          } catch (error) {
            return error;
          }
        } else {
          let array = [];
          array.push(id);
          try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(array));
            ToastAndroid.show(
              'Eklendi',
              ToastAndroid.SHORT,
            );
            navigation.navigate('Home');
          } catch (error) {
            return error;
          }
        }
      };

    const renderProduct = ({item, index}) => {
        return (
          <View
            style={{
              width: width,
              height: 240,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
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
          <StatusBar
            backgroundColor={COLOURS.backgroundLight}
            barStyle="dark-content"
          />
          <ScrollView>
            


 <View>

                <Card>
                    <Card.Title title=  {Foods.productName}subtitle="" />

                    <Card.Cover source= {Foods.productImage} />

                </Card>


                <View style={style.recipesdescription} >

                    <View style={style.recipeskalori}>
                        <Ionicons style={{ padding: 5, fontSize: 30 }} name="flame-outline" />
                        <Text style={{ fontSize: 16, fontWeight: "700" }}> {Foods.productCalorie} Kalori </Text>
                    </View  >
                    <View style={style.vr}></View>
                    <View style={style.recipestime}>
                        <Ionicons style={{ padding: 5, fontSize: 30 }} name="calculator-outline" />
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>  {Foods.Amount}  </Text>
                    </View>


                </View>

                <DataTable>

                   
                    <DataTable.Header style={{textAlign:'center' ,alignItems:'center',justifyContent:'center'} } >
                    <DataTable.Title  ><Text style={style.Baslik}>Besin Degerleri</Text>
                        </DataTable.Title>
                   
                        <Text onPress={() => setShowChart (!showChart)}  style={{color:'#D4A3F3' ,fontSize:16, fontWeight:"700"} }>Grafik</Text>

                    </DataTable.Header>



                    {showChart &&     <View  style={{backgroundColor:''} }>

                    <VictoryPie
          data={[
            yd= 
            { x: "Karbonhidrat (gr)",  y: Foods.productCarbo},
            { x: "Protein", y: Foods.productProtein },
            { x: "Yağ (gr)", y: Foods.productFAt }
          ]}
          colorScale={["blue", "green", "red", ]}
        
          radius={({ datum }) => 120 + datum.y -30}
          innerRadius={40}
           labelRadius={({ innerRadius }) => innerRadius + 10 }
           
           style={{ labels: { fill: "white", fontSize: 14, fontWeight: "bold"  } }}

        />
  
</View> }

                    <DataTable.Row>
                        <DataTable.Cell> {}Karbonhidrat (g)</DataTable.Cell>
                        <DataTable.Cell numeric>{Foods.productCarbo}</DataTable.Cell>

                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>Protein (g)</DataTable.Cell>
                        <DataTable.Cell numeric>{Foods.productProtein}</DataTable.Cell>

                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Yağ (g)</DataTable.Cell>
                        <DataTable.Cell numeric>{Foods.productFAt}</DataTable.Cell>

                    </DataTable.Row>
                    
                    
                   
{showMore &&
                        <DataTable>
                            <DataTable.Row>
                                <DataTable.Cell>Lif (g)</DataTable.Cell>
                                <DataTable.Cell numeric>{Foods.lif}</DataTable.Cell>

                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Sodyum (mg)</DataTable.Cell>
                                <DataTable.Cell numeric>{Foods.sodyum}</DataTable.Cell>

                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Potasyum (mg)</DataTable.Cell>
                                <DataTable.Cell numeric>{Foods.potasyum}</DataTable.Cell>

                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Kalsiyum (mg)</DataTable.Cell>
                                <DataTable.Cell numeric>{Foods.kalsium}</DataTable.Cell>

                            </DataTable.Row>


                        </DataTable>

}


                </DataTable>


                <Button mode="contained" color='#ECD9F7' onPress={() => setShowMore (!showMore)}>
                    Daha Fazlasini Gor
                </Button>
                <View>


                </View>
            </View>

















            <View
              style={{
                paddingHorizontal: 16,
                marginTop: 6,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 14,
                }}>


              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 4,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '600',
                    letterSpacing: 0.5,
                    marginVertical: 4,
                    color: COLOURS.black,
                    maxWidth: '84%',
                  }}>
                  {Foods.productName}
                </Text>
                <Ionicons
                  name="link-outline"
                  style={{
                    fontSize: 24,
                    color: COLOURS.blue,
                    backgroundColor: COLOURS.blue + 10,
                    padding: 8,
                    borderRadius: 100,
                  }}
                />
              </View>
            
               <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  fontWeight: '400',
                  letterSpacing: 1,
                  opacity: 0.5,
                  lineHeight: 20,
                  maxWidth: '85%',
                  maxHeight: 55,
                  marginBottom: 18,
                }}>
                {Foods.description}
         
                   

              </Text> 
              
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  fontWeight: '400',
                  letterSpacing: 1,
                  opacity: 0.5,
                  lineHeight: 20,
                  maxWidth: '85%',
                  maxHeight: '100%',
                  marginBottom: 18,
                }}>
                {Foods.description}
           
                   
              </Text>
            




            </View>
          </ScrollView>
    
          <View
            style={{
              position: 'absolute',
              bottom: 13,
              right:1,
              height: '8%',
              width: '60%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => (Foods.isAvailable ? addToCart(Foods.id) : null)}
              style={{
                width: '80%',
                height: '80%',
                backgroundColor: '#D4A3F3',
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
                {Foods.isAvailable ? 'ekle' : 'Not Avialable'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
 
const style = StyleSheet.create({
  Baslik: {
      alignItems: "center",
      fontSize: 15,
     

  },
  repicesname: {
      alignItems: 'center',
      justifyContent: "center",


  },
  recipesdescription: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 40,
      marginVertical: 10,


  },
  recipeskalori: {

      alignItems: "center",

  },
  recipestime: {

      alignItems: "center",

  },   
   AnaBaslik: {

      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
   

  },

  
categoryItemIconContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: "center",
},

categoryItemTitle: {

    textAlign: 'center',
    marginTop: 5,
    fontSize:12,

},

productItem: {

    backgroundColor: "#FFE4E1",
    padding: 8,
    marginRight: 5,
    borderRadius: 20,
    width: 300,
    height: 340,

},


productItemIconContainer: {

    backgroundColor: "#FFE4E1",
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: "center",
},

productItemTitle: {

    fontSize: 16,

    fontWeight: '500',

},
productItemKalori: {

    fontSize: 14,

    fontWeight: '500',

},
ProductItemimage: {
    backgroundColor: "#FFE4E1",
    width: 200,
    height: 180,
    borderRadius: 5,
},
foodArea: {
    marginTop: 10,

},

background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
},

repicesname: {
    alignItems: 'center',
    justifyContent: "center",


},
recipesdescription:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:40,
    marginVertical:10,


},
recipeskalori:{

        alignItems:"center",

},
recipestime:{

    alignItems:"center",

},


})


export default FoodInfo