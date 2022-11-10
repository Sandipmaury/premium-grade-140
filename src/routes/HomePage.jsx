import { Flex, Box, Image ,Text} from "@chakra-ui/react";
import React from "react";
import homestyle from "./HomePage.module.css"
import Carousel from "../Components/Slider";
import Carousel1 from "../Components/Slider2";

export const HomePage = () => {
  return (
    <div className={homestyle.homediv}>
      <div style={{ display: "flex" }}>
        <Carousel />
        <Carousel1 />
      </div>
      {/* 8grid min pics */}

      <Flex
        maxW={"1100px"}
        backgroundColor={"#ffffff"}
        gap={"15px"}
        padding="15px"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
       
      >
        <Box
          width={"150px"}
          opacity="1"
          transition="1s"
          _hover={{ opacity: "0.7", transition: "1s" }}
        >
          <Image src="https://www.kindmeal.my/photos/deal/7/704-4734-m.jpg" />
        </Box>

        <Box width={"150px"}>
          <Image src="https://www.kindmeal.my/photos/deal/6/657-4063-m.jpg" />
        </Box>

        <Box width={"150px"}>
          <Image src="https://www.kindmeal.my/photos/deal/6/679-4332-m.jpg" />
        </Box>

        <Box width={"150px"}>
          <Image src="https://www.kindmeal.my/photos/deal/7/712-5119-m.jpg" />
        </Box>

        <Box width={"150px"}>
          <Image src="https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg" />
        </Box>

        <Box width={"150px"}>
          <Image src="https://www.kindmeal.my/photos/deal/7/715-5155-m.jpg" />
        </Box>

        <Box width={"150px"}>
          <Image src="https://www.kindmeal.my/photos/deal/6/628-4921-m.jpg" />
        </Box>
      </Flex>

      {/* latest news      */}
      <Box
        maxW={"1100px"}
        // border="1px solid black"
        marginTop={"20px"}
        minW={"300px"}
      >
        <Flex justifyContent={"space-between"}>
        <Box  fontSize={"24px"}>
         <a href=""> Latest News & Videos</a>
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
         <Flex border={"1px solid blue"} justifyContent={"space-between"}>
          
        <Box width={"200px"} height={"200px"} opacity={"1"} >
         <a href=""> <Image borderRadius={"4px"} src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/298969854_601112454850438_5265806124209675410_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=nzSzw7XQGnMAX8O4FOs&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDiYqjrji0ruViM62MPkODSnrKacA8ZbjeDdr9qCoRrGw&oe=6370D918" /></a> 
       <Text color={"#888888"} fontSize={"12px"} >Mama And Baby Elephant Get Stuck In & Foot Hole</Text>
        </Box>

        <Box width={"200px"} height={"200px"} opacity={"1"} >
        <a href="">  <Image borderRadius={"4px"} src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/271582707_265022372394889_56974782009965446_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=AvnOZmUGPm4AX9yLKFO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfCyzHMh3sasm_llPjMB7k7YgA9XuVzauflyWg_KOEpihQ&oe=6370EA63" /></a> 
        <Text>Watch These White Fluffy Babies Turn Into The Most Gorgeous ..</Text>
        </Box>

        
        <Box width={"200px"} height={"200px"} opacity={"1"} >
        <a href=""> <Image w={"100%"} h={"100%"} borderRadius={"4px"} src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/117878469_336434917736037_3866333495709289709_n.jpg?stp=dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=LJ4Mzxi0yckAX9Yttmo&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfChtJ40oLGRvxp4OQm_sVI4ZoQiV2JdSrDoB5h36b6-VQ&oe=63701905" /></a> 
        <Text>Goulash & Dumplings From Speedy Bosh!</Text>
        </Box>
   
        <Box width={"200px"} height={"200px"} opacity={"1"} >
        <a href=""> <Image borderRadius={"4px"} src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/289716764_300414298892410_2889986081793667301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RwwitqaIrFQAX8XdIRZ&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfBZzDctQ9tKqv6OJloZ80OjpR5TE_O-M-Xvvok4SsbRQA&oe=6370DF70" /></a> 
       <Text>Best Friends At Off The Plate Sanctuary</Text>
        </Box>


        <Box width={"200px"} height={"200px"} opacity={"1"} >
        <a href=""> <Image borderRadius={"4px"} src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/291422646_573014587525199_3892685742425568101_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=pshf3n2STnkAX-cNyKG&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfD3yzl6vitP3fbEePjvuua6Lk6f-rZ5Wwvct24XQRHoOQ&oe=63701FBF" /></a> 
        <Text>A Sealabration Of Ocean Pups</Text>
        </Box>




        </Flex>
      

      

        {/* images */}
      </Box>
    </div>
  );
};
