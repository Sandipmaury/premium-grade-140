import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const Superhero = () => {
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
                <Link to={""}>Amazing Superheroes</Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                gap={"12px"}
              >
                <Flex gap={"20px"} alignItems={"center"} marginBottom={"6px"}>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    Latest Buzz
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <Link to={""}> Lifestyle Ambassadors</Link>
                  </Box>
                  <Box
                    fontSize={"18px"}
                    color={"rgb(197, 157, 95)"}
                    fontWeight={"600"}
                  >
                    <Link to={""}> Win Gifts!</Link>
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
                    src="https://www.kindmeal.my/photos/member/21/21514-m.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  YeeMunKan
                </Text>
              </Box>

              <Box width={"260px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    height={"200px"}
                    src="https://www.kindmeal.my/photos/member/25/25384-m.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  LeavesAutumn
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"4px"}
                    src="https://www.kindmeal.my/photos/member/24/24629-m.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  SokFernGoh
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    w={"100%"}
                    h={"200px"}
                    src="https://www.kindmeal.my/photos/member/41/41985-m.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  RocksontanKengLeng
                </Text>
              </Box>

              <Box width={"260px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    h={"200px"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/member/38/38866-m.jpg"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"14px"}>
                  QinShu
                </Text>
              </Box>
            </Flex>
          </Box>
    </div>
  )
}
