import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";



export const Restro = () => {
  return (
    <div >
        <Box
            w={"1100px"}
            border={"1px solid #dddddd"}
            marginTop={"50px"}
            minW={"300px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            bg={"white"}
            padding={"15px"}
          >
            <Flex justifyContent={"space-between"}>
              <Box fontSize={"24px"}>
                <Link to={""}>Discover Restaurants</Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                gap={"12px"}
              >
                <Flex gap={"20px"} alignItems={"center"} marginBottom={"6px"}>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    Vegetarian Directory
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <Link to={""}> Restaurant Menu </Link>
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <Link to={""}> Food Map</Link>
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
                    src="https://www.kindmeal.my/photos/item/0/212-2102-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  Inari Tuna Gunkan
                </Text>
              </Box>

              <Box width={"260px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    height={"200px"}
                    src="https://www.kindmeal.my/photos/item/0/552-8707-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  B4V Tofu Curry With Baguette
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"4px"}
                    src="https://www.kindmeal.my/photos/item/0/566-8393-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  Cucur Ud'ng
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    h={"200px"}
                    src="https://www.kindmeal.my/photos/item/0/433-5018-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  Maharajah Thali Set
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    h={"200px"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/item/0/131-1197-s.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  Home-Made Tiramisu
                </Text>
              </Box>
            </Flex>
          </Box>
    </div>
  )
}
