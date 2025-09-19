"use client"

import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react';



const Providers = ( {children} : { children: ReactNode}) => {

  return ( 
    <>
        <ChakraProvider>
            { children }
        </ChakraProvider> 
    </>
    
  )
}

export default Providers