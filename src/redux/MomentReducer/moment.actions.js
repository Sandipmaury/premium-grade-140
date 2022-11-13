import axios from "axios"
import {GET_MOMENT_LOADING,GET_MOMENT_ERROR,GET_MOMENT_SUCCESS} from "./moment.types";


export const getMoment  =(params) => async (dispatch)=>{
   dispatch({ type: GET_MOMENT_LOADING})
   const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    try{
    let response =  await axios.get(`https://saasa-meal.onrender.com/moments`,{
        headers : {
             token: localStorage.getItem("Token")
        },
        cancelToken : source.token,
        params : params 
    });
    dispatch({ type: GET_MOMENT_SUCCESS,payload: response.data})

   
    }
    catch(thrown){
        if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message);
          } else {
            // handle error
          }
        dispatch({ type:GET_MOMENT_ERROR })
    }
 };


