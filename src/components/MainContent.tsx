import { Box } from '@chakra-ui/react'

import React from 'react'
import TopHeader from './main/TopHeader'

export const MainContent = () => {
  return (
    <Box 
        bg={"#ffffff"}
        borderRadius={10} 
        minHeight={"calc(100vh - 200px)"}
        width={"95%"}
        mx={"auto"}
        my={5}
        p={3}
    >
        <TopHeader />
    </Box>
  )
}
