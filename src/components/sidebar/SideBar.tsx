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