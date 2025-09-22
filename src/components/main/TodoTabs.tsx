"use client"
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Status, TaskSquare, TickCircle } from 'iconsax-react'
import React, { useState } from 'react'

const TodoTabs = () => {
    const [activeTab, setActiveTab] = useState<string>("todo")

    const changeTab = (tab: string) => {
        setActiveTab(tab)
    }
  return (
    <Box w={"100%"} height={"60px"} bg={"#F7F7F7"} borderRadius={"6px"} fontSize={"14px"}
        display={"flex"} justifyContent={"start"} alignItems={"center"} gap={2} my={2} px={2}
    >

        <Flex w={"176px"} h={"40px"} borderRadius={"6px"} bg={`${activeTab === 'todo' ? "#CFB7E8":"#ffffff"}`} p={1}
            justifyContent={"space-between"} alignItems={"center"} cursor={"pointer"}
            onClick={() => changeTab("todo")}
        >   
            <HStack gap={1}>
                <TaskSquare size={15} variant={'Bold' } color={`${activeTab === 'todo' ? "#ffff" :'purple'}`}  />
                <Text fontStyle={"semibold"} fontWeight={600} color={`${activeTab === "todo" ?'#ffffff' : "#464B50"}`} px={2} >
                    To Do
                </Text>
            </HStack>
            <Text bg={"#F9F3FF"} p={1} fontSize={"14px"} fontWeight={500} 
                fontStyle={"medium"} color={"#464B50"} borderRadius={"6px"}
            >
                (20)
            </Text>
        </Flex>


        <Flex p={1} w={"212px"} h={"40px"} justifyContent={"space-between"} cursor={"pointer"}
            bg={`${activeTab === "progress" ? "#F6BE38" : "#ffffff"}`} borderRadius={"6px"}
            onClick={() => changeTab("progress")}
        >
            <HStack gap={1}>
                <Status size={15} variant='Bold' color={`${activeTab === "progress" ? "#ffffff" : '#F6BE38'}`} />
                <Text fontStyle={"semibold"} fontWeight={600} color={"#464B50"} px={1} >
                    In Progress
                </Text>
            </HStack>

            <Text bg={"#FBF4E4"} p={1} fontSize={"14px"} fontWeight={500} 
                fontStyle={"medium"} color={"#464B50"} borderRadius={"6px"}
            >
                (18)
            </Text>

        </Flex>

        <Flex p={1} w={"206px"} h={"40px"} justifyContent={"space-between"} cursor={"pointer"}
            bg={`${activeTab === "complete" ? "#75C5C1" :"#ffffff"}`} borderRadius={"6px"}
            onClick={() => changeTab("complete")}
        >
            <HStack gap={1}>
                <TickCircle size={15} variant='Bold' color={`${activeTab === "complete" ? "#ffffff" :"#75C5C1"}`} />
                <Text fontStyle={"semibold"} fontSize={"14px"} fontWeight={600} px={1}
                    color={`${activeTab === "complete" ? "#ffffff" : "#464B50"}`} 
                >
                    Complete
                </Text>
            </HStack>
            <Text bg={"#E9F5F7"} p={1} fontWeight={500} borderRadius={"6px"}
                fontStyle={"medium"} color={"#464B50"}
            >
                (18)
            </Text>
        </Flex>
        
    </Box>
  )
}

export default TodoTabs