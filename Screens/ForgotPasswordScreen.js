import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../Context/Auth";
import { ForgotPassword } from "../Services/User/UserApi";
import { Ionicons } from '@expo/vector-icons'; 

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const {
        setToken,
    } = useContext(Context);

    const [email, setEmail] = useState('');
   

    const handleValueChange = (value, { setValue }) => {
      setValue(value);
    };
    
      const handleForgotPassword = async() => {
        const data = {
            email: email,
        }
        console.log("46")
        const forget = await ForgotPassword(data);
        console.log(forget.response)
        if(forget?.response){
            navigation.navigate('ResetPasswordScreen');
        }else{
            //Alert
            Alert.alert(
                'Success',      
                `Code Sent Successfully`,  
                [
                  {
                    text: 'OK',      
                    onPress: () => console.log('OK Pressed')  
                  },
                  // You can add more buttons here
                ],
                { cancelable: false }  
              )
            navigation.navigate('ResetPasswordScreen');
        }
    };


    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <TouchableOpacity style={{ alignSelf: "flex-start" }} onPress={() => navigation.navigate("LoginScreen")}>
                    <Ionicons
                        name="arrow-back-circle-outline" 
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <Text style={styles.titleText}>Forgot Password</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.modalText}>Enter your email to continue.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setEmail })
                      }
                    value={email}
                    placeholder="email"
                    //maxLength={4}
                />

                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>{
                        handleForgotPassword()}}>
                    <Text style={styles.btnText} >Send Code</Text>
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
        //paddingLeft: ww(60),
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

export default ForgotPasswordScreen;