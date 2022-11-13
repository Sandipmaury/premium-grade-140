import { Box,Image,Menu ,MenuButton , MenuList, MenuItem , Button} from '@chakra-ui/react'
import React, { useEffect }  from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { userLogOut } from '../redux/AuthReducer/actions'

export const Username = () => {
  const user = useSelector((store)=>store.AuthReducer.userDetails);
   const dispatch = useDispatch();
   
    const handleLogout=()=>{
       dispatch(userLogOut());
}


  return (
    <div>
        <Box gap={"20px"} h={"25px"} display={"flex"} justifyContent={"space-between"}>
          
          <Box>
            <Image src="https://www.kindmeal.my/images/icon_notice.png" />
          </Box>

          <Box h={"25px"}  alignItems={"center"} gap={"10px"} display={"flex"}>
      
            {/* login */}
            <Box>
            <Menu>
        <MenuButton bg={"white"} fontSize={"14px"} as={Button} rightIcon={<FaChevronDown />}>
          {user?.username}
        </MenuButton>
        <MenuList>
            <MenuItem>My Coupons</MenuItem>
            <MenuItem>My Recipes</MenuItem>
            <MenuItem>Update Profile</MenuItem>
            <MenuItem>Account Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
        </Menu>
            </Box>

            <Box>
                <Image src="https://www.kindmeal.my/images/no_photo_header.png" />
            </Box>
            
          </Box>


        </Box>
    </div>
  )
}
