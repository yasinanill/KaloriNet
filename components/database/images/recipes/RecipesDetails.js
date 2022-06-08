import React from "react";
import { Text ,Image} from "react-native";
import { Searchbar } from 'react-native-paper';
import { List, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from "react-native";
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Chip } from 'react-native-paper';



export default class RecipesDetails extends React.Component {

    constructor() {

        super();
        this.state = {

            checkbox: false
        }
    }







    render() {
        return (


            <ScrollView>
                <View>

                    <Card>
                        <Card.Title title="" subtitle="" />

                        <Image
                            style={style.Image}
                            source={require('./tavuk.jpg')}
                        />

                    </Card>


                    <View style={style.recipesdescription} >

                        <View style={style.recipeskalori}>
                            <Ionicons style={{ padding: 5, fontSize: 30 }} name="flame-outline" />
                            <Text style={{ fontSize: 16, fontWeight: "700" }}> 393 Kalori </Text>
                        </View  >
                        <View style={style.vr}></View>
                        <View style={style.recipestime}>
                            <Ionicons style={{ padding: 5, fontSize: 30 }} name="alarm-outline" />
                            <Text style={{ fontSize: 16, fontWeight: "700" }}> 20 Dakika </Text>
                        </View>


                    </View>

                    <View style={style.Desciription}>
                        <Text style={{ padding: 5, fontSize: 16 }}>

                        Kızartma ile uğraşmak istemeyenlere ve sevmeyenlere pratik ve lezzetli olan fırında kabak mücver tarifini sizlerle paylaşıyorum. Kolay hazırlanışı ve az malzemesi ile herkesin pratik şekilde hazırlayabilecekleri kabak mücver tarifini denemenizi tavsiye ederim.Hem sağlıklı hemde hafif tadıyla diyet listelerinizde bulundurabileceğiniz fırında kabak mücver tarifimi defterlerinize eklemeyi unutmayın. Deneyeceklere şimdiden afiyet olsun

                        </Text>
                        <Text></Text>
                        <View style={style.chip}  >


                            <Chip style={{  margin:6}} icon="" > <Text style={{  fontSize: 16 }}> tavuk göğsü</Text></Chip>
                            <Chip style={{  margin:6}} icon="" ><Text style={{  fontSize: 16 }}>bezelye</Text></Chip>
                            <Chip style={{  margin:6}} icon="" ><Text style={{  fontSize: 16 }}>kabak</Text></Chip>
                            <Chip style={{  margin:6}} icon="" ><Text style={{  fontSize: 16 }}>patates</Text></Chip>
                            <Chip style={{  margin:6}} icon="" ><Text style={{  fontSize: 16 }}>havuç</Text></Chip>
                            <Chip style={{  margin:6}} icon="" ><Text style={{  fontSize: 16 }}>yeşil biber</Text></Chip>
                            <Chip style={{  margin:6}} icon="" > <Text style={{  fontSize: 16 }}>soğan</Text></Chip>

                        </View>
                    </View>





                    <DataTable>

                        <DataTable.Header >
                            <DataTable.Title ><Text style={style.Baslik}>Besin Degerleri</Text></DataTable.Title>

                        </DataTable.Header>


                        <DataTable.Row>
                            <DataTable.Cell>Karbonhidrat (g)</DataTable.Cell>
                            <DataTable.Cell numeric>24.5</DataTable.Cell>

                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Protein (g)</DataTable.Cell>
                            <DataTable.Cell numeric>38</DataTable.Cell>

                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>Yağ (g)</DataTable.Cell>
                            <DataTable.Cell numeric>14</DataTable.Cell>

                        </DataTable.Row>
                       
                            <DataTable>
                                <DataTable.Row>
                                    <DataTable.Cell>Lif (g)</DataTable.Cell>
                                    <DataTable.Cell numeric>7</DataTable.Cell>

                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell>Sodyum (mg)</DataTable.Cell>
                                    <DataTable.Cell numeric>0.81</DataTable.Cell>

                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Potasyum (mg)</DataTable.Cell>
                                    <DataTable.Cell numeric>1182</DataTable.Cell>

                                </DataTable.Row>
                                <DataTable.Row>
                                    <DataTable.Cell>Kalsiyum (mg)</DataTable.Cell>
                                    <DataTable.Cell numeric>80.5</DataTable.Cell>

                                </DataTable.Row>


                            </DataTable>




                    </DataTable>


                    <View>

                        <Card>

                            <Card.Content>
                                <Title>Değerlendirme</Title>
                                <Paragraph style={{ padding: 5, fontSize: 16 }} >Sebzeli Tavuk Yemeğinin 100 gramında 106 kalori vardır ve besin değeri olarak: 11 gr protein, 3.96 gr yağ, 7 gr karbonhidrat içermektedir.

Sebzeli tavuk yemeği; C, A ve K vitaminleri, demir, çinko, bakır mineralleri açısından zengindir. Öğle ve akşam öğünlerinde sebze ve et yerine sebzeli tavuk yemeği tüketilebilir.

</Paragraph>
                            </Card.Content>

                        </Card>
                    </View>
                </View></ScrollView>

        );
    };
}

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


    chip: { flexWrap: 'wrap',flexDirection:"row",  },

Desciription:{

        padding:10,
        paddingVertical:20,

}


})

