import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const Moments = () => {
  return (
    <div>
            <Box
            maxW={"1100px"}
            border={"1px solid #dddddd"}
            marginTop={"50px"}
            minW={"300px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            bg={"white"}
            padding={"15px"}
          >
            <Flex justifyContent={"space-between"}>
              <Box fontSize={"24px"}>
                <Link to={""}> Yummylicious Moments</Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                gap={"12px"}
              >
                <Flex gap={"20px"} alignItems={"center"} marginBottom={"6px"}>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    Secret Recipes
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <Link to={""}>Member Hot Picks </Link>
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <Link to={""}> Photo Moments</Link>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            {/* 5images */}
            <Flex justifyContent={"space-between"} gap={"15px"}>
              <Box width={"260px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    height={"200px"}
                    src="https://www.kindmeal.my/photos/moment/24/24604-47676-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"16px"}>
                  Seed Organic Farm & Wholesome Dining
                </Text>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  {" "}
                  VyVian
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    height={"200px"}
                    src="https://www.kindmeal.my/photos/moment/24/24597-47663-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"16px"}>
                  Malaysian Favorites & Ramen
                </Text>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  {" "}
                  FatJedi
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"4px"}
                    src="https://www.kindmeal.my/photos/moment/24/24596-47660-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"16px"}>
                  Malaysian Favorites & Ramen
                </Text>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  {" "}
                  WongEeLynn
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    h={"100%"}
                    src="https://www.kindmeal.my/photos/moment/24/24595-47657-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"16px"}>
                  Simple Is the Best
                </Text>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  {" "}
                  FoodLover422
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    h={"100%"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/moment/24/24594-47652-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"16px"}>
                  Seong Man Teahouse 上 文
                </Text>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  {" "}
                  YinYinBoey
                </Text>
              </Box>
            </Flex>
          </Box>
    </div>
  )
}
