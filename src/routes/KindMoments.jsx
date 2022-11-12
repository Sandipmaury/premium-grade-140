import React, { useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Flex, Slider, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import Pagination from "../Components/Pagination";
import moments from "../moments.json"

const kind = moments.kindmoments
// console.log(kind)  

const KindMoments = () => {
  const [page, setPage] = useState(0);

  return (
    <Box w={"100%"} h={"100%"}
    //  border="5px solid black" 
     >
      <Box
        p={"2%"}
        pl={"15%"}
        pr={"15%"}
        m={"auto"}
       
        h={"100%"}
        backgroundColor={"#f0f0f0"}
        //  border="5px solid red"
      >
  <Box
          pl={"8%"}
          m={"auto"}
          alignItems={"center"}
          maxW={"1100px"}
            // border="5px solid black"
        >
<Flex alignItems={"center"} gap={"26px"} flexFlow={"row"}>
            <Text
              fontSize={"26px"}
              color={"#444444"}
              fontWeight={"400"}
              fontFamily={"arial"}
            >
             
KindMoments
            </Text>
            <Text fontSize={"26px"} color={"#888888"} fontWeight={"700"}>
              
              |
            </Text>
            <Text
              fontSize={"24px"}
              color={"#888888"}
              fontWeight={"400"}
              fontFamily={"arial"}
            >
              
              Saving Lives with Yummy Photos
            </Text>
          </Flex>
          <Text
            mt={"8px"}
            mb={"8px"}
            fontSize={"15px"}
            color={"black"}
            fontWeight={"400"}
            fontFamily={"arial"}
          >
           Discover new, delicious meat-free cuisines enjoyed by other compassionate food lovers. Share your interesting KindMoments, and build your own fans and followers to encourage kind, healthy meals.
          </Text>
          <Text
            mt={"8px"}
            mb={"8px"}
            fontSize={"15px"}
            color={"black"}
            fontWeight={"400"}
            fontFamily={"arial"}
          >

          Download our mobile app to easily showcase your masterpieces and interact with food lovers.
</Text>


          <Text
            mt={"8px"}
            mb={"8px"}
            fontSize={"15px"}
            color={"black"}
            fontWeight={"400"}
            fontFamily={"arial"}
          >
           Get started sharing your tasty moments now.
          </Text>


        </Box>



      </Box>
      <Box
        h={"100%"}
        pt="4%"
        pb="5%"
        m={"auto"}
        //  border="5px solid blue"
        maxW={"1100px"}
      >
         <Box m={"20px"} p={"10px"}>
        <Pagination
          total={6}
          current={page}
          onChange={(value) => setPage(value)}
          
        />
</Box>
        <SimpleGrid
          autoFlow={"row"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={"8"}
          // border="5px solid purple"
        >
  {/* data from array */}
  {kind && kind.map((item) =>(
<Box
            borderRadius={"5%"}
            // h={"60%"}
            height={"fit-content"}
            key={item.id}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={item.authorimg}
                alt="author-image"
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{item.authorname} </Text>
                <Text>{item.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src={item.img}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
          

              <Flex
                flexFlow={"row"}
                alignItems={"center"}
                gap={"14%"}
                pt={"4%"}
              >
                <Image
                  src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg"
                  w="23px"
                  h="21px"
                  alt="heart"
                />
                <Text fontSize={"130%"}>{item.Like}</Text>
              </Flex>

              <Flex
                flexFlow={"row"}
                alignItems={"center"}
                gap={"14%"}
                pt={"4%"}
              >
                <Image
                  src="https://www.kindmeal.my/images/icon_camera_darkgrey.png"
                  w="23px"
                  h="21px"
                  alt="camera"
                />
                <Text fontSize={"130%"}>{item?.camera}</Text>
              </Flex>

              <Flex
                flexFlow={"row"}
                alignItems={"center"}
                gap={"14%"}
                pt={"4%"}
              >
                <Image
                  src="https://www.kindmeal.my/images/icon_comment_darkgrey.png"
                  w="23px"
                  h="21px"
                  alt="comment"
                />
                <Text fontSize={"130%"}>{item.Comment}</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>{item.description}</Text>
          </Box>
  ))}

</SimpleGrid>
      </Box>
    </Box>
  )                 
};

export default KindMoments;
