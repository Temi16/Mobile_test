import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Navigation/Routes';
import { NativeBaseProvider } from 'native-base';
import { AuthContext } from './Context/Auth';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer style={styles.container}>
    <StatusBar style="auto" translucent={true} />
    <AuthContext>
      <NativeBaseProvider>
       
        <Routes />
      </NativeBaseProvider>
    </AuthContext>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
