import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';
import { BASE_URL } from './config';

export const auth = createContext();
export const AuthProvide=({children})=> {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] =useState(false);

    const register =(username, email, password)=>{
      
         axios.post(`${BASE_URL}/account`,{
            username, email, password
         }).then(res =>{
             let userInfo = res.data;
             setUserInfo(userInfo);
             AsyncStorage.setItem('userInfo',JSON.stringify(userInfo));
            
             console.log(userInfo);
         }).catch(e =>{
              console.log(`register failed ${e}`);
             
         });
    };
    const login = ( username, password) => {
        
    
        axios
          .post(`${BASE_URL}/account`, {
            username,
            password,
          })
          .then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            
          })
          .catch(e => {
            console.log(`login error ${e}`);
           
          });
      };
    
    return(
    <auth.Provider value={{
     
        userInfo,
        register,
        login,
   

        }}>
       {children}
    </auth.Provider>)
};