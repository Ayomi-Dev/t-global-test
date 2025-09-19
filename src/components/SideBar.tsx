import { Flex } from '@chakra-ui/react'
import React from 'react'

const SideBar = () => {
  return (
    <Flex
        direction={"column"}
        height={"100vh"}
        width={"100%"}
        bg={"#ffffff"}
        borderRight={"1px solid #cdd6e9"}
    >
        this is sidebar
    </Flex>
  )
}

export default SideBar