import * as types from "./actionType";
import axios from "axios"
const getMealData=(params)=>(dispatch)=>{

    dispatch({type:types.MEAL_DATA_REQUEST})
    return axios.get(`https://saasa-meal.onrender.com/meals`,{
        headers:{
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZkOGE5ODliODk0M2ZiY2U4MmNiYjciLCJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWF0IjoxNjY4MjI5ODgzLCJleHAiOjE2NjgyNjU4ODN9.oSj42Pqorsmqdqi7z4VdfEIo6_BAMO4LuYYYXaWnIQM"
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