import React from 'react'
import { Box, Button, Flex, Image,Text } from "@chakra-ui/react";



function Pagination ({current,onChange,total}){
    const prev = <Button disabled={current === 1} onClick={()=>onChange(current -1)}> Prev  </Button>
    const next = <Button disabled={current === total} onClick={()=>onChange(current +1)}> Next   </Button>
  
    const pages = new Array (total).fill(0).map((a,i)=>{
    (<Button 
    onClick={() =>onChange(i+1)}
     disabled={current === (i+1)}>(i+1)</Button>)
})

    return (
        <div>
            <Flex flexFlow={"row"} gap={"20px"}>
            {prev}
            <Box>
                <Text fontSize={"20px"} font>Page :</Text>
            </Box>
            {pages}
            {next}
            </Flex>
            </div>
      )
  }

export default Pagination