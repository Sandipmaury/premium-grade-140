import React from 'react'
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getMoment } from '../redux/MomentReducer/moment.actions';



function Pagination1 (){
    const [searchParams,setSearchparams]=useSearchParams()
  const initialPage=searchParams.get("page")
  const [page, setPage] = useState(initialPage || 1);
 
  const dispatch=useDispatch()
  const { numberOfPages  } = useSelector((store) => store.momentReducer);

  useEffect(()=>{
    const params={ page:page,limit:6 }
    setSearchparams(params)  
    dispatch(getMoment(params))
  },[page,dispatch])


 
    
    const prev = <Button colorScheme={"green"} disabled={page === 1} onClick={()=>setPage(+page - 1)}> Prev  </Button>
    const next = <Button colorScheme={"green"} disabled={page === numberOfPages} onClick={()=>setPage(+page + 1)}> Next   </Button>
  
    const pages = new Array(numberOfPages).fill(0).map((a,i)=>(
    <Button key={i} background={"white"} color={"Blue"}
    onClick={() =>setPage(i+1)}
     disabled={page === (i+1)}>{(i+1)}</Button>
    ))

    return (
        <div>
            <Flex justifyContent={"space-between"} flexFlow={"row"}>
          
            <Box >
                <Text fontSize={"18px"} >Page : {pages }</Text>
       
            </Box>

           <Box >
              {prev}
              {" "}
              {" "}
              {next}
           
            </Box>


            </Flex>
            </div>
      )
  }

export default Pagination1