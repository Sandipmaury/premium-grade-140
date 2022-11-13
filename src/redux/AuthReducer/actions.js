import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import * as way from './actionType';

// export const SignupData=(post)=>async(dispatch)=>{
//     dispatch({type:way.SIGNUP_LODING})
//    await axios.post('https://saasa-meal.onrender.com/user/register',post)
//     .then((res)=>{
//         console.log(res);
//         dispatch({type:way.SIGNUP_SUCCESS,payload:res.data})})
//     .catch((err)=>{
//         console.log(err)
//         dispatch({type:way.SIGNUP_FAILURE})

//     })
// }


// export const Login_Data=(LoginData)=>async(dispatch)=>{
//     dispatch({type:way.LOGIN_LODING})
//     await axios.post('https://saasa-meal.onrender.com/user/login',LoginData)
//     .then((res)=>{
//         console.log('Login:',res);
//         dispatch({type:way.LOGIN_SUCCESS,payload:res.data})})
//     .catch((err)=>{
//         console.log('Login:',err)
//         dispatch({type:way.LOGIN_FAILURE})

//     })
// }


export const SignupData=(post)=>async(dispatch)=>{
    console.log('action:',post)
    dispatch({type:way.SIGNUP_LODING})

    try {
           let res=await fetch("https://saasa-meal.onrender.com/user/register",{
            method:'POST',
            body:JSON.stringify(post),
            headers:{
                "Content-Type":"application/json",
            }
            })
            let data=await res.json()
            console.log(data)
            dispatch({type:way.SIGNUP_SUCCESS,payload:data})
            return data.success
            // if(data.success==true){
            //     navigate('/user/login')
            // }
            // else if(!data.success){
            //     alert('Email already exits, Please login with other Email ID')
            // }
            // if(data.success==true){
            //     navigate('/user/login')
            // }
            // else{
            //     alert('Email already exits, Please login with other Email ID')
            // }
        

        } catch (error) {
            console.log(error)
            return false
        }

}


export const Login_Data=(LoginData)=>async(dispatch)=>{
    dispatch({type:way.LOGIN_LODING})
    try {
           let res=await fetch("https://saasa-meal.onrender.com/user/login",{
            method:'POST',
            body:JSON.stringify(LoginData),
            headers:{
                "Content-Type":"application/json",
            }
            })
            let data=await res.json();
            console.log(data)
            dispatch({type:way.LOGIN_SUCCESS,payload:data})
            const success=data.success
            const token=data.data.token
            return ({success,token})

            
        } catch (error) {
            console.log(error)
        }
    

}




