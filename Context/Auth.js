import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export const AuthContext = ({ children }) => {

    const setToken = async (token) => {
        if (token !== null) {
          try {
            await AsyncStorage.setItem("@token", JSON.stringify(token));
            return true;
          } catch (e) {
            console.log(e);
          }
        }
    
        return false;
    };

    const getToken = async () => {
        const token = await AsyncStorage.getItem("@token");
        return JSON.parse(token);
    };

    const stateValues = {
        setToken,
        getToken,
    }

    return <Context.Provider value={stateValues}>{children}</Context.Provider>;
}