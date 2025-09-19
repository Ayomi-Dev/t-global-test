import { Flex } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
  return (
    <Flex
      as={"nav"}
      bg={"#ffffff"}
      color={"white"}
      justifyContent={"space-between"}
      height={"90px"}
      shadow={"sm"}
    >
      <div>Logo</div>
      <div>Links</div>
    </Flex>
  )
}

export default NavBar