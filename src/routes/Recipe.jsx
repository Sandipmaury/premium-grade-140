import { color, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Box, Button, Image } from "@chakra-ui/react";
import { Flex, Slider, Text } from "@chakra-ui/react";
import Pagination from './Pagination';
import recipeData from "../recipeData.json"

const recipe = recipeData.recipes
console.log(recipe)

const Recipe = () => {
    const [page,setPage] = useState(0)
    
  return (



 <Box w={"100%"} h={"100%"} border="5px solid black" paddingTop={"2%"}>
      <Box h={"100%"} pt="5%" pb="5%" m={"auto"} border="5px solid blue" maxW={"1100px"} > 
     
    
       <SimpleGrid   autoFlow={"row"}
          columns={{ sm: 3, md: 4, lg: 6 }}
          spacing={"8"}
          border="5px solid teal" >
            <Button >All catogories</Button>
            <Button>Appetizers</Button>
            <Button>Beverages</Button>
            <Button>Breakfast</Button>  
            <Button>Breads</Button>
            <Button>Condiments</Button>

            <Button>Desserts</Button>
            <Button>Snacks</Button>
            <Button>Main Dishes</Button>
            <Button>Salads</Button>
            <Button>Side Dishes</Button>
            <Button>Soups</Button>

       </SimpleGrid>

       <Pagination total={3} current={page} 
       onChange={(value) => setPage(value)} > </Pagination>

         <SimpleGrid
       
        autoFlow={"row"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={"8"}
          border="5px solid purple"
        
        > 
          

            { recipe && recipe.map((item)=>(
               
                <Box key={item.id} borderRadius={"5%"}
                h={"fit-content"}
                overflow="auto" 
               overflowX={"hidden"}
                boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>

<Flex justify={"space-between"} p={"3%"}>    
                    <Image
                src={item.logo}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
                alt="img-1"
              ></Image>
          <Text color={"grey.400"}>{item.author}</Text>
          <Button colorScheme={"red"}>View</Button>

              </Flex>


              <Image
              src={item.img}
              w={"100%"}  h={250}
              alt="img-2"
            ></Image>

          <Box><Text >{item.title}</Text></Box>

          <Flex justify={"space-evenly"} gap={"50px"} p={"10px"} >
            <Box >
            <Flex
           flexFlow={"row"}
           alignItems={"center"}
           gap={"18px"}
           pt={"4%"}>
          <Image
                  src="https://www.kindmeal.my/images/icon_time_small.png"
                  w="23px"
                  h="21px"
                  alt="time"
                />
                <Text border={"1px solid black"}>{item.time}</Text>
           </Flex>
           </Box>


<Box p={"10px"}>
    <Flex flexFlow={"row"} gap={"20px"}  alignItems={"center"}  >
           <Flex
           flexFlow={"row"}
           alignItems={"center"}
           gap={"14%"}
           pt={"4%"}>
          <Image
                  src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg"
                  w="23px"
                  h="21px"
                  alt="time"
                />
                <Text fontSize={"130%"}>{item.Like}</Text>
           </Flex>


           <Flex
           flexFlow={"row"}
           alignItems={"center"}
           gap={"14%"}
           pt={"4%"}>
          <Image
                  src="https://www.kindmeal.my/images/icon_comment_darkgrey.png"
                  w="23px"
                  h="21px"
                  alt="time"
                />
                <Text fontSize={"130%"}>{item.Comment}</Text>
           </Flex>

           </Flex>  
           </Box>
          </Flex>



                </Box>
 ) )}



         </SimpleGrid>

    </Box>
    </Box>
  )
}

export default Recipe
