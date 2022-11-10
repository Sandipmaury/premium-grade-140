import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Bottom = () => {
  return (
    <div>
           <Box>
              <Flex height={"230px"} gap={"20px"}>
                <Box
                  borderRadius={"5px"}
                  border={"1px solid #d8d8d8"}
                  padding={"10px"}
                  bg={"#ffffff"}
                  alignItems={"center"}
                  w={"25%"}
                >
                  <Image
                    marginBottom={"10px"}
                    marginLeft={"15px"}
                    marginTop={"10px"}
                    h={"100px"}
                    textAlign={"center"}
                    src="https://www.kindmeal.my/images/intro_deal.png"
                  />
                  <Box fontSize={"20px"} color={"#666666"} textAlign={"center"}>
                    Get Great Deals
                  </Box>
                  <Box
                    fontSize={"14px"}
                    marginTop={"5px"}
                    color={"#888888"}
                    textAlign={"center"}
                  >
                    Show our FREE digital coupons to instantly enjoy exciting
                    deals
                  </Box>
                </Box>

                <Box
                  borderRadius={"5px"}
                  border={"1px solid #d8d8d8"}
                  padding={"10px"}
                  bg={"#ffffff"}
                  alignItems={"center"}
                  w={"25%"}
                >
                  <Image
                    marginBottom={"10px"}
                    marginLeft={"55px"}
                    marginTop={"10px"}
                    h={"100px"}
                    textAlign={"center"}
                    src="https://www.kindmeal.my/images/intro_kindmoment.png"
                  />
                  <Box fontSize={"20px"} color={"#666666"} textAlign={"center"}>
                    Share KindMoments
                  </Box>
                  <Box
                    fontSize={"14px"}
                    marginTop={"5px"}
                    color={"#888888"}
                    textAlign={"center"}
                  >
                    Spread the joy by sharing your yummy dining moments
                  </Box>
                </Box>

                <Box
                  borderRadius={"5px"}
                  border={"1px solid #d8d8d8"}
                  padding={"10px"}
                  bg={"#ffffff"}
                  alignItems={"center"}
                  w={"25%"}
                >
                  <Image
                    marginBottom={"10px"}
                    marginLeft={"25px"}
                    marginTop={"10px"}
                    h={"100px"}
                    textAlign={"center"}
                    src="https://www.kindmeal.my/images/intro_menu.png"
                  />
                  <Box fontSize={"20px"} color={"#666666"} textAlign={"center"}>
                    Discover Delicious Food
                  </Box>
                  <Box
                    fontSize={"14px"}
                    marginTop={"5px"}
                    color={"#888888"}
                    textAlign={"center"}
                  >
                    Explore the latest exquisite offerings and creative menus
                  </Box>
                </Box>

                <Box
                  borderRadius={"5px"}
                  border={"1px solid #d8d8d8"}
                  padding={"10px"}
                  bg={"#ffffff"}
                  alignItems={"center"}
                  w={"25%"}
                >
                  <Image
                    marginBottom={"10px"}
                    marginLeft={"35px"}
                    marginTop={"10px"}
                    h={"100px"}
                    textAlign={"center"}
                    src="https://www.kindmeal.my/images/intro_friends.png"
                  />
                  <Box fontSize={"20px"} color={"#666666"} textAlign={"center"}>
                    Meet Food Lovers
                  </Box>
                  <Box
                    fontSize={"14px"}
                    marginTop={"5px"}
                    color={"#888888"}
                    textAlign={"center"}
                  >
                    Make new, compassionate friends and share great food tips
                  </Box>
                </Box>
              </Flex>
            </Box>
    </div>
  )
}
