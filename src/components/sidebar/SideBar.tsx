import { Box } from '@chakra-ui/react'
import React from 'react'

import Logo from './Logo'
import MenuList from './MenuList'
import SideFooter from './SideFooter'

const SideBar = () => {
  return (
    <Box
        position={"sticky"}
        top={0}
        left={0}
        width={"250px"}
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
        zIndex={10}
    >
        <Logo />

        <MenuList />

        <SideFooter />
    </Box>
  )
}

export default SideBar