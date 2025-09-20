import { Box, Flex, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { TbArrowBarToLeft } from 'react-icons/tb'

const Logo = () => {
  return (
   <Flex
           justifyContent={"flex-end"} 
           gap={6}
           alignItems={"end"}
        >
            <Box
                height={"54px"}
                bg={"#fffff"}
                
            >
                <Image
                    src='/assets/Logo.png'
                    alt='logo'
                    height={"54px"}
                    width={"135px"}
                    objectFit={"cover"}
                />
            </Box>
            
            <IconButton 
                width={"30px"}
                height={"30px"}
                border={"1px solid 1.3px"}
                aria-label='collapse sidebar'
                icon={ <TbArrowBarToLeft size={20} />}
                
            />
            
        </Flex>
  )
}

export default Logo