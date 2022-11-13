import * as types from "./actionType";
import axios from "axios"
const getMealData=(params)=>(dispatch)=>{

    dispatch({type:types.MEAL_DATA_REQUEST})
    return axios.get(`https://saasa-meal.onrender.com/meals`,{
        headers:{
            token: localStorage.getItem("Token")
        },
        params:params
    }).then((res)=>{
        dispatch({type:types.MEAL_DATA_SUCCESS,payload:res.data})
    }).catch((err)=>{
        console.log(err)
        dispatch({type:types.MEAL_DATA_FAILURE,payload:err})
    })
}

export {getMealData}