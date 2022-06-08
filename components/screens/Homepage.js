import React from "react";
import { Text, SafeAreaView, Image, StyleSheet, FlatList } from "react-native";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { COLOURS } from "../database/Database";
import MyCalorieeCart from "./MyCalorieCart";




export default class HomePage extends React.Component {

       

    constructor(props) {
        super(props);
        this.state = {
            promation: [
                { id: 1, title: 'Aralıklı Oruç (If Diyeti) ', description: 'Aralıklı oruç diyeti, günümüzde if diyeti veya intermittent fasting olarak da bilinmektedir. Aralıklı oruç diyetinin asıl amacı, diğer diyetlerin aksine alınan kalorileri kontrol etmek değil, yiyeceklerin tüketildiği zaman aralığını kontrol etmektir' },
                { id: 3, title: 'Bazal Metabolizma', description: 'Bazal metabolizma, vücudun yalnızca yaşamsal fonksiyonları (vücudu sıcak tutma, nefes alma vb.) idame ettirmek için enerji kullanan metabolik sisteme verilen addır' },
                { id: 4, title: 'Kalori Sayacı', description: ' Yediğiniz yemek için besin bilgilerini bulmakta ve öğün, egzersiz ve kilonuzu kolaylıkla takip etmeniz için gerekli bir uygulamadır.' },
             
            ],
            category: [
                { id: 1, title: 'Kalori Listesi', icon: require('../activities/images/kalorilistesi.png'),  items :'Home'},
                { id: 3, title: 'Öğünler', icon: require('../activities/images/recipes.png'), items :'RecipesHome' },
                { id: 4, title: 'Aktiviteler', icon:  require('../activities/images/activities.png'), items :'Activities' },
                { id: 5, title: 'Testler', icon: require('../activities/images/testler.png'), items :'Calculation' },
                { id: 6, title: 'Tarifler', icon: require('../activities/images/foodss.png')},
          
            ],
            products: [ 
                { id: 4, title: 'Karpuz', Image: require('../database/images/foods/karpuz.jpg'), kalori:'150' },
              
                { id: 2, title: 'Dondurma', Image: require('../database/images/foods/dond.jpg'), kalori:'1333' },
                { id: 3, title: 'Kandil Simidi ', Image:  require('../database/images/foods/kandil.jpg'), kalori:'150' },
               

            ],
                
        }

    } 
    renderItem = ({ item }) => {
        return <View >   

<LinearGradient
        colors={[ '#f1c00f', '#8e44ad']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={style.promationItem}
      >
       <Text style={style.PromationTitle}>{item.title}</Text>
            <Text style={style.Promationdescription}>{item.description}</Text>
      </LinearGradient> 
        </View>
    }
    renderCategoryItem = ({ item }) => {
        return <View style={style.categoryItem}>
  
     
            <View style={style.categoryItemIconContainer}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate(item.items)} >
                <Image source={item.icon} style={style.categoryItemIcon} /></TouchableOpacity>
            </View>
            <Text style={style.categoryItemTitle}>{item.title}</Text>

        </View>
    }
    renderProductItem = ({ item }) => {
        return <View style={style.productItem}>
<TouchableOpacity onPress={()=> this.props.navigation.navigate('Fooddetails',item)} >
       
            <View style={style.productItemIconContainer}>

                <Image source={item.Image} style={style.ProductItemimage} />
            </View>
            <View style={{padding:10}}>
            <Text style={style.productItemTitle}>{item.title}</Text>
       
            </View></TouchableOpacity>
        </View>
    }

    render() {
        const { promation, category,products } = this.state;
     
        return (

           
            <SafeAreaView  style={{flex:1}}>
                <View style={style.header}>
        
                    <View>
                        <Text style={style.AppName}> KaloriNet</Text>
                    </View>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('UserProfile')}>
                    <View>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d"  }} style={style.Avatar} />
                    </View></TouchableOpacity>
                </View>
                <ScrollView style={{flex:1}}>
                    <View style={style.banner}>
                        <Text style={style.bannertext}>Kalori takip uygulamasi</Text>

                    </View>

                    <View style={style.content} >

                        <View style={style.Searcharea}>

                            <View style={style.SearchInput}><TextInput placeholder="Arama" style={style.Searchbar} /></View>
                            <View style={style.SearchButtoncontainer}>
                                <TouchableOpacity style={style.Searchbutton}><Text>ara</Text></TouchableOpacity>

                            </View>

                        </View>

                        <View style={style.promation}>
                            <FlatList style={{ paddingHorizontal: 10 }}
                                showsHorizontalScrollIndicator={false}
                                data={promation} horizontal={true} renderItem={this.renderItem} />

                        </View>


                    </View>
                    <View style={style.categoryArea}>

                        <View style={style.categoryAreaTopBar}>
                            <View><Text style={style.categoryone}>Kategoriler</Text></View>
                            <View><Text style={style.categorytwo}>Hepsini gor</Text></View>


                        </View>
                        <View style={{ marginTop: 15 }}>
                            <FlatList style={{ paddingHorizontal: 10 }}
                                showsHorizontalScrollIndicator={false}
                                data={category} horizontal={true} renderItem={this.renderCategoryItem} />


                        </View>
                    </View>


                    <View style={style.foodArea}>
                        <View style={style.categoryAreaTopBar}>
                            <View><Text style={style.categoryone}>Öne Çıkanlar</Text></View>
                          


                        </View>
                        <TouchableOpacity>
                        <View style={{ marginTop: 5 }}>
                            <FlatList style={{ paddingHorizontal: 10,paddingVertical: 20  }}
                                showsHorizontalScrollIndicator={false}
                                data={products} horizontal={true} renderItem={this.renderProductItem} />


                 
                        </View>
   
   
                        </TouchableOpacity>



                    </View>

                    <LinearGradient
        colors={['#c0392b', '#f1c40f', '#8e44ad']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={style.button}
      >
     
      </LinearGradient>

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
        paddingTop: 20,
        paddingBottom: 5,

    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,


    },
    AppName: {
        padding: 8,
        fontSize: 24,
        color: "#8a2be2",
        fontWeight:'700',
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
        width: 280,
        marginRight: 8,
        height: 152,
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

        fontSize: 17,
        color: "white",
        fontWeight: '500',
    },
    Promationdescription: {

        fontSize: 12,
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
        marginTop: 20,

    },
    categoryone: {
        fontSize: 18,
        color:COLOURS.Purple

    },

    categorytwo: {
        color: "#8a2be2",
        fontWeight: '400',

    },

    categoryItem: {

        padding: 10,
        marginRight: 5,
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

    },
    
    productItem: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 20,
        backgroundColor: "white",
        padding: 10,
        marginRight: 5,
        borderRadius:10,
        width:140,
        height:130,

    },


    productItemIconContainer: {

        backgroundColor: "white",
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
        
        width: 120,
        height: 80,
  
    },
    foodArea:{
        marginTop:10,

    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,},







}
);


