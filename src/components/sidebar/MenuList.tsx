"use client"

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { SideBarData } from '@/datas/SideBarData'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'



const MenuList = () => {
    const pathname = usePathname()
   
  return (
    <Box
        width={"95%"}
        mx={"auto"}
        marginTop={"50px"}
        fontSize={"14px"}
        fontWeight={"600"}
        fontStyle={"semibold"}
        gap={4}
        py={2}
    >
        <Accordion allowToggle>
            {SideBarData.map((item, index) => 
                item.subMenu ? (
                    <AccordionItem key={index} 
                        width={"100%"}
                        border={"none"} 
                    >
                        <AccordionButton 
                            w="100%"
                            justifyContent={"space-between"}
                            fontSize={"14px"}
                            fontWeight={"600"}
                            fontStyle={"semibold"}
                            >
                            <Flex gap={2}  >
                                {item.icon}
                                {item.label}
                            </Flex>
                            <AccordionIcon  />
                        </AccordionButton >
                        

                        <AccordionPanel>
                            {item.subMenu.map((menu, menuIndex) => (
                                <Box
                                    key={menuIndex}
                                    py={2}
                                    px={7}
                                    bg={pathname === menu.path ? "#E9F5F7" : ""}
                                    color={pathname === menu.path ? "#75C5C1" : "#464B50"}
                                    
                                >
                                    <Link as={NextLink} 
                                        href={menu.path || "#"}
                                    >
                                        {menu.label}
                                    </Link>
                                </Box>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                    ) :

                    <Box 
                        key={index} 
                        px={4}
                        py={5}
                        height={"18px"}
                        bg={pathname === item.path ? "#e9f5f7" : ""}
                        color={pathname === item.path ? "#75c5c1" : "#464B50"}
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Flex
                            gap={2}
                        >
                            {item.icon}

                            <Link href={item.path} textDecoration={"none"}>
                                {item.label}
                            </Link>
                        </Flex>
                    </Box>
            
            )}


        </Accordion>

        
        
    </Box>
  )
}

export default MenuList