import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Context } from "../Context/Auth";

const SideBar = (props) => {

  const navigation = useNavigation();
  const { 
    handleLogout
  } = useContext(Context);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={{background:'yellow'}}>
        <View style={styles.drawerContent}>
          <View style={{height:0}} />
         
          <View style={{borderWidth:10,borderColor:'black',marginVertical:20,marginHorizontal:10}} />
          <DrawerItem 
            label='Deposit'
            icon={()=><Ionicons name="link" size={22} color="blue" style={{}} />} 
            labelStyle={{color:'white',fontSize:20}}
            style={{marginTop:0}}
            onPress={() =>
              navigation.navigate('DepositScreen')}
          />
          <DrawerItem 
            label='Transfer'
            icon={()=><Ionicons name="timer" size={22} color="blue" style={{}} />} 
            labelStyle={{color:'white',fontSize:20}}
            style={{marginTop:0}}
            onPress={() =>
              navigation.navigate('WithdrawalScreen')}
          />
          <DrawerItem 
            label='History'
            icon={()=><Ionicons name="filter" size={22} color="blue" style={{}} />} 
            labelStyle={{color:'white',fontSize:20}}
            style={{marginTop:0}}
            onPress={() =>
              navigation.navigate('AllTransactionsScreen')}
          />
        </View>
      </DrawerContentScrollView>
      <Pressable style={styles.logoutBtn} onPress={() => [handleLogout(), navigation.navigate("LoginScreen")]}>
        <Ionicons name="md-log-out-outline" size={20} color="white" />
        <Text style={{fontSize:16,color:'white', fontWeight:'600',paddingLeft:10}}>Log out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'grey',
    marginTop: 25
  },
  drawerContent:{
    paddingHorizontal:0
  },
  logoutBtn:{
    marginTop:'auto',
    paddingVertical:12,
    paddingHorizontal:20,
    backgroundColor:'#E41515',
    flexDirection:'row'
  }, 
  profileSwitch:{
    flexDirection:'row',
    marginHorizontal:20,
  },
  switchTxt:{
    color:'white',
    fontSize:16,
    paddingLeft:12,
  },
  txtWhite:{
    color:'white',
    fontWeight:'600',
    fontSize:16,
  }
});

export default SideBar;

//backgroundColor:'#080604',