import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

export const LatestNews = () => {
  return (
    <div>
         <Box
            maxW={"1100px"}
            marginTop={"50px"}
            minW={"300px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            bg={"white"}
            padding={"10px"}
          >
            <Flex justifyContent={"space-between"}>
              <Box fontSize={"24px"}>
                <Link to={""}> Latest News & Videos</Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                gap={"12px"}
              >
                <Flex gap={"20px"} alignItems={"center"} marginBottom={"6px"}>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    Save Lives with Your Blog
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <a href="">News & Articles</a>
                  </Box>
                  <Box fontSize={"18px"} color={"#2184ff"} fontWeight={"600"}>
                    <a href=""> Follow Our Facebook</a>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            {/* 5images */}
            <Flex justifyContent={"space-between"}>
              <Box width={"200px"} opacity={"1"}>
                <NavLink to={"/productPage"}>
                  <Image
                    borderRadius={"4px"}
                    src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/298969854_601112454850438_5265806124209675410_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=nzSzw7XQGnMAX8O4FOs&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDiYqjrji0ruViM62MPkODSnrKacA8ZbjeDdr9qCoRrGw&oe=6370D918"
                  />
                </NavLink>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  Mama And Baby Elephant Get Stuck In & Foot Hole
                </Text>
              </Box>

              <Box width={"200px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/271582707_265022372394889_56974782009965446_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=AvnOZmUGPm4AX9yLKFO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfCyzHMh3sasm_llPjMB7k7YgA9XuVzauflyWg_KOEpihQ&oe=6370EA63"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  Watch These White Fluffy Babies Turn Into The Most Gorgeous ..
                </Text>
              </Box>

              <Box width={"200px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    w={"100%"}
                    h={"100%"}
                    borderRadius={"4px"}
                    src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/117878469_336434917736037_3866333495709289709_n.jpg?stp=dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=LJ4Mzxi0yckAX9Yttmo&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfChtJ40oLGRvxp4OQm_sVI4ZoQiV2JdSrDoB5h36b6-VQ&oe=63701905"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  Goulash & Dumplings From Speedy Bosh!
                </Text>
              </Box>

              <Box width={"200px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/289716764_300414298892410_2889986081793667301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RwwitqaIrFQAX8XdIRZ&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfBZzDctQ9tKqv6OJloZ80OjpR5TE_O-M-Xvvok4SsbRQA&oe=6370DF70"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  Best Friends At Off The Plate Sanctuary
                </Text>
              </Box>

              <Box width={"200px"} height={"200px"} opacity={"1"}>
                <Link to={""}>
                  {" "}
                  <Image
                    borderRadius={"4px"}
                    src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/291422646_573014587525199_3892685742425568101_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=pshf3n2STnkAX-cNyKG&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfD3yzl6vitP3fbEePjvuua6Lk6f-rZ5Wwvct24XQRHoOQ&oe=63701FBF"
                  />
                </Link>
                <Text color={"#888888"} textAlign={"center"} fontSize={"12px"}>
                  A Sealabration Of Ocean Pups
                </Text>
              </Box>
            </Flex>
          </Box>
    </div>
  )
}
