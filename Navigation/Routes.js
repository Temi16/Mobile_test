import { View, Text, Pressable } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createDrawerNavigator,
    DrawerNavigationOptions,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from "@react-navigation/drawer";


import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen';
import SideBar from '../Screens/Sidebar';
import TransferScreen from '../Screens/TransferScreen';
import WithdrawalScreen from '../Screens/WithdrawalScreen';
import AllTransactionsScreen from '../Screens/AllTransactionsScreen';

const EcommerceStack = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator
        drawerContent={(props) => <SideBar {...props} />}
        screenOptions={{ headerShown: false }}
        initialRouteName={"LoginScreen"}
      >
        
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
      <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
      <Drawer.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Drawer.Screen name="DepositScreen" component={TransferScreen} />
      <Drawer.Screen name="WithdrawalScreen" component={WithdrawalScreen} />
      <Drawer.Screen name="AllTransactionsScreen" component={AllTransactionsScreen} />
     
    </Drawer.Navigator>
    )
}
const Routes = ({ screenToken }) => {
    const Stack = createNativeStackNavigator();
    const [routes, setRoutes] = useState("");

    useEffect(() => {
        setRoutes("LoginScreen");
    }, []);

   

    return (
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          initialRouteName={routes}
        >
            <Stack.Screen name="EcommerceStack" component={EcommerceStack} />
          {/* Account Screens */}
          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} /> */}
        </Stack.Navigator>
    )

}
export default Routes;