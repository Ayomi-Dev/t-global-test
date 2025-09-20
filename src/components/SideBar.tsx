import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import Logo from './sidebar/Logo'
import MenuList from './sidebar/MenuList'
import SideFooter from './sidebar/SideFooter'

const SideBar = () => {
  return (
    <Box
        position={"relative"}
        height={"100vh"}
        width={"100%"}
        bg={"#ffffff"}
        borderRight={"1px solid #cdd6e9"}
        overflowY={"auto"}
        scrollBehavior={"smooth"}
        sx={
            {
                "::-webkit-scrollbar": {width: "1px"},
                "::-webkit-scrollbar-thumb": {background: "#CBD5E0", borderRadius: "14px"}
            }
        }
        py={3}
    >
        <Logo />

        <MenuList />

        <SideFooter />
    </Box>
  )
}

export default SideBar