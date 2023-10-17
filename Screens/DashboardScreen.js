import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const DashboardScreen = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Dashboard</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.textBig}>Welcome to dashboard</Text>

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
   
});

export default DashboardScreen;