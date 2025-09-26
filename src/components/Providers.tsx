"use client"

import React, { ReactNode } from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';



const Providers = ( {children} : { children: ReactNode}) => {

  return ( 
    <ChakraProvider theme={theme}>
          <Box 
            bg={"#f7f7f7"} 
            overflow={"hidden"} 
            h={"100vh"} 
            display={'flex'}
          >
            { children }
          </Box>
        </ChakraProvider> 
    
  )
}

export default Providers