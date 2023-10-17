import { View, Text, Pressable } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import DashboardScreen from '../Screens/DashboardScreen';

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
          {/* Account Screens */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        </Stack.Navigator>
    )

}
export default Routes;