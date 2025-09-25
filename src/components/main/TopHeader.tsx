"use client"

import { useTaskContext } from '@/Context';
import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { AddCircle, ArrowCircleLeft2, Calendar, Sort, ToggleOffCircle } from 'iconsax-react';
import React from 'react'

const TopHeader = () => {
    const {onOpen} =useTaskContext() //pops up the createTaskModal when called

  return (
    <Flex 
        w={"100%"}
        h={"50px"}
        justifyContent={"space-between"}
        alignItems={"center"}
    >

        <Box
            w={"436px"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            gap={3}
        >
            <IconButton aria-label='nav' 
                icon={<ArrowCircleLeft2 size={20}  variant='Linear' color={"#333"}/>}
                h={"46px"} w={"46px"} border={"1px solid #CDD6E9"} borderRadius={"50%"}
            />

            <Text
                fontWeight={700} fontSize={"30px"} fontStyle={"bold"}
            >
                Afdeling Kwaliteit
            </Text>
        </Box>

        <Box h={"100%"} display={"flex"} alignItems={"center"} gap={2}>
            <IconButton aria-label='toggle' icon={<ToggleOffCircle size={15} variant='Linear' color={"#333"} />} border="1px solid #CDD6E933" borderRadius={"10px"} bg={"#f7f7f7"} />
            <IconButton aria-label='toggle' icon={<Sort size={15} variant='Linear' color={"#333"} />} border="1px solid #CDD6E933" borderRadius={"10px"} bg={"#f7f7f7"} />
            <IconButton aria-label='toggle' icon={<Calendar size={15} variant='Linear' color={"#333"} />} border="1px solid #CDD6E933" borderRadius={"10px"} bg={"#f7f7f7"} />
            <Button bg={"#41245F"} borderRadius={"10px"} px={4} py={2}  _hover={{}} gap={2}>
                <Calendar size={15} variant='Linear' color='#fff'/>
                <Text color={"#fff"}>Export.xlsx</Text>
            </Button>
            <Button bg={"#75C5C1"} borderRadius={"10px"} px={4} py={2}  _hover={{}} color={"#fff"} gap={2}
                    onClick={onOpen}
            >
                <AddCircle size={15} variant='Linear' color="#fff"/>
                <Text>Add Task</Text>
            </Button>
        </Box>

    </Flex>
  )
}

export default TopHeader;