import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";

export const RedButton = () => {
  return (
    <div>
         <Box
              border={"1px solid red"}
              w={"450px"}
              h={"110px"}
              margin={"auto"}
              marginTop={"70px"}
              bg={"#d41f1f"}
              borderRadius={"10px"}
              padding={"5px"}
            >
                <Box color={"white"} fontWeight={"bold"} textAlign={"center"} marginTop={"12px"} lineHeight={"40px"} fontSize={"40px"} >Join Saasa Meal Now</Box>
                <Box color={"white"} textAlign={"center"} marginTop={"12px"} lineHeight={"10px"} fontSize={"16px"} >Your tasty journey begins here</Box>
            </Box>
    </div>
  )
}
