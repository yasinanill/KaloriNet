import react, { useState } from "react";
import { Text } from "react-native";
import { View ,TouchableOpacity} from "react-native";
import { Avatar, Title, Subheading, Button, TextInput } from "react-native-paper";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { authentication } from "../../firebase-config";
import { db , app} from "../../firebase-config";
import { doc,setDoc,getFirestore,collection ,getDoc , onSnapshot,
    deleteDoc,
    addDoc,
    Firestore,} from "firebase/firestore";
import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";


    const SingUp = () => {
        const [displayName, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState("");
      
        const navigation = useNavigation();
      

        
        const createAccount = async () => {
          createUserWithEmailAndPassword(authentication,email,password,displayName)
          .then((re)=>{

            console.log(re);
            navigation.goBack();
          }).catch((re)=>{

            console.log(re);

          })
        }

    const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(db, "MyCollection", "MyDocument")
    
        getDoc(myDoc)
          // Handling Promises
          .then((snapshot) => {
            // MARK: Success
            if (snapshot.exists) {
              setUserDoc(snapshot.data())
            }
            else {
              alert("No Doc Found")
            }
          })
          .catch((error) => {
            // MARK: Failure
            alert(error.message)
          })
    
      };









    /*
          const createAccount = async () => {
                console.warn("hiiiiiiiiii!!!!!");
                setIsLoading(true);
                try{
                    const response = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
        
                await response.user.updateProfile({ displayName: name });
                setIsLoading(false);
                }catch(e){
                    setIsLoading(false);
                     alert(e.message);
                    }
        
            };
        
        
        
        
            //const auth = firebase.auth();
            //a/uth.onAuthStateChanged(user => }*/

            return (
                
                <View style={{ margin: 16 }}>
                  {!!error && (
                    <Subheading
                      style={{ color: "red", textAlign: "center", marginBottom: 16 }}
                    >
                      {error}
                    </Subheading>
                  )}
                           
                        <View  style={{ margin: 10,  color:'purple' ,justifyContent:"center",alignItems:"center", marginTop:80,}}>
                         <Text  style={{ margin: 10,  color:'purple' ,fontSize:32, }}> KaloriNet </Text>
                         <Text  style={{ margin: 10,  color:'black' ,fontSize:16, }}> "Hoşgeldiniz" </Text>
                    </View>
                  <TextInput
                    label="Isminiz"
                    value={displayName}
                    onChangeText={(text) => setName(text)}
                  />
                  <TextInput
                    label="Email"
                    style={{ marginTop: 12 }}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                  />
                  <TextInput
                    label="Sifre"
                    style={{ marginTop: 12 }}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 16,
                    }}
                  >
             
                    <Button
                      mode="contained"
                      onPress={() => createAccount()}
                      loading={isLoading}
                    >
                     Kaydol
                    </Button>
                  </View>
                </View>
              );
            };
            

export default SingUp;