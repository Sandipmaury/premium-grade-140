import React from 'react'
import stylenav from "./Nav.module.css"
import NavLogo from "../Assets/logo/logo.jpeg"
import { Navigate } from 'react-router-dom/dist/umd/react-router-dom.development'
import { useNavigate } from 'react-router-dom'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

export const Nav = () => {
  const navigate=useNavigate()
  return (

    // <div className={stylenav.navbar}>
    //        {/* 1st nav  */}
    //    <div className={stylenav.nav1}>
    //     {/* logo */}
    //     <div className={stylenav.logoimg}>
    //         <Link to='/'><img height="20px" width="320px" src={NavLogo} /></Link>
    //     </div>

  
   <div style={{position:"sticky", top:"0", zIndex:"100"}}>
      <Box w={"100%"} bg={"white"} >
        <Box w={"1100px"} m={"auto"} h={"90px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>


          <Box>
            <Link to='/'><Image h={"80px"} w={"350px"} src={NavLogo} /></Link>
          </Box>
         
         <Box w={"150px"}>
          <Flex justifyContent={"space-between"}>
         <Link> <Image h={"40px"} w={"40px"} src="https://www.kindmeal.my/images/follow_blog_grey.png" /></Link>   
         <Link><Image h={"40px"} w={"40px"} src="https://www.kindmeal.my/images/follow_facebook_grey.png" /></Link>   
         <Link><Image h={"40px"} w={"40px"} src="https://www.kindmeal.my/images/follow_twitter_grey.png" /></Link>  
          </Flex>
         </Box>

         {/* login */}
         <Box w={"290px"} >
          <Flex justifyContent={"space-between"}>
           <Link to='/user/login'> <Box fontSize={"12px"} w={"53px"} h={"25px"} cursor={"pointer"} color={'#444444'} display={"flex"} justifyContent={"center"} alignItems={"center"} >Login</Box></Link>
            <Box w={"80px"} h={"25px"} bg={"#35619f"} cursor={"pointer"} justifyContent={"center"} borderRadius={"5px"} lineHeight={"20px"}  color={"white"} padding={"2px 2px 2px 2px"} display={"flex"} alignItems={"center"} fontSize={"12px"}>Facebook</Box>
            <Box w={"80px"} h={"25px"} bg={"#666666"} cursor={"pointer"} justifyContent={"center"} borderRadius={"5px"} lineHeight={"20px"}  color={"white"} padding={"2px 2px 2px 2px"} display={"flex"} alignItems={"center"} fontSize={"12px"}>Email</Box>
            <Link to='/user/register'><Box fontSize={"12px"} w={"53px"} h={"25px"} cursor={"pointer"} border={"1px solid silver"} borderBottom={"none"} borderTop={"none"} borderRight={"none"} color={'#444444'} display={"flex"} justifyContent={"center"} alignItems={"center"} >Sign Up</Box></Link>


          </Flex>
         </Box>
        </Box>
      </Box>



            {/* 2nd nav */}
      <Box w={"100%"} bg={"#229760"} h={"40px"}>
     <Box w={"1100px"} m={"auto"} display={"flex"} justifyContent={"space-between"} fontSize={"18px"} color={"#ffffff"} lineHeight={"40px"} alignItems={"center"} >
     <Box cursor={"pointer"} >Home</Box>
     <Box cursor={"pointer"}>Meal Deals</Box>
     <Box cursor={"pointer"}>KindMoments</Box>
     <Box cursor={"pointer"}>Hot Picks</Box>
     <Box cursor={"pointer"}>Recipes</Box>
     <Box cursor={"pointer"}>Directory</Box>
     <Box cursor={"pointer"}>Articles</Box>
     <Box cursor={"pointer"}>Help</Box>
     </Box>
      </Box>
    </div>
  )
}