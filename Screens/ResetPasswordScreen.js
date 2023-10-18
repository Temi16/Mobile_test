import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../Context/Auth";
import { passwordReset } from "../Services/User/UserApi";
import { Ionicons } from '@expo/vector-icons'; 

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    const {
        setToken,
    } = useContext(Context);

    const [code, setCode] = useState('');
    const [token, setTok] = useState('');
    const [password, setPassword] = useState('');
   

    const handleValueChange = (value, { setValue }) => {
      setValue(value);
    };
    
      const handleResetPassword = async() => {
        const data = {
            token: token,
            code: code,
            password: password,
        }
        console.log("45")
        const reset = await passwordReset(data);
        console.log(reset.response)
        if(reset?.response){
            await setToken(reset.response.token)
            navigation.navigate('LoginScreen');
        }else{
            //Alert
            Alert.alert(
                'Success',      
                `Password reset Successfully`,  
                [
                  {
                    text: 'OK',      
                    onPress: () => console.log('OK Pressed')  
                  },
                  // You can add more buttons here
                ],
                { cancelable: false }  
              )
              navigation.navigate('LoginScreen');
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
                <Text style={styles.titleText}>Reset Password Page</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.textBig}>Welcome</Text>
                <Text style={styles.modalText}>Please, Enter your email and password to continue.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setTok })
                      }
                    value={token}
                    placeholder="token"
                    //maxLength={4}
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
                 <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setCode })
                      }
                    value={code}
                    placeholder="code"
                    // keyboardType="numeric"
                    // maxLength={4}
                />

                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>{
                        handleResetPassword()}}>
                    <Text style={styles.btnText} >Reset Password</Text>
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

export default ResetPasswordScreen;