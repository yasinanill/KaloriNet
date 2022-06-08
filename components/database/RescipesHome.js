
import React from "react";

import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


export default class Recipeshome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            category: [
                { id: 1, title: 'Kahvaltı', icon: require('./images/1.jpg') ,area:"RecipesCt1" },
                { id: 3, title: 'Öğle Yemeği', icon: require('./images/2.png') },
                { id: 4, title: 'Akşam Yemeği', icon: require('./images/3.jpg') },
                { id: 5, title: 'Ara Öğün', icon: require('./images/4.jpg') },

            ],
            products: [
                { id: 1, repicesname: 'Sebzeli Tavuk Yemeği', Image: require('./images/recipes/tavuk.jpg'), kalori: '383' },
                { id: 2, repicesname: 'Fırında Kabak Mücver', Image: require('./images/recipes/kabak.jpg'), kalori: '1333' },
                { id: 3, repicesname: 'Ton Balıklı Salata', Image: require('./images/recipes/ton.jpg'), kalori: '150' },
                { id: 4, repicesname: 'Diyet Tost', Image: require('./images/recipes/tost.jpg'), kalori: '150' },

            ],
        }

    }


    renderCategoryItem = ({ item }) => {
        return <View style={style.categoryItem}>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate(item.area)}>
            <View style={style.categoryItemIconContainer}>
                <Image source={item.icon} style={style.categoryItemIcon} />
            </View>
            <Text style={style.categoryItemTitle}>{item.title}</Text>
            </TouchableOpacity>


        </View>
    }

    renderProductItem = ({ item }) => {
        return <View style={style.productItem}>

            <View style={style.repicesname}><Text style={{ fontSize:16, padding:10  }}>{item.repicesname}</Text></View>
            <View style={style.productItemIconContainer}>
                <Image source={item.Image} style={style.ProductItemimage} />
            </View>
            <View style={{ padding: 8 }}>

                <View style={style.recipesdescription} >

                    <View  style={style.recipeskalori}>
                        <Ionicons style={{padding:5,fontSize:20}} name="flame-outline" />
                        <Text style={{fontSize:12}}>{item.kalori} Kalori </Text>
                    </View  >
                    <View style={style.vr}></View>
                    <View style={style.recipestime}>
                    <Ionicons style={{padding:5 ,fontSize:20}} name="alarm-outline" />
                        <Text style={{fontSize:12}}>{item.kalori} Dakika </Text>
                    </View>
  

                </View>   
                
                   
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('RecipesDetails')} 
                    style={{alignItems:"center"  , 
                    
                }}>   
                    
                    
                    
                      <Text style={{fontSize:16 , fontWeight:'600'}}>Tarifi 
Gör</Text>
                         
                         
                         
                           </TouchableOpacity>
                   
                    


            </View>
        </View>
    }
    render() {
        const { promation, category, products } = this.state;

        return (


            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView style={{ flex: 1 }}>


                    <View style={style.content} >



                        <View style={style.promation}>
                            <FlatList style={{ paddingHorizontal: 10 }}
                                showsHorizontalScrollIndicator={false}
                                data={promation} horizontal={true} renderItem={this.renderItem} />

                        </View>


                    </View>
                    <View style={style.categoryArea}>

                        <View style={style.categoryAreaTopBar}>
                            <View><Text style={style.categoryone}>Öğünler</Text></View>



                        </View>
                        <View style={{ marginTop: 15 }}>
                            <FlatList style={{ paddingHorizontal: 10 }}
                                showsHorizontalScrollIndicator={false}
                                data={category} horizontal={true} renderItem={this.renderCategoryItem} />

                        </View>
                    </View > 
                    <View style={style.categoryAreaTopBar}>
                            <View><Text style={style.categoryone}>Favori Tarifler</Text></View>

                        </View>
                    <View style={{ marginTop: 5 }}>
                        <FlatList style={{ paddingHorizontal: 10, paddingVertical: 20 }}
                            showsHorizontalScrollIndicator={false}
                            data={products} horizontal={true} renderItem={this.renderProductItem} />



                    </View>








                    <View style={style.BestRecipes}>

                 
                       
                        <View >

                            <View>

                            </View >
                            <View>

                            </View>
                            <View>

                            </View>
                        </View>

                    </View>



                </ScrollView>
            </SafeAreaView>




        );
    };
}
const style = StyleSheet.create({

    header: {

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 35,
        paddingBottom: 5,

    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,


    },
    AppName: {

        fontSize: 15,
        color: "#8a2be2",
    },
    banner: {
        backgroundColor: "#8a2be2",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",

    },
    bannertext: {
        color: "white",
        textAlign: "center",
        fontSize: 15,

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
    promationItem: {
        backgroundColor: 'blue',
        padding: 10,
        flex: 1,
        width: 400,
        marginRight: 8,
        height: 600,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20.

    },
    promation: {
        marginTop: 20,
        marginLeft: 10,

    },
    content: {


    },
    PromationTitle: {

        fontSize: 25,
        color: "white",
        fontWeight: '500',
    },
    Promationdescription: {

        fontSize: 15,
        color: "white",
        fontWeight: '500',
        marginTop: 10,
    },

    categoryAreaTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    categoryArea: {
        marginTop: 10,

    },
    categoryone: {
        fontSize: 18,


    },

    categorytwo: {
        color: "#8a2be2",
        fontWeight: '400',

    },

    categoryItem: {

        padding: 8,
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 15,
        alignItems: 'center',

    },

    categoryItemIcon: {
        width: 50,
        height: 50,
        borderRadius: 10,

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



}
)
