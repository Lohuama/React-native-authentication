import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();
const randomId = Math.floor(Math.random() * 1000);

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const register = (name, email, password) => {
    setIsloading(true);

    axios
      .post(`${BASE_URL}/users`, {
        id: '11',
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsloading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setIsloading(false);
      });
  };

  const login = (email, password) => {
    setIsloading(true);

    axios
      .post(`${BASE_URL}/session`, {
        id: 8190,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsloading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setIsloading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
