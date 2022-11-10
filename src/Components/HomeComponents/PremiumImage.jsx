import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const PremiumImage = () => {
  return (
    <div>
          <Box>
              <Flex
                gap={"20px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text color={"#999999"} fontSize={"20px"}>
                  Brought to you by
                </Text>
                <Image
                  height={"50px"}
                  src="https://www.kindmeal.my/images/logo-petfinder-v2.png"
                />
              </Flex>
            </Box>
    </div>
  )
}
