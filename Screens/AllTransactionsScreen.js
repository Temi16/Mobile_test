import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../Context/Auth";
import { Ionicons } from '@expo/vector-icons';
import { LoginUser } from "../Services/User/UserApi";

const AllTransactionsScreen = () => {
    const navigation = useNavigation();
    const {
        setToken,
    } = useContext(Context);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
   

    const handleValueChange = (value, { setValue }) => {
      setValue(value);
    };
    
      const handleDeposit = async() => {
        Alert.alert(
                  'success!',      
                  `Transaction successful`,  
                  [
                    {
                      text: 'OK',      
                      onPress: () => console.log('OK Pressed')  
                    },
                    // You can add more buttons here
                  ],
                  { cancelable: false }  
                )
        navigation.navigate('DashboardScreen')
        // const data = {
        //     email: email,
        //     password: password,
        //     role: "admin"
        // }
        // console.log("45")
        // const login = await LoginUser(data);
        // console.log(login.response)
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
                <Ionicons name="arrow-back" size={34} color={"white"} style={{marginLeft: 10}} onPress={()=>navigation.navigate("DashboardScreen")} />
                <Text style={styles.titleText}>History</Text>
            </View>
            <View style={styles.secondContainer}>
            <View style={{flexDirection:'row'}}>
                <View style={{paddingLeft:10}}>
                <Text style={styles.textSmall}>PhoneNumber: xx1233</Text>
                <Text style={styles.textSmall}>Amount: 5000 </Text>
               
                </View>
               
            </View>
            </View>
            {/* <View style={styles.secondContainer}>
                <Text style={styles.modalText}>Please, Enter the phone number and amount to withdraw to continue.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) =>
                        handleValueChange(text, { setValue: setPhoneNumber })
                      }
                    value={phoneNumber}
                    placeholder="phone number"
                    //maxLength={4}
                />
               
                
            </View> */}
        </View>
    )
   
}

const styles = StyleSheet.create({
    textSmall:{
        color:"black",
        fontSize:22,
    },
    textBig:{
        color:"black",
        fontSize:14,
        fontWeight:'bold'
    },
  title1 :{
    
    flexDirection : 'row',
    marginTop: 10,
    marginBottom: 10
  },
    titleView :{
        flexDirection : 'row',
        alignContent: "space-between",
        alignItems: "center",
        marginTop: 30,
    },
      titleText:{
        color: 'white',
        paddingLeft: (30),
        fontSize: 34,
        textAlign:'center'
    },
    container:{
        flex:1,
        backgroundColor: 'grey',
        paddingHorizontal: 20,
        marginTop: 25,
        
    },
    secondContainer:{
        backgroundColor:'white',
        height:80,
        borderRadius:16,
        padding:10,
        marginBottom:20,
        marginTop:20,
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
      
    },
    modalText:{
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center'
    }
});

export default AllTransactionsScreen;