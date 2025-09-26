"use client"

import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Link } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { SideBarData } from '@/datas/SideBarData'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'



const MenuList = () => {
    const pathname = usePathname();
    const [openIndex, setOpenIndex] = useState<number | number[]>([])


    //ensures a parent menu stays collapsed by default if its child is active
    const activeIndex = useMemo(() => {
        return SideBarData.findIndex(item => 
        item.subMenu?.some(menu => menu.path === pathname)
    )
    }, [pathname]);

    useEffect(() => {
        if(activeIndex >= 0){
            setOpenIndex([activeIndex])
        }
    }, [activeIndex])
   
  return (
    <Box
        width={"95%"}
        mx={"auto"}
        marginTop={"35px"}
        fontSize={"14px"}
        fontWeight={"600"}
        fontStyle={"semibold"}
        gap={4}
        py={2}
    >
        {SideBarData.map((item, index) => 
            item.subMenu ? 
            
            (
                <Accordion allowToggle
                    index={openIndex} 
                    onChange={(idx) => setOpenIndex(idx as number | number[])}
                    key={index}
                > 
                    <AccordionItem 
                        width={"100%"}
                        border={"none"} 
                    >
                        <AccordionButton 
                            w="100%"
                            justifyContent={"space-between"}
                            fontSize={"14px"}
                            fontWeight={"600"}
                            fontStyle={"semibold"}
                            color={pathname?.startsWith(item?.path || "") ? "#464B50" : "transparent"}
                            >
                            <Flex gap={2}  >
                                {item.icon}
                                {item.label}
                            </Flex>
                            
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
                </Accordion> 
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
                    
                    <Link href={item.path || ""} display={'flex'} gap={2} >
                        {item.icon}
                        {item.label}
                    </Link>
                    
                </Box>
        )}



        
        
    </Box>
  )
}

export default MenuList