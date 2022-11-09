import React from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Flex, Spacer ,Text } from '@chakra-ui/react'
import {FaHeart } from "react-icons/fa";

const KindMoments = () => {

  return (
   <Box w={"100%"} h={"100%"}  border="5px solid black" padding={"2%"}>
       <Box  h={"100%"} p="5%" ml="8%"  mr="8%" border="5px solid blue">
       <SimpleGrid columns={{sm: 1, md:2, lg:3 }} spacing={"8"} border="5px solid purple" p="1%">

         
          <Box   borderRadius={"5%"} h={"60%"} boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
            <Flex justify={"space-between"} p={"3%"} >
         <Image src="https://www.kindmeal.my/photos/member/35/35238-s.jpg" 
         borderRadius={"50%"} w={"15%"} h={"15%"}
          alt="img-1">
         </Image>

         <Flex flexFlow={"column"}>
        <Text >CindyChang</Text>
        <Text >Nov 9th 2022</Text>
        </Flex>

        <Button colorScheme={"red"}>View</Button>
         </Flex>
         <Image src="https://www.kindmeal.my/photos/moment/24/24585-47621-m.jpg" 
          w={"100%"} h={"40%"}
          alt="img-2">
         </Image>
         
         <Flex flexFlow={"row"} pl="17%"  gap={"13%"} alignItems={"center"}>
        {/* < FaHeart opacity={"0.4"} /> 0  */}
         
        <Flex flexFlow={"row"} alignItems={"center"} gap={"14%"} pt={"4%"}>
        <Image src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg" w="23px" h="21px" alt="heart" />
        <Text fontSize={"130%"}>0</Text>
        </Flex>


        <Flex flexFlow={"row"} alignItems={"center"} gap={"14%"} pt={"4%"}>
        <Image src="https://www.kindmeal.my/images/icon_camera_darkgrey.png" w="23px" h="21px" alt="camera" />
        <Text fontSize={"130%"}>5</Text>
        </Flex>


       <Flex flexFlow={"row"} alignItems={"center"} gap={"14%"} pt={"4%"}>
        <Image src="https://www.kindmeal.my/images/icon_comment_darkgrey.png" w="23px" h="21px" alt="comment" />
        <Text fontSize={"130%"}>0</Text>
        </Flex>


         </Flex>


         
         <Text p={"3%"}>感谢朋友的邀请我出席【🧑🏻‍🍳亚洲美食天王陈鸿 x 海南乡新闻发布会✨】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非
            Raw vegan falafel balls going into the dehydrator!...</Text>


          </Box>


          {/* // 2nd box in grid  */}


          <Box   borderRadius={"5%"} h={"60%"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
            <Flex justify={"space-between"} p={"3%"} >
         <Image src="https://www.kindmeal.my/photos/member/35/35238-s.jpg" 
         borderRadius={"50%"} w={"15%"} h={"15%"}
          alt="img-1">
         </Image>

         <Flex flexFlow={"column"}>
        <Text >CindyChang</Text>
        <Text >Nov 9th 2022</Text>
        </Flex>

        <Button colorScheme={"red"}>View</Button>
         </Flex>
         {/* //Slider - image */}
         <Image className='slider' src="https://www.kindmeal.my/photos/moment/24/24585-47621-m.jpg" 
          w={"100%"} h={"40%"}
          alt="img-2">
         </Image>
         
         <Flex flexFlow={"row"} pl="17%"  gap={"13%"} alignItems={"center"}>
        {/* < FaHeart opacity={"0.4"} /> 0  */}
         
        <Flex flexFlow={"row"} alignItems={"center"} gap={"14%"} pt={"4%"}>
        <Image src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg" w="23px" h="21px" alt="heart" />
        <Text fontSize={"130%"}>0</Text>
        </Flex>


        <Flex flexFlow={"row"} alignItems={"center"} gap={"14%"} pt={"4%"}>
        <Image src="https://www.kindmeal.my/images/icon_camera_darkgrey.png" w="23px" h="21px" alt="camera" />
        <Text fontSize={"130%"}>5</Text>
        </Flex>


       <Flex flexFlow={"row"} alignItems={"center"} gap={"14%"} pt={"4%"}>
        <Image src="https://www.kindmeal.my/images/icon_comment_darkgrey.png" w="23px" h="21px" alt="comment" />
        <Text fontSize={"130%"}>0</Text>
        </Flex>


         </Flex>


         
         <Text p={"3%"}>感谢朋友的邀请我出席【🧑🏻‍🍳亚洲美食天王陈鸿 x 海南乡新闻发布会✨】 第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非
            Raw vegan falafel balls going into the dehydrator!...</Text>


          </Box>






          <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
          
        </SimpleGrid>
        
       </Box>









   </Box>
  )
}

export default KindMoments

