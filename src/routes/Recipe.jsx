import {  SimpleGrid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Flex,  Text } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

import { getRecipe } from "../redux/RecipeReducer/recipe.actions";
import { useSearchParams } from "react-router-dom";
import { Loding } from "../Components/Loading";


const Recipe = () => {
  const [searchParams, setSearchparams] = useSearchParams("");
  const initialPage = searchParams.get("page");
  const initCat = searchParams.get("category");
  const [category, setCategory] = useState(initCat || "");
  const initTitle=searchParams.get("title")
    const [title,setTitle]=useState(initTitle||"")

  const [page, setPage] = useState(initialPage || 1);
  const { data  } = useSelector((store) => store.recipeReducer);
  const loading  =  useSelector((store) => store.recipeReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getRecipe());  
  }, []);

  function recipeFilter() {
   
    const params = {limit:6,page:page }
    if(category){
      params.category = category
    }
    if(title){
      params.title=title
    }
    setSearchparams(params)
    dispatch(getRecipe(params));
   
  }

  return (
    <Box
      w={"100%"}
      h={"100%"}
      //  border="5px solid black"
    >
      <Box
        p={"2%"}
        pl={"15%"}
        pr={"15%"}
        m={"auto"}
       
        h={"100%"}
        backgroundColor={"#f0f0f0"}
        // border="5px solid red"
      >
        <Box
          pl={"8%"}
          m={"auto"}
          alignItems={"center"}
          maxW={"1100px"}
          //  border="5px solid black"
        >
          <Flex alignItems={"center"} gap={"26px"} flexFlow={"row"}>
            <Text
              fontSize={"26px"}
              color={"#444444"}
              fontWeight={"400"}
              fontFamily={"arial"}
            >
              Food & Drinks
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
              
              Yummy Meat-Free Recipes
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
            Want to craft your own creative meat-free meals? Get inspiration
            from other food lovers, or share your own masterpieces!
          </Text>
          <Text
            mt={"8px"}
            mb={"8px"}
            fontSize={"15px"}
            color={"black"}
            fontWeight={"400"}
            fontFamily={"arial"}
          >
            Transform into a master chef now.
          </Text>

          <Flex gap={"26px"} flexFlow={"row"}>
            <Input
              background={"white"}
              variant="outline"
              width={"300px"}
              placeholder="Search Recipe"
              size="md"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Select
              name="category"
              background={"white"}
              onChange={(e) => setCategory(e.target.value)}
            
              width={"200px"}
            >
              <option value="">All Categories</option>
              <option value="Appetizers">Appetizers</option>
              <option value="Beverages">Beverages</option>
              <option value="Breakfast">Break Fast</option>
              <option value="Breads">Breads</option>
              <option value="Soup">Soup</option>
              <option value="Salad">Salad</option>
              <option value="Condiments">Condiments</option>
              <option value="Desserts">Desserts</option>
              <option value="Snacks">Snacks</option>
              <option value="Main Dishes">Main Dishes</option>
              <option value="Side Dishes">Side Dishes</option>
            </Select>

            <Button colorScheme={"red"} onClick={recipeFilter}>
              Search Recipes
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box
        h={"100%"}
        pt="2%"
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
          <Button colorScheme={"green"} >
            All catogories
          </Button>

          <Button colorScheme={"green"} >
            Appetizers
          </Button>

          <Button colorScheme={"green"} >
            Beverages
          </Button>

          <Button colorScheme={"green"} >
            Breakfast
          </Button>

          <Button colorScheme={"green"} >
            Breads
          </Button>

          <Button colorScheme={"green"} >
            Condiments
          </Button>

          <Button colorScheme={"green"} >
            Desserts
          </Button>

          <Button colorScheme={"green"} >
            Snacks
          </Button>

          <Button colorScheme={"green"} >
            Main Dishes
          </Button>

          <Button colorScheme={"green"} >
            
            Salads
          </Button>

          <Button colorScheme={"green"} >
            Side Dishes
          </Button>

          <Button colorScheme={"green"} >
            Soups
          </Button>
        </SimpleGrid>

        <Box m={"20px"} p={"10px"}>
          <Pagination
            
            current={page}
            onChange={(value) => setPage(value)}
          >
            
          </Pagination>
        </Box>

        <SimpleGrid
          autoFlow={"row"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={"8"}
          // border="5px solid purple"
        >
          {data &&
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

                <Box>
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
        <Loding isTrue={loading} />
      </Box>
    </Box>

  );
};

export default Recipe;
