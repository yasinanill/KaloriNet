import react, { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Avatar, Title, Subheading, Button, TextInput } from "react-native-paper";


import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";
import { db } from "../../firebase-config";
import { doc,setDoc,getFirestore,collection ,getDoc , onSnapshot,
    deleteDoc,
    addDoc,} from "firebase/firestore";
import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SingIn = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isSingedIn, setIsSingedIn] = useState(false);
    const [error, setError] = useState('');

    const navigation = useNavigation();
    const [userDoc, setUserDoc] = useState(null)
    const [text, setText] = useState("")
    

    



    
    const SingInUser = () =>{

        signInWithEmailAndPassword(authentication,email,password)
        .then((re)=>{setIsSingedIn(true);
            console.log(re);
            navigation.navigate("HomePage")
            }).catch((re)=> {
                
                console.log(re);
            })
}


const SingOutUser = () =>{

    signOut(authentication)
    .then((re)=>{setIsSingedIn(false);
      
        }).catch((err)=> {
          
            console.log(err);
        })
}














 

    return (
        <View style={{ margin: 16 }}>
                
                
            
                
                  <View  style={{ margin: 10,  color:'purple' ,justifyContent:"center",alignItems:"center", marginTop:80,}}>
                         <Text  style={{ margin: 10,  color:'purple' ,fontSize:32, }}> KaloriNet </Text>
                         <Text  style={{ margin: 10,  color:'black' ,fontSize:16, }}> "Hoşgeldiniz" </Text>
                    </View>

            <TextInput label="Email" style={{ margin: 10 }} value={email} onChangeText={(text) => setEmail(text)} />
            <TextInput label="Sifre" style={{ margin: 10 }} value={password} onChangeText={(text) => setPassword(text)} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>

           { isSingedIn === false?       <Button style={{ margin: 10 }}
                      mode="contained" onPress={() => navigation.navigate("SingUp")}
                   
                      loading={isLoading}
                    >
                     Kaydol
                    </Button>
               
           :
            <Button style={{ margin: 10 }} Title="Sing Out"
                onPress={SingOutUser} 
           
            > Cikis Yap
            </Button>

           }
                
                <Button Title="Sing In"
                    onPress={SingInUser}  style={{ margin: 10 }} 
                > Giris Yap
                </Button>
            </View>


           


        </View>
          

    );
};

export default SingIn;