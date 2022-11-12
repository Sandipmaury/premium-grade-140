import React, { useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Flex, Slider, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import Pagination from "../Components/Pagination";


const KindMoments = () => {
  const [page,setPage] = useState(0)
  const meal = {
    imagePerson: "https://www.kindmeal.my/photos/member/22/22038-s.jpg",
    name: "JasonFong",
    date: "20th Oct 2022",
    imageUrl: "https://www.kindmeal.my/photos/moment/24/24560-47541-m.jpg",
    imageAlt: "recipe",
    title:
      "🥗Hey folks! Today’s salad. Having a salad today as I know I’m gonna have a unique salad  🤭...",
    heart: 3,
    camera: 4,
  };




  return (
    <Box w={"100%"} h={"100%"} border="5px solid black" paddingTop={"2%"}>
      <Box h={"100%"} pt="5%" pb="5%" m={"auto"} border="5px solid blue" maxW={"1100px"}>
       
       <Pagination total={3} current={page} 
       onChange={(value) => setPage(value)} />

        <SimpleGrid
       
        autoFlow={"row"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={"8"}
          border="5px solid purple"
        >
          {/* <Box
            borderRadius={"5%"}
            h={"65%"}  
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          > */}
           <div style={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"5%",
            display:"block",  height: "fit-content", overflow:"auto"}}> 
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src="https://www.kindmeal.my/photos/member/35/35238-s.jpg"
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
                alt="img-1"
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>CindyChang</Text>
                <Text>Nov 9th 2022</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
          
            <Image
              src="https://www.kindmeal.my/photos/moment/24/24550-47505-m.jpg"
              w={"100%"}  h={250}
              alt="img-2"
            ></Image>
            
           

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>0</Text>
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
                <Text fontSize={"130%"}>5</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
              感谢朋友的邀请我出席【🧑🏻‍🍳亚洲美食天王陈鸿 x 海南乡新闻发布会✨】
              第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非 ...
            </Text>
            </div>
          {/* </Box> */}

          {/* // 2nd box in grid  */}

          <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src="https://www.kindmeal.my/photos/member/11/11542-s.jpg"
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
                alt="img-1"
              ></Image>

              <Flex flexFlow={"column"}>
                <Text> TaiSiewLee</Text>
                <Text>Nov 7th 2022</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src="https://www.kindmeal.my/photos/moment/24/24580-47604-m.jpg"
              w={"100%"}
              h={250}
             
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>0</Text>
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
                <Text fontSize={"130%"}>5</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
              今天和朋友有約在這一起吃個晚餐。有些食物會員也有優惠哦。還是一樣popcorn好吃叻😋...
            </Text>
          </Box>

          {/* // 3rd box */}

          <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={meal.imagePerson}
                alt={meal.imageAlt}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{meal.name} </Text>
                <Text>{meal.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src={meal.imageUrl}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>{meal.heart}</Text>
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
                <Text fontSize={"130%"}>{meal.camera}</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
             {meal.title}
            </Text>
          </Box>
       {/* 4ht div */}
       <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={meal.imagePerson}
                alt={meal.imageAlt}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{meal.name} </Text>
                <Text>{meal.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src={meal.imageUrl}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>{meal.heart}</Text>
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
                <Text fontSize={"130%"}>{meal.camera}</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
             {meal.title}
            </Text>
          </Box>

    {/* 5th div  */}

      <div style={{boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"5%",
            display:"block",  height: "fit-content", overflow:"auto"}}> 
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src="https://www.kindmeal.my/photos/member/35/35238-s.jpg"
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
                alt="img-1"
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>CindyChang</Text>
                <Text>Nov 9th 2022</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
          
            <Image
              src="https://www.kindmeal.my/photos/moment/24/24550-47505-m.jpg"
              w={"100%"}  h={250}
              alt="img-2"
            ></Image>
            
           

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>0</Text>
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
                <Text fontSize={"130%"}>5</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
              感谢朋友的邀请我出席【🧑🏻‍🍳亚洲美食天王陈鸿 x 海南乡新闻发布会✨】
              第一次踏足位于蒲种的海南乡旗舰店，人潮满满，非 ...
            </Text>
            </div>
          {/* </Box> */}

          {/* // 6td box in grid  */}

          <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src="https://www.kindmeal.my/photos/member/11/11542-s.jpg"
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
                alt="img-1"
              ></Image>

              <Flex flexFlow={"column"}>
                <Text> TaiSiewLee</Text>
                <Text>Nov 7th 2022</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src="https://www.kindmeal.my/photos/moment/24/24580-47604-m.jpg"
              w={"100%"}
              h={250}
             
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>0</Text>
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
                <Text fontSize={"130%"}>5</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
              今天和朋友有約在這一起吃個晚餐。有些食物會員也有優惠哦。還是一樣popcorn好吃叻😋...
            </Text>
          </Box>


          
            <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={meal.imagePerson}
                alt={meal.imageAlt}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{meal.name} </Text>
                <Text>{meal.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src={meal.imageUrl}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>{meal.heart}</Text>
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
                <Text fontSize={"130%"}>{meal.camera}</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
             {meal.title}
            </Text>
          </Box>
     
       <Box
            borderRadius={"5%"}
            
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={meal.imagePerson}
                alt={meal.imageAlt}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{meal.name} </Text>
                <Text>{meal.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
           
            <Image
            
              src={meal.imageUrl}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>{meal.heart}</Text>
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
                <Text fontSize={"130%"}>{meal.camera}</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
             {meal.title}
            </Text>
          </Box>


          <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={meal.imagePerson}
                alt={meal.imageAlt}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{meal.name} </Text>
                <Text>{meal.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src={meal.imageUrl}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>{meal.heart}</Text>
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
                <Text fontSize={"130%"}>{meal.camera}</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
             {meal.title}
            </Text>
          </Box>
       {/* 4ht div */}
       <Box
            borderRadius={"5%"}
            // h={"60%"}
            height= {"fit-content"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          >
            <Flex justify={"space-between"} p={"3%"}>
              <Image
                src={meal.imagePerson}
                alt={meal.imageAlt}
                borderRadius={"50%"}
                w={"15%"}
                h={"15%"}
              ></Image>

              <Flex flexFlow={"column"}>
                <Text>{meal.name} </Text>
                <Text>{meal.date}</Text>
              </Flex>

              <Button colorScheme={"red"}>View</Button>
            </Flex>
            {/* //Slider - image */}
            <Image
              className="slider"
              src={meal.imageUrl}
              w={"100%"}
              h={250}
              alt="img-2"
            ></Image>

            <Flex flexFlow={"row"} pl="17%" gap={"13%"} alignItems={"center"}>
              {/* < FaHeart opacity={"0.4"} /> 0  */}

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
                <Text fontSize={"130%"}>{meal.heart}</Text>
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
                <Text fontSize={"130%"}>{meal.camera}</Text>
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
                <Text fontSize={"130%"}>0</Text>
              </Flex>
            </Flex>

            <Text p={"3%"}>
             {meal.title}
            </Text>
          </Box>


        
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default KindMoments;
