import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from 'axios'


const Login = () => {
    let navigate = useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })


    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
           let res=await fetch("https://saasa-meal.onrender.com/user/login",{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json",
            }
            })
            let data=await res.json();
            console.log(data)
            if(data.success===true){
                window.localStorage.setItem('Token',data.data.token)
                navigate('/')
            }
            else{
                alert('Invalid username or password')
            }
            
        } catch (error) {
            console.log(error)
        }
    
    }

  return (
    <Container>
    <LoginDiv>
        <Logo src={"	http://localhost:3000/static/media/logo.eebab486d12135e36e7f.jpeg"}>

        </Logo>
        <Form onSubmit={handleSubmit}>
            <Input type={"email"} name="email" onChange={handleChange} placeholder="Email" required></Input>
            <Input type={"password"} name="password" onChange={handleChange} placeholder="Password" required></Input>
            <Input type={"submit"}/>
        </Form>
        <Bottom>
            <Link to={"/user/register"} border="none"> <button>Sign up</button></Link>
           
        </Bottom>
    </LoginDiv>

  </Container>
  )
}

export default Login



const Container=styled.div`
`
const LoginDiv=styled.div`
    width: 30vw;
    margin:40px auto;
    box-shadow: rgba(10, 0, 0, 0.56) 0px 22px 70px 4px;
    padding: 50px;
`
const Logo=styled.img`
@media only screen and (max-width:1150px){
    width: 70%;
}
    
`
const Hr=styled.hr`
    
`
const Bottom=styled.div`
  margin-top  :10px ;
`
const Form=styled.form`
   display :flex ;
   flex-direction: column;
`
const Input=styled.input`
    padding: 10px;
    margin: 10px 0;
`
const Button=styled.button`
    padding: 10px;
    cursor: pointer;
    border: ${props=>props.border};
`