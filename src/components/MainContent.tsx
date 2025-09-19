import { Flex } from '@chakra-ui/react'
import React from 'react'

export const MainContent = () => {
  return (
    <Flex 
        as={"section"}
        bg={"#ffffff"}
        padding={4}
        borderRadius={10} 
        minHeight={"calc(100vh - 200px)"}
        width={"95%"}
        mx={"auto"}
        my={5}
    >
        this is content
    </Flex>
  )
}
