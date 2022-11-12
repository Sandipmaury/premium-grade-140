import { color, SimpleGrid } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Flex, Slider, Text } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import recipeData from "../recipeData.json";
import { getRecipe } from "../redux/RecipeReducer/recipe.actions";

// const recipe = recipeData.recipes;
// console.log(recipe);

const Recipe = () => {
  const [page, setPage] = useState(1);
  const {loading , data } = useSelector(store =>store.recipeReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecipe)
  },[])

  const handleClick = () => {
   
  };

  return (
    <Box w={"100%"} 
    h={"100%"}
    //  border="5px solid black"
      paddingTop={"2%"}>
      <Box
        h={"100%"}
        pt="5%"
        pb="5%"
        m={"auto"}
        // border="5px solid blue"
        maxW={"1100px"}
      >
        <SimpleGrid
          autoFlow={"row"}
          columns={{ sm: 3, md: 4, lg: 6 }}
          spacing={"8"}
          p="20px"
          // border="5px solid teal"
        >
          <Button 
        colorScheme={"green"}
        onClick={handleClick}>All catogories</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Appetizers</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Beverages</Button>

          <Button colorScheme={"green"}
        onClick={handleClick}>Breakfast</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Breads</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Condiments</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Desserts</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Snacks</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Main Dishes</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}> Salads</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Side Dishes</Button>


          <Button colorScheme={"green"}
        onClick={handleClick}>Soups</Button>


        </SimpleGrid>

      <Box m={"20px"} p={"10px"}> 
        <Pagination
      
          total={3}
          current={page}
          onChange={(value) => setPage(value)}
        >
          {" "}
        </Pagination>
        </Box>

        <SimpleGrid
          autoFlow={"row"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={"8"}
          // border="5px solid purple"
        >
          {
          data &&
            data.map((item) => (
              <Box
                key={item.id}
                borderRadius={"5%"}
                h={"fit-content"}
                overflow="auto"
                overflowX={"hidden"}
                boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              >
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
                
                <Box >
                <Image src={item.img} w={"100%"} h={250} alt="img-2"></Image>
                </Box>

                <Box textAlign={"center"}>
                  <Text
                    alignItems={"center"}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    fontFamily={"Arial"}
                    opacity={" 0.7"}
                  >
                    {item.title}
                  </Text>
                </Box>

                <Flex gap={"90px"} p={"10px"}>
                  <Box p={"10px"}>
                    <Flex
                      flexFlow={"row"}
                      alignItems={"center"}
                      gap={"12px"}
                      pt={"4%"}
                    >
                      <Image
                        src="https://www.kindmeal.my/images/icon_time_small.png"
                        w="23px"
                        h="21px"
                        alt="time"
                      />
                      <Text>{item.time}</Text>
                    </Flex>
                  </Box>

                  <Box p={"10px"}>
                    <Flex flexFlow={"row"} gap={"20px"} alignItems={"center"}>
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
                          alt="time"
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
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Recipe;
