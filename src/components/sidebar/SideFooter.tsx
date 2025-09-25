import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex,  IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsToggle2Off } from 'react-icons/bs'

const SideFooter = () => {
  return (
    <Box
        bg={"#F7F7F7"}
        width={"190px"}
        borderRadius={"10px"}
        mx={"auto"}
        height={"90px"}
        border={"1px solid #cdd6e9"}
        py={3}
        display={"flex"}
        flexDir={"column"}
        gap={2}
    >

        <Accordion allowToggle 
            bg={"white"}
            
            width={"162px"}
            height={"30px"}
            mx={"auto"}
        >
            <AccordionItem>
                <AccordionButton justifyContent={"space-between"} alignItems={"center"}>
                    <Flex gap={2} alignItems={"center"}>
                         <Image
                            src={'/assets/flag.svg'}
                            w={"20px"}
                            h={"20px"}
                            alt='flag'
                        />
                        <Text fontSize={"12px"} fontStyle={"semibold"} >
                            English
                        </Text>
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>

                </AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Flex justifyContent={"space-between"}  bg={"white"} w={"162px"} mx={"auto"} h={"30px"} alignItems={"center"}>
            <Text fontSize={"12px"}>Dark mode</Text>
            <IconButton aria-label='toggle' icon={<BsToggle2Off size={20} />} bg={"none"}/>
        </Flex>
    </Box>
  )
}

export default SideFooter