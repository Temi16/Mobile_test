import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome,Ionicons } from '@expo/vector-icons';


const DashboardScreen = ({navigation}) => {
    // const navigation = useNavigation();
    // const nav = useRoute().params
    console.log(navigation)

    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Dashboard</Text>
                <FontAwesome name="bars" size={22} color={"black"} style={{marginLeft:'auto',marginTop:-24}} onPress={() => navigation.openDrawer()} />
            </View>
            <Text style={styles.textBig}>Welcome to Dashboard</Text>
            <View style={styles.secondContainer}>
                
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>
                        navigation.navigate('DepositScreen')}>
                    <Text style={styles.btnText} >Deposit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>
                        navigation.navigate('WithdrawalScreen')}>
                    <Text style={styles.btnText} >Transfer</Text>
                </TouchableOpacity>
               
            </View>
            <View style={styles.secondContainer2}>

                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>
                        navigation.navigate('AllTransactionsScreen')}>
                    <Text style={styles.btnText}>Deposit and Withdrawal History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.continueBtn}
                    onPress={() =>
                        navigation.navigate('AllTransactionsScreen')}>
                    <Text style={styles.btnText} >All Transactions</Text>
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
        flexDirection: "row",
        //justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer2:{
        marginTop: -375,
        flex:1,
        flexDirection: "row",
       // margin: 20,
        //justifyContent: 'center',
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
        fontSize:40,
        textAlign: 'center',
      },

      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
     
      continueBtn:{
        backgroundColor: "white",
        borderRadius: 9,
        padding: 10,
        width: 150,
        height: 200,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
      },
      btnText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
   
});

export default DashboardScreen;