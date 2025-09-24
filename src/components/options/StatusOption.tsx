import { statusConfig } from '@/datas/Status'
import { TaskStatus } from '@/types'
import { Box, Button, Flex, FormControl, FormLabel, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { Status, TaskSquare } from 'iconsax-react'
import React from 'react'

const StatusOption = ({status, setStatus} : {status:TaskStatus | null, setStatus: (value: TaskStatus | null) => void}) => {
  return (
    <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
        <Flex 
            alignItems={"center"} 
            gap={2} 
            color={"#464B50"} 
           >
            <Status variant='Linear' size={15} color='#464B50' />
            <FormLabel fontSize={"smaller"} mt={2} >Status</FormLabel>
        </Flex>
        
            <Menu>
                <MenuButton 
                    bg={"none"} 
                    fontWeight={500} 
                    fontSize={"1rem"} 
                    color={`${status ? "#464B50" : "#BAC1CC"}`}
                    _hover={{bg: "none"}}
                >
                <HStack 
                    gap={1} 
                    bg={status ? statusConfig[status].bg : '#CFB7E8'} 
                    borderRadius={"6px"} 
                    px={2} 
                    py={2}
                    cursor={"pointer"}
                >
                    {status ? statusConfig[status].icon :<TaskSquare size={15} variant={'Bold' } color={ "#ffff"}  />}
                    <Text fontStyle={"semibold"} fontWeight={600} color={'#ffffff'} px={2} fontSize={"12px"} >
                        {status ? status : "To do"}
                    </Text>
                </HStack> 
                </MenuButton>
                <MenuList>

                    { Object.values(TaskStatus).map((option) => (
                        <MenuItem key={option} onClick={() => setStatus(option)}>
                            <Flex 
                                alignItems={"center"} 
                                gap={2} 
                                color={"#464B50"} 
                                py={2}
                                cursor={"pointer"}
                                fontSize={"14px"}
                            >
                                {statusConfig[option].icon}
                                <Text fontSize={"1rem"} >{statusConfig[option].label}</Text>
                            </Flex>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
    
       
    </FormControl>
  )
}

export default StatusOption