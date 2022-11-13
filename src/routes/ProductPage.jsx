import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  return (
    <div>
      <Box w={"100%"} bg={"white"}>
        <Box w={"100%"} bg={"#f0f0f0"} padding={"25px"}>
          <Box w={"1100px"} m={"auto"}>
            <Text
              fontSize={"28px"}
              color={"444444"}
              marginBottom={"10px"}
              fontWeight={"normal"}
              fontFamily={"Open Sans Condensed"}
            >
              Yummy News, Articles & Videos
            </Text>
            <Box marginBottom={"10px"} fontWeight={"400"}>
              Want to keep updated on the latest news of delicious meat-free
              meals and adorable animals? Check out this section for interesting
              daily happenings and articles that will melt your tummy (and heart
              too).
            </Box>
            <Box>
              You can also follow our{" "}
              <span style={{ color: "#2184ff" }}>Facebook Page</span> or{" "}
              <span style={{ color: "#2184ff" }}>Twitter</span> for more news
              and updates.
            </Box>
          </Box>
        </Box>

        {/* 2nd bottom */}
        <Box w={"100%"} h={"1200px"} padding={"35px"} bg={"rgb(252,252,252)"}>
          <Box w={"1100px"} m={"auto"} padding={"10px"}>
            <Flex justifyContent={"space-between"}>
              <Box
                w={"730px"}
                h={"800px"}
                padding={"20px"}
                border={"1px solid #dddddd"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                borderRadius={"5px"}
              >
                <Box>
                  <Image
                    h={"500px"}
                    w={"700px"}
                    src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/298969854_601112454850438_5265806124209675410_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=nzSzw7XQGnMAX8O4FOs&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDiYqjrji0ruViM62MPkODSnrKacA8ZbjeDdr9qCoRrGw&oe=6370D918"
                  />
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  w={"80px"}
                  m={"auto"}
                  marginTop={"5px"}
                >
                  <Link>
                    <Image
                      h={"36px"}
                      w={"36px"}
                      src="https://www.kindmeal.my/images/share_facebook.png"
                    />
                  </Link>
                  <Link>
                    <Image
                      h={"36px"}
                      w={"36px"}
                      src="https://www.kindmeal.my/images/share_twitter.png"
                    />
                  </Link>
                </Box>

                <Box padding={"20px"}>
                  <Box fontSize={"22px"} marginBottom={"6px"} color={"#444444"}>
                    Mama And Baby Elephant Get Stuck In 7 Foot Hole
                  </Box>
                  <Text marginBottom={"25px"} color={"#999999"}>
                    by KindMeal.my, 10 November 2022
                  </Text>
                  <Box marginBottom={"30px"}>
                    Mama elephant gets CPR and comes back to life to reunite
                    with her baby. ❤
                  </Box>
                  <Box
                    bg={"#f53838"}
                    justifyContent={"center"}
                    h={"45px"}
                    borderRadius={"5px"}
                    display={"flex"}
                    alignItems={"center"}
                    w={"180px"}
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    color={"#ffffff"}
                  >
                    « Back To Articles
                  </Box>
                </Box>
              </Box>

              {/* 2nd grid */}
              <Box
                w={"280px"}
                h={"1100px"}
                padding={"10px"}
                border={"1px solid #dddddd"}
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                borderRadius={"5px"}
              >
                <Text fontSize={"20px"} color={"#333333"} textAlign={"center"}>
                  More Yummy Articles
                </Text>
                <Box
                  w={"200px"}
                  m={"auto"}
                  h={"200px"}
                  borderRadius={"5px"}
                  marginTop={"15px"}
                  border={"1px solid gray"}
                >
                  <Image
                    h={"100%"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/article/20/20241-l.jpg"
                  />
                </Box>
                <Text
                  fontSize={"15px"}
                  lineHeight={"20px"}
                  textAlign={"center"}
                  fontWeight={"500"}
                  color={"#666666"}
                >
                  Don't cave to desperate dairy. There is still time..
                </Text>

                <Box
                  w={"200px"}
                  m={"auto"}
                  h={"200px"}
                  borderRadius={"5px"}
                  marginTop={"20px"}
                  border={"1px solid gray"}
                >
                  <Image
                    h={"100%"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/article/20/20240-l.jpg"
                  />
                </Box>
                <Text
                  fontSize={"15px"}
                  lineHeight={"20px"}
                  textAlign={"center"}
                  fontWeight={"500"}
                  color={"#666666"}
                >
                  Egyptian Goose Vs. Leopard
                </Text>

                <Box
                  w={"200px"}
                  m={"auto"}
                  h={"200px"}
                  borderRadius={"5px"}
                  marginTop={"20px"}
                  border={"1px solid gray"}
                >
                  <Image
                    h={"100%"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/article/20/20235-l.jpg"
                  />
                </Box>
                <Text
                  fontSize={"15px"}
                  lineHeight={"20px"}
                  textAlign={"center"}
                  fontWeight={"500"}
                  color={"#666666"}
                >
                  Jane Goodall: The 100 Most Influential People Of 2..
                </Text>

                <Box
                  w={"200px"}
                  m={"auto"}
                  h={"200px"}
                  borderRadius={"5px"}
                  marginTop={"20px"}
                  border={"1px solid gray"}
                >
                  <Image
                    h={"100%"}
                    w={"100%"}
                    src="https://www.kindmeal.my/photos/article/20/20239-l.jpg"
                  />
                </Box>
                <Text
                  fontSize={"15px"}
                  lineHeight={"20px"}
                  textAlign={"center"}
                  fontWeight={"500"}
                  color={"#666666"}
                >
                  Almond Milk Growth Brings Change For Suppliers - B..
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
