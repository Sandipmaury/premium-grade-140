import axios from "axios"
import {GET_RECIPE_LOADING,GET_RECIPE_ERROR,GET_RECIPE_SUCCESS} from "./recipe.types";




export const getRecipe  =(params) => async (dispatch)=>{
   dispatch({ type: GET_RECIPE_LOADING})
   const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    try{
    let response =  await axios.get(`https://saasa-meal.onrender.com/recipes`,{
        headers : {
             token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZiMzcyYmVjODU2M2IyNmI3MzkxZmYiLCJlbWFpbCI6InNhbmRpcEBnbWFpbC5jb20iLCJpYXQiOjE2NjgyNDg0ODUsImV4cCI6MTY2ODI4NDQ4NX0.f7Dry78zfaRdr27ox5z29uUAGlPYEEEXFvs63aqXpn0"
        },
        cancelToken : source.token,
        params : params 
    });
    dispatch({ type: GET_RECIPE_SUCCESS,payload: response.data})
 
    // return response.data.data; 
   
    }
    catch(thrown){
        if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message);
          } else {
            // handle error
          }
        dispatch({ type:GET_RECIPE_ERROR })
    }
 };


