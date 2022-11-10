import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Recipe = () => {
  return (
    

<Box w={"100%"} h={"100%"} border="5px solid black" paddingTop={"2%"}>
      <Box h={"100%"} pt="5%" pb="5%" m={"auto"} border="5px solid blue" maxW={"1100px"}>
       
       {/* //Grid for buttons */}
       <SimpleGrid   autoFlow={"row"}
          columns={{ sm: 3, md: 4, lg: 6 }}
          spacing={"8"}
          border="5px solid teal" >
            <Buttons >All catogories</Buttons>
            <Buttons>Appetizers</Buttons>
            <Buttons>Beverages</Buttons>
            <Buttons>Breakfast</Buttons>
            <Buttons>Breads</Buttons>
            <Buttons>Condiments</Buttons>

            <Buttons>Desserts</Buttons>
            <Buttons>Snacks</Buttons>
            <Buttons>Main Dishes</Buttons>
            <Buttons>Salads</Buttons>
            <Buttons>Side Dishes</Buttons>
            <Buttons>Soups</Buttons>

       </SimpleGrid>

       <Pagination total={3} current={page} 
       onChange={(value) => setPage(value)} > </Pagination>

        <SimpleGrid
       
        autoFlow={"row"}
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={"8"}
          border="5px solid purple"
        >


        </SimpleGrid>

   </Box>
   </Box>
  )
}

export default Recipe
