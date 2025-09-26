import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import Logo from './Logo'
import MenuList from './MenuList'
import SideFooter from './SideFooter'

const SideBar = () => {
  return (
    <Box display={"flex"} 
      justifyContent={"space-between"}
      flexDirection={"column"}
      as="aside"
      bg={"#ffffff"}
      borderRight={"1px solid #cdd6e9"}
      scrollBehavior={"smooth"}
      overflow={"auto"} 
      flexShrink={0}
      w={"250px"}
      h={"100vh"}
      sx={
        {
          "::-webkit-scrollbar": {width: "1px"},
          "::-webkit-scrollbar-thumb": {background: "#CBD5E0", borderRadius: "14px"}
        }
      }
      py={3}
    >
      <Flex
        direction={"column"}
        alignItems={"center"}
      >
        <Logo />

        <MenuList />

      </Flex>

        <SideFooter />
    </Box>
  )
}

export default SideBar