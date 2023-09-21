




import  {React, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AuthUser = () => {

    const navigate = useNavigate();
    const getToken = () => {
      const tokenString = sessionStorage.getItem("token");
      const userToken = JSON.parse(tokenString);
      return userToken;    
    };
  
    const getUser = () => {
      const userString = JSON.parse(sessionStorage.getItem("user"));
      return userString;
    };

    const saveToken = (user, token) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("user", JSON.stringify(user));
      };

    const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
    const http = axios.create({
       
        baseURL: "https://vsmart.ajspire.com/api",
        
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const logout = () => {
        sessionStorage.clear();
        setToken(null);
        setUser(null);
        navigate("/");
    
      };
      return {
        setToken: saveToken,
        token,
        user,
        http,
        logout,
      };
}

export default AuthUser

