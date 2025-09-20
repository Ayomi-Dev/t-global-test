"use client"

import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';



const Providers = ( {children} : { children: ReactNode}) => {

  return ( 
    <>
        <ChakraProvider theme={theme}>
            { children }
        </ChakraProvider> 
    </>
    
  )
}

export default Providers