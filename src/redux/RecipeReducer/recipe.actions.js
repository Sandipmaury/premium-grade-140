
import {GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR,GET_PRODUCTS_SUCCESS} from "./recipe.types";

// export const getProducts =() => async (dispatch)=>{
//    dispatch({ type: GET_PRODUCTS_LOADING})
//     try{
//     let response =  await axios.get("http://localhost:8000/products");
//     dispatch({ type: GET_PRODUCTS_SUCCESS,payload: response.data})
//     return response.data; // this step can be skipped.
   
//     }
//     catch(e){
//         dispatch({ type:GET_PRODUCTS_ERROR })
//     }
//  };

export const getRecipe =() => async (dispatch)=>{
    dispatch({ type: GET_PRODUCTS_LOADING})
   fetch("https://saasa-meal.onrender.com/recipes",{
    method: "GET",
        // headers : {
        //     token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZiMzcyYmVjODU2M2IyNmI3MzkxZmYiLCJlbWFpbCI6InNhbmRpcEBnbWFpbC5jb20iLCJpYXQiOjE2NjgxNDA3NDYsImV4cCI6MTY2ODE3Njc0Nn0.nC3LPcW-QniAmLBDl8CD41lk4y5flde1eK0ODJx0huI",
        // }
   })
   .then((res)=>  res.json())
   .then((res) =>{
     console.log(res)
   dispatch({type:GET_PRODUCTS_SUCCESS, payload : res}) 
  return res.data
})
   .catch((err) =>{
    dispatch({type:GET_PRODUCTS_ERROR})
   })
  };