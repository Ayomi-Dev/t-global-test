import { Assignees } from '@/datas/AssigneeList';
import { Button, Flex, FormControl, FormLabel, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { ProfileCircle, SearchNormal } from 'iconsax-react';
import React from 'react'

interface AssingneeProp{
    assigneeIds: string[];
    addAssignees: (id: string) => void
}
const AssigneeOption = ({assigneeIds, addAssignees} : AssingneeProp) => {
  return (
    <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
        <Flex alignItems={"center"} gap={2} color={"#464B50"} >
            <ProfileCircle variant='Linear' size={15} color='#464B50' />
            <FormLabel fontSize={"smaller"} mt={2} >Assignees</FormLabel>
        </Flex>
        <Menu >
            <MenuButton
                as={Flex}
                bg={"none"} 
                fontWeight={500} 
                fontSize={"1rem"} 
                color={"#BAC1CC"} 
                cursor={"pointer"}
            >
                <Button display={"flex"} bg={"none"}>

                    {
                        assigneeIds.length > 0 ? 
                        (
                            assigneeIds.map((id) => {
                                const matchedAssignee = Assignees.find(assignee => assignee.id === id);
                                return(
                                    <Image src={matchedAssignee?.image} key={id}
                                        w={"24px"} h={"24px"} 
                                        borderRadius={"50%"} objectFit={"cover"} 
                                        alt={matchedAssignee?.name}
                                    />  
                                )
                            })
                        ) 
                        : 
                        (<Text fontSize={"smaller"}>Selected Assignees</Text>)
                        
                    }
                </Button>
            </MenuButton>
            <MenuList
                border={"1px solid #CDD6E9"} 
                w={"300px"} 
                h={"320px"} 
                borderRadius={"10px"} 
                bg={"#ffffff"} 
                py={4}
                pos={"absolute"}
                zIndex={5}
            >
                <Flex 
                    h={"40px"} 
                    bg={"#F7F7F7"} 
                    borderRadius={"10px"}
                    border={"1px solid #EEF1F9"}
                    alignItems={"center"}
                    mx={3}
                    gap={1}
                    px={2}
                    my={2}
                >
                    <SearchNormal variant='Linear' size={20} color='#464B50' />
                    <Input 
                        type='text' 
                        placeholder='Search user' 
                        _placeholder={{color: "#BAC1CC", fontWeight:400, fontsize: "14px"}}
                        border={"none"}
                        px={0}
                    />
                </Flex>
                {Assignees.map((user) => (
                    <MenuItem 
                        key={user.id} 
                        alignItems={"center"} 
                        gap={2} 
                        color={"#464B50"} 
                        px={4}
                        py={2}
                        cursor={"pointer"}
                        onClick={() => addAssignees(user.id)}
                    >
                        <Image src={user.image} w={"30px"} h={"30px"} borderRadius={"50%"} objectFit={"cover"} alt={user.name}/>
                        <Text fontSize={"1rem"} >{user.name}</Text>
                    </MenuItem>
                ))}
                
            </MenuList>

        </Menu>
                        
    </FormControl>
  )
}

export default AssigneeOption