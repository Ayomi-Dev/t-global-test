"use client";

import { useTaskContext } from '@/Context';
import { Priorities } from '@/datas/PriorityList';
import { Box, Button, Divider, Flex, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import { Calendar, Flag, ProfileCircle, SearchNormal, Slash, Status, Stickynote, TaskSquare } from 'iconsax-react';
import React, { useState } from 'react'
import { priorityColors } from '@/datas/PriorityList';
import { Assignees } from '@/datas/AssigneeList';

const CreateTaskModal = () => {
    const { isOpen, onClose } = useTaskContext();
    const [name, setName] = useState<string>("");
    const [ assignees, setAssignees] = useState<string[]>([]);
    const [ priority, setPriority] = useState<string>("");
    const [ description, setDescription] = useState<string>("");
    const [openPriority, setOpenPriority] = useState<boolean>(false);
    const [ openAssignees, setOpenAssignees] = useState<boolean>(false)

    const togglePriorities = () => {
        setOpenPriority(!openPriority); //toggles priorities options
        setOpenAssignees(false)
    }

    const toggleAssignees = () => {
        setOpenAssignees(!openAssignees) //toggles assigness options
        setOpenPriority(false)
    }

    const selectPriority = (priority: string) => { //sets the value of the task priority to the value of option selected
        setPriority(priority);
        setOpenPriority(false);
    }

    const clearPriority = () => { //set priority option to defualt value
        setPriority("");
        setOpenPriority(false)
    }


    const addNewTask = () => {

    }

    
  return (
   
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
          <ModalCloseButton bg={"#F6F6FA"} borderRadius={"50%"} />
          <ModalBody mt={5}>
            <FormControl display={"flex"} my={4}>
                <Input placeholder='Task Name' fontSize={"2xl"} border={"none"} _placeholder={{color:"#BAC1CC"}} outline={"none"} />
            </FormControl>

                
            <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                    <Status variant='Linear' size={15} color='#464B50' />
                    <FormLabel fontSize={"smaller"} mt={2} >Status</FormLabel>
                </Flex>
                <HStack gap={1} bg={"#CFB7E8"} borderRadius={"6px"} px={2} py={1}>
                    <TaskSquare size={15} variant={'Bold' } color={ "#ffff"}  />
                    <Text fontStyle={"semibold"} fontWeight={600} color={'#ffffff'} px={2} fontSize={"12px"} >
                        To Do
                    </Text>
                </HStack>
            </FormControl>

            <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                    <Calendar variant='Linear' size={15} color='#464B50' />
                    <FormLabel fontSize={"smaller"} mt={2} >Dates</FormLabel>
                </Flex>
                <Input type='date' />
            </FormControl>
           

           <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                    <ProfileCircle variant='Linear' size={15} color='#464B50' />
                    <FormLabel fontSize={"smaller"} mt={2} >Assignees</FormLabel>
                </Flex>
                <Box pos={"relative"}>
                    <Text 
                        bg={"none"} 
                        fontWeight={500} 
                        fontSize={"1rem"} 
                        color={"#BAC1CC"} 
                        cursor={"pointer"}
                        onClick={toggleAssignees}
                    >
                        Select Assignee
                    </Text>
                    <Box 
                        border={"1px solid #CDD6E9"} 
                        w={"300px"} 
                        h={"320px"} 
                        borderRadius={"10px"} 
                        bg={"#ffffff"} 
                        py={4}
                        pos={"absolute"}
                        zIndex={5}
                        display={`${openAssignees ? 'block' : 'none'}`}
                    >
                        <Flex 
                            w={"260px"} 
                            h={"40px"} 
                            bg={"#F7F7F7"} 
                            borderRadius={"10px"}
                            border={"1px solid #EEF1F9"}
                            alignItems={"center"}
                            mx={"auto"}
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
                            <Flex 
                                key={user.id} 
                                alignItems={"center"} 
                                gap={2} 
                                color={"#464B50"} 
                                ml={5} 
                                py={2}
                                cursor={"pointer"}
                            >
                                <Image src={user.image} w={"30px"} h={"30px"} borderRadius={"50%"} objectFit={"cover"} />
                                <Text fontSize={"1rem"} >{user.name}</Text>
                            </Flex>
                        ))}

                    </Box>

                </Box>
                
            </FormControl>

            <FormControl 
                display={"flex"} 
                justifyContent={"space-between"} 
                alignItems={"center"} w={"50%"} 
                my={4}
                pos={"relative"}
            >
                <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                    <Flag 
                        variant={`${priority ? "Bold" : 'Linear'}`} 
                        size={15} 
                        color={`${priority ? priorityColors[priority] : '#464B50'}`} />
                    <FormLabel fontSize={"smaller"} mt={2} >Priority</FormLabel>
                </Flex>
                <Box pos={"relative"}>
                    <Text 
                        bg={"none"} 
                        fontWeight={500} 
                        fontSize={"1rem"} 
                        color={`${priority ? "#464B50" : "#BAC1CC"}`}
                        cursor={"pointer"}
                        onClick={togglePriorities}
                    >
                        {priority ? priority : "Select Priority"}
                    </Text>
                    <Box 
                        border={"1px solid #CDD6E9"} 
                        w={"190px"} 
                        h={"250px"} 
                        borderRadius={"10px"} 
                        bg={"#ffffff"} 
                        py={4}
                        pos={"absolute"}
                        zIndex={5}
                        display={`${openPriority ? 'block' : 'none'}`}
                    >
                        {Priorities.map((priority, index) => (
                            <Flex 
                                key={index} 
                                alignItems={"center"} 
                                gap={2} 
                                color={"#464B50"} 
                                ml={5} 
                                py={1}
                                cursor={"pointer"}
                                onClick={() => selectPriority(priority.label)}
                            >
                                {priority.flag}
                                <Text fontSize={"1rem"} >{priority.label}</Text>
                            </Flex>
                        ))}

                        <Divider bg={"#CDD6E9"} mt={5} />
                        
                        <Button 
                            py={4} 
                            px={5}
                            bg={"#ffffff"}
                            display={"flex"}
                            gap={2}
                            _hover={{bg: "none"}}
                            onClick={clearPriority}
                        >
                            <Slash size={15} variant='Linear' color="#464B50" />
                            <Text fontSize={"1rem"} color="#464B50">Clear</Text>
                        </Button>

                    </Box>

                </Box>

            </FormControl>

            <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                    <Stickynote variant='Linear' size={15} color='#464B50' />
                    <FormLabel fontSize={"smaller"} mt={2} >Description</FormLabel>
                </Flex>
            </FormControl>
            <Textarea 
                bg={"#F7F7F7"} 
                placeholder='Write something or type' 
                fontFamily={"1rem"}
                onChange={(e) => setDescription(e.target.value)} 
                value={description}
            ></Textarea>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} px={3} py={2}
                bg={'#75C5C1'} borderRadius={"10px"}
            >
              Create Task
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    

  )
}

export default CreateTaskModal