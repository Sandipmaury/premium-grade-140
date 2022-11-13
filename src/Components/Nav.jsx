import React, { useEffect } from "react";
import NavLogo from "../Assets/logo/logo.jpeg";
import { Flex, Box, Image, Link, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Username } from "./username";
import { getUser } from "../redux/AuthReducer/actions";


export const Nav = () => {
  const navbarLinks = [
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/MealDeals",
      title: "Meal Deals",
    },
    {
      route: "/KindMomemts",
      title: "KindMoments",
    },
    {
      route: "/hotpicks",
      title: "Hot Picks",
    },
    {
      route: "/Recipe",
      title: "Recipes",
    },
    {
      route: "/directory",
      title: "Directory",
    },
    {
      route: "/articles",
      title: "Articles",
    },
    {
      route: "/help",
      title: "Help",
    },
  ];

    const isAuth = useSelector((store)=> store.AuthReducer.isAuth)
   
  const dispatch=  useDispatch();
  
  useEffect(()=>{
   dispatch(getUser())
  },[dispatch])


  return (

  
   <div style={{position:"sticky", top:"0", zIndex:"100"}}>
      <Box w={"100%"} bg={"white"} >
        <Box w={"1100px"} bg={"white"} m={"auto"} h={"90px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>


          <Box>
            <NavLink to="/">
              <Image h={"80px"} w={"350px"} src={NavLogo} />
            </NavLink>
          </Box>
          <Box>
            <Flex gap="20px">
              <Link href="https://www.facebook.com/KindMeal.my">
                <Image
                  h={"40px"}
                  w={"40px"}
                  src="https://www.kindmeal.my/images/follow_facebook_grey.png"
                />
              </Link>
              <Link href="https://twitter.com/KindMeal">
                <Image
                  h={"40px"}
                  w={"40px"}
                  src="https://www.kindmeal.my/images/follow_twitter_grey.png"
                />
              </Link>
            </Flex>
          </Box>
          {/* login */}
          {
            (!isAuth) ? ( <Box w={"290px"}>
            <Flex justifyContent={"space-between"}>
              <NavLink to="/user/login">
                {" "}
                <Box
                  fontSize={"12px"}
                  w={"53px"}
                  h={"25px"}
                  cursor={"pointer"}
                  color={"#444444"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  Login
                </Box>
              </NavLink>
              <Box
                w={"80px"}
                h={"25px"}
                bg={"#35619f"}
                cursor={"pointer"}
                justifyContent={"center"}
                borderRadius={"5px"}
                lineHeight={"20px"}
                color={"white"}
                padding={"2px 2px 2px 2px"}
                display={"flex"}
                alignItems={"center"}
                fontSize={"12px"}
              >
                Facebook
              </Box>
              <NavLink to={"/user/login"}>
              <Box
                w={"80px"}
                h={"25px"}
                bg={"#666666"}
                cursor={"pointer"}
                justifyContent={"center"}
                borderRadius={"5px"}
                lineHeight={"20px"}
                color={"white"}
                padding={"2px 2px 2px 2px"}
                display={"flex"}
                alignItems={"center"}
                fontSize={"12px"}
              >
                Email
              </Box>
              </NavLink>
              <NavLink to="/user/register">
                <Box
                  fontSize={"12px"}
                  w={"53px"}
                  h={"25px"}
                  cursor={"pointer"}
                  border={"1px solid silver"}
                  borderBottom={"none"}
                  borderTop={"none"}
                  borderRight={"none"}
                  color={"#444444"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  Sign Up
                </Box>
              </NavLink>
            </Flex>
          </Box>) :

          <Username />
          }
         





        </Box>
      </Box>
      {/* 2nd nav */}
      <Box w={"100%"} bg={"#2bb673"} h={"40px"}>
        <Box
          w={"1100px"}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-between"}
          fontSize={"18px"}
          color={"#ffffff"}
          lineHeight={"40px"}
          alignItems={"center"}
          bg={"#2bb673"}
        >
          {navbarLinks?.map((el, index) => {
            return (
              <NavLink key={index} to={el?.route}>
                {({ isActive }) =>
                  isActive ? (
                    <Text px="5px" bg="#229760">
                      {el?.title}
                    </Text>
                  ) : (
                    <Text
                      px="5px"
                      transition="0.2s"
                      _hover={{
                        transition: "0.2s",
                        backgroundColor: "#229760",
                      }}
                    >
                      {el?.title}
                    </Text>
                  )
                }
              </NavLink>
            );
          })}
        </Box>
      </Box>

    </div>
  );
};

