import axios from "axios"
import { IS_AUTH_FAILURE, IS_AUTH_SUCCESS } from "./actionType"


export const removeToken = async() =>{
    try{
        return  await localStorage.removeItem("Token")
    }catch(err){
     console.log(err)
     return null
    }
 
 }

 export const getUser = ()=> async(dispatch) =>{
 
    try{
       const user = await axios.get("https://saasa-meal.onrender.com/user", {
            headers:{
            token:localStorage.getItem("Token")      
                    }
        })
        dispatch({type:IS_AUTH_SUCCESS, payload:user.data.data})
    }catch(err){
     console.log(err)
    }
 
 }
 
export const userLogOut = ()=> async(dispatch)=>{
    try{
        await removeToken();
        dispatch({type:IS_AUTH_FAILURE, payload:{}})
    }catch(err){
        console.log(err);
    }
}