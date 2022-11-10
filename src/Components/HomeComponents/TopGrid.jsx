import React from 'react'
import { Flex, Box, Image, Text } from "@chakra-ui/react";


export const TopGrid = () => {
  return (
    <div>
        
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
    </div>
  )
}
