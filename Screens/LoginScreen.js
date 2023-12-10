import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../Context/Auth";
import { LoginUser } from "../Services/User/UserApi";

const LoginScreen = () => {
    const navigation = useNavigation();
    const {
        setToken,
    } = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const handleValueChange = (value, { setValue }) => {
      setValue(value);
    };
    
      const handleLogin = async() => {
        navigation.navigate('DashboardScreen');
        // const data = {
        //     email: email,
        //     password: password,
        // }
        // console.log("47")
        // const login = await LoginUser(data);
        // console.log(login)
        // if(login?.response){
        //     await setToken(login.response.token)
        //     navigation.navigate('DashboardScreen');
        // }else{
        //     //Alert
        //     Alert.alert(
        //         'Error!',      
        //         `Incorrect email or password, please try again`,  
        //         [
        //           {
        //             text: 'OK',      
        //             onPress: () => console.log('OK Pressed')  
        //           },
        //           // You can add more buttons here
        //         ],
        //         { cancelable: false }  
        //       )
        // }
    };


    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Login Page</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.textBig}>Welcome</Text>
                <Text style={styles.modalText}>Please, Enter your email and password to continue.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setEmail })
                      }
                    value={email}
                    placeholder="email"
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
               
                <View style={styles.title1}>
                  <TouchableOpacity
                   onPress={() =>{
                    navigation.navigate('RegisterScreen')}}
                  >
                    <Text style={styles.text2}>Register/SignUp</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>{
                        handleLogin()}}>
                    <Text style={styles.btnText} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
   
}

const styles = StyleSheet.create({
  title1 :{
    
    flexDirection : 'row',
    marginTop: 10,
    marginBottom: 10
  },
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
      marginLeft:240,
      textDecorationLine: 'underline'
      
    },
    text3:{
      color:'blue',
      fontSize:17,
      fontWeight:'bold',
      marginLeft:-0,
      textDecorationLine: 'underline'
      
    }
});

export default LoginScreen;