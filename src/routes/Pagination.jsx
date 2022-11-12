import React from 'react'
import { Box, Button, Flex, Image,Text } from "@chakra-ui/react";



function Pagination ({current,onChange,total}){
    const prev = <Button colorScheme={"green"} disabled={current === 1} onClick={()=>onChange(current -1)}> Prev  </Button>
    const next = <Button colorScheme={"green"} disabled={current === total} onClick={()=>onChange(current +1)}> Next   </Button>
  
    const pages = new Array(total).fill(0).map((a,i)=>(
    <Button color={"Blue"}
    onClick={() =>onChange(i+1)}
     disabled={current === (i+1)}>{(i+1)}</Button>
    ))

    return (
        <div>
            <Flex justifyContent={"space-between"} flexFlow={"row"}>
          
            <Box >
                <Text fontSize={"18px"} >Page : {pages }</Text>
       
            </Box>
           <Box >
              {prev}
              {next}
           
            </Box>


            </Flex>
            </div>
      )
  }

export default Pagination