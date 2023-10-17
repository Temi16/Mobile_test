import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../Context/Auth";
import { RegisterUser } from "../Services/User/UserApi";
import { UpdateProfile } from "../Services/User/UserApi";
import { Ionicons } from '@expo/vector-icons'; 

const RegisterScreen = () => {
    const navigation = useNavigation();
    const {
        setToken,
        getToken
    } = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
   

    const handleValueChange = (value, { setValue }) => {
      setValue(value);
    };
    
      const handleRegister = async() => {
        const data = {
            email: email,
            password: password,
            role: "member",
            is_refresh: false
        }

        const data2 = {
            payload: {
                first_name: firstname,
                last_name: lastname
            }
        }
        console.log("46")
        const register = await RegisterUser(data);
        console.log(register.response)
        const token = await setToken(register.response.token)
        
        if(token){
            const updateProfile = await UpdateProfile(data2, token)
            console.log(updateProfile.response)
            
            if(register?.response){
                navigation.navigate('LoginScreen');
            }else{
                //Alert
                Alert.alert(
                    'Error!',      
                    `Cannot Register, please check correctly your inputs`,  
                    [
                      {
                        text: 'OK',      
                        onPress: () => console.log('OK Pressed')  
                      },
                      // You can add more buttons here
                    ],
                    { cancelable: false }  
                  )
            }
        }
        else{
            Alert.alert(
                'Error!',      
                `Cannot Register, please check correctly your inputs`,  
                [
                  {
                    text: 'OK',      
                    onPress: () => console.log('OK Pressed')  
                  },
                  // You can add more buttons here
                ],
                { cancelable: false }  
              )
        }
      
    };


    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <TouchableOpacity style={{ alignSelf: "flex-start" }} onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="arrow-back-circle-outline" 
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <Text style={styles.titleText}>Registration Page</Text>
            </View>
            <View style={styles.secondContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setFirstname })
                        }
                    value={firstname}
                    placeholder="firstname"
                   
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setLastname })
                        }
                    value={lastname}
                    placeholder="lastname"
                   
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setEmail })
                      }
                    value={email}
                    placeholder="email"
                    
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setPassword })
                      }
                    value={password}
                    placeholder="password"
                    // keyboardType="numeric"
                    // maxLength={4}
                />
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>{
                        handleRegister()}}>
                    <Text style={styles.btnText} >Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
   
}

const styles = StyleSheet.create({
    titleView :{
        flexDirection : 'row',
        marginTop: 30,
    },
      titleText:{
        color: 'white',
        paddingLeft: 60,
        fontSize: 24,
        textAlign:'center'
    },
    container:{
        flex:1,
        backgroundColor: 'grey',
        paddingHorizontal: 20,
        marginTop: 25,
        
    },
    secondContainer:{
        marginTop: -175,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
        width: 350,
        height: 50,
        borderColor: 'gray',
        marginVertical:8,
        borderWidth:0.5,
        borderRadius: 10, 
        flexDirection:'row',
        paddingHorizontal:10,
        backgroundColor: 'white',
        //textAlign: 'center',
        color: 'black',
        fontSize: 15
    },

      textBig:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize:49,
        textAlign: 'center',
      },

      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
     
      continueBtn:{
        backgroundColor: "gold",
        borderRadius: 16,
        padding: 10,
        width: 150,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnText:{
        color:'#080604',
        fontSize:20,
        fontWeight:'bold'
    },
    text2:{
      color:'blue',
      fontSize:17,
      fontWeight:'bold',
      marginLeft: 250,
      textDecorationLine: 'underline'
      
  }
});

export default RegisterScreen;