"use client";

import { useTaskContext } from '@/Context';
import { Priorities } from '@/datas/PriorityList';
import { Box, Button, Divider, Flex, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import {  ArrowLeft2, ArrowRight2, Calendar, Flag, ProfileCircle, SearchNormal, Slash, Status, Stickynote, TaskSquare, Timer, Timer1 } from 'iconsax-react';
import React, { FormEvent, useState } from 'react'
import { priorityColors } from '@/datas/PriorityList';
import { Assignees } from '@/datas/AssigneeList';
import { taskStatus } from '@/datas/Status';
import { Priority, TaskStatus } from '@/types';
import { formatDate, presets } from '@/datas/Dates';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";



const dateInput = React.forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
    // just a helper function to allow datepicker use chakra's input as custom input
    <Input
        readOnly
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder="dd/mm/yyyy"
        cursor={"pointer"}
        w={"200px"}
        fontSize={"14px"}
        p={0}
        px={1}
        border={"none"}
    />
));
dateInput.displayName = "DateInput"

const CreateTaskModal = () => {
    const { createTask, tasks } = useTaskContext()
    const { isOpen, onClose } = useTaskContext();
    const [name, setName] = useState<string>("");
    const [ assigneeIds, setAssigneeIds] = useState<string[]>([]);
    const [ priority, setPriority] = useState<Priority | null>(null);
    const [ description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("")
    const [openPriority, setOpenPriority] = useState<boolean>(false);
    const [openStatus, setOpenStatus] = useState<boolean>(false);
    const [ openAssignees, setOpenAssignees] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [datePanel, setDatePanel] = useState<boolean>(false)

    const togglePriorities = () => {
        setOpenPriority(!openPriority); //toggles priorities options
        setOpenAssignees(false)
    }

    const toggleDatePanel = () => {
        setDatePanel(!datePanel )
    }

    const toggleAssignees = () => {
        setOpenAssignees(!openAssignees) //toggles assigness options
        setOpenPriority(false)
    }

    const addAssignees = (id: string) => {
        setAssigneeIds(prev => 
            prev.includes(id) //if selected assignee is already selected,
             ?
            prev //leaves it
            :
            [...prev, id]  //adds selected assignee if not already in the list
        )
    }

    const selectPriority = (priority: Priority) => { //sets the value of the task priority to the value of option selected
        setPriority(priority);
        setOpenPriority(false);
    }

    const clearPriority = () => { //set priority option to defualt value
        setPriority(null);
        setOpenPriority(false)
    }

    const toggleStatus = () => {
        setOpenStatus(!openStatus)
    }

    const selectStatus = (stats: TaskStatus) => {
        setStatus(stats)
    }

    const handleCreateTask = (e: FormEvent) => {
        e.preventDefault()

        if(!name || !priority || !description || !startDate || !status) return
        
        const newTask = {
            id: Date.now().toString(),
            name,
            assigneeIds,
            priority: priority as Priority,
            status: status as TaskStatus,
            description,
            dates: {
                createdAt: formatDate(startDate) ,
                completedAt: ""
            }
        }
        createTask(newTask)

        setName("")
        setPriority(null)
        setStartDate(null);
        setDescription("");
        setAssigneeIds([]);
        setStatus("")
       
    }

    
  return (
   
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>
            <form onSubmit={handleCreateTask} >
                <ModalCloseButton bg={"#F6F6FA"} borderRadius={"50%"} />
                <ModalBody py={10}>
                    <FormControl display={"flex"} my={4}>
                        <Input 
                            placeholder='Task Name' 
                            fontSize={"2xl"} 
                            border={"none"} 
                            _placeholder={{color:"#BAC1CC"}} 
                            outline={"none"}
                            required 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>

                        
                    <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                        <Flex 
                            alignItems={"center"} 
                            gap={2} 
                            color={"#464B50"} 
                        >
                            <Status variant='Linear' size={15} color='#464B50' />
                            <FormLabel fontSize={"smaller"} mt={2} >Status</FormLabel>
                        </Flex>
                        <Box pos={"relative"}>
                            <HStack 
                                gap={1} 
                                bg={"#CFB7E8"} 
                                borderRadius={"6px"} 
                                px={2} 
                                py={1}
                                onClick={toggleStatus}
                                cursor={"pointer"}
                            >
                                <TaskSquare size={15} variant={'Bold' } color={ "#ffff"}  />
                                <Text fontStyle={"semibold"} fontWeight={600} color={'#ffffff'} px={2} fontSize={"12px"} >
                                    {status ? status : "To do"}
                                </Text>
                            </HStack>
                            <Box 
                                pos={"absolute"}
                                w={"190px"}
                                h={"152px"}
                                border={"1px solid #CDD6E9"}
                                borderRadius={"10px"}
                                bg={"#ffffff"}
                                my={2}
                                zIndex={5}
                                display={openStatus ? "block" : "none"}
                            >
                                { taskStatus.map((stat, index) => (
                                    <Flex 
                                        key={index} 
                                        alignItems={"center"} 
                                        gap={2} 
                                        color={"#464B50"} 
                                        ml={5} 
                                        py={2}
                                        cursor={"pointer"}
                                        fontSize={"14px"}
                                        onClick={() => selectStatus(stat.label as TaskStatus)}
                                    >
                                        {stat.icon}
                                        <Text fontSize={"1rem"} >{stat.label}</Text>
                                    </Flex>
                                ))}
                            </Box>

                        </Box>
                    </FormControl>

                    <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                        <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                            <Calendar variant='Linear' size={15} color='#464B50' />
                            <FormLabel fontSize={"smaller"} mt={2} >Dates</FormLabel>
                        </Flex>
                        <Box position={"relative"}>
                            <Text 
                                color={"#BAC1CC"} 
                                fontWeight={500}
                                onClick={toggleDatePanel}
                                cursor={"pointer"}
                            >
                                {startDate ? formatDate(startDate) : "00/00/0000"}
                            </Text>
                            <Flex 
                                position={"absolute"}
                                borderRadius={"10px"}
                                border={"1px solid #EEF1F9"}
                                bg={"#FFFFFF"}
                                p={4}
                                display={datePanel ? "flex" : "none"}
                                zIndex={5}
                            >
                                <Box
                                    w={'299px'}
                                    border={"1px solid #EEF1F9"}
                                    bg={"#f7f7f7"}
                                    px={4}
                                    py={3}
                                    borderRadius={"10px"}
                                >
                                    {presets.map((preset, index) =>   (
                                        <Flex
                                            key={index}
                                            justify={"space-between"}
                                            px={4}
                                            py={2}
                                            my={2}
                                            cursor={"pointer"}
                                            onClick={() => setStartDate(preset.date)}
                                            borderRadius={"6px"}
                                            bg={"#ffffff"}
                                            color={"#464B50"}
                                            fontWeight={500}
                                        >
                                            <Text>{preset.label}</Text>
                                            <Text color={"#6C7278"} fontSize={"12px"}>
                                                {preset.date.toLocaleDateString("en-GB", {weekday: "short"})}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>

                                <Flex
                                    w={"406px"}
                                    border={"1px solid #EEF1F9"}
                                    gap={2}
                                    px={2}
                                    bg={"#ffffff"}
                                    direction={'column'}
                                    justify={"space-between"}
                                    borderRadius={"10px"}
                                >
                                    <Flex 
                                        align={"center"}
                                        my={3}
                                        gap={2}
                                        px={2}
                                        py={1}
                                        bg={"#F7F7F7"}
                                        justify={"space-between"}
                                        borderRadius={"10px"}
                                        border={"1px solid #EEF1F9"}
                                    >   
                                        <HStack bg={"#ffffff"} borderRadius={"10px"} w={"50%"} p={1} >
                                            <Calendar size={15} variant='Linear' color='#7988A9' />
                                            <Text color={"#7988A9"} fontWeight={400} fontSize={"1rem"}>
                                                {startDate ? format(startDate, "dd/mm/yyyy") : "DD/MM/YYYY"}
                                            </Text>
                                        </HStack>
                                        <HStack bg={"#ffffff"} borderRadius={"10px"} w={"50%"} p={1}>
                                            <Timer1 size={15} variant='Linear' color='#7988A9' />
                                            <Text color={"#7988A9"} fontWeight={400} fontSize={"1rem"}>00:00</Text>
                                        </HStack>
                                        
                                    </Flex>

                                    <Box display="flex" alignItems="flex-end" justifyContent="center" pb={2}>
                                        <DatePicker 
                                            inline
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/mm/yyyy"
                                            customInput={React.createElement(dateInput)}
                                            popperPlacement="bottom-start"
                                            calendarClassName="chakra-datepicker"
                                            formatWeekDay={(name) => name.substring(0,3)}
                                            renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
                                                <Flex
                                                    justify="space-between"
                                                    align="center"
                                                    px={4}
                                                    py={2}
                                                    w={"100%"}
                                                    bg={"#ffffff"}
                                                >
                                                    <Button onClick={decreaseMonth} borderRadius={"50%"} px={0} >
                                                        <ArrowLeft2 size={15} variant='Linear' color='gray'/>
                                                    </Button>
                                                    <Text fontWeight="600" fontSize={"20px"}>
                                                        {monthDate.toLocaleString("default", {
                                                            month: "long",
                                                            year: "numeric",
                                                        })}
                                                    </Text>
                                                    <Button onClick={increaseMonth} borderRadius={"50%"} px={0}>
                                                        <ArrowRight2 size={15} variant='Linear' color='gray'/>
                                                    </Button>
                                                </Flex>
                                            )}
                                        />
                                    </Box> 
                                </Flex>
      

                               
                            </Flex>
                        </Box>
                    </FormControl>
                

                <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
                        <Flex alignItems={"center"} gap={2} color={"#464B50"} >
                            <ProfileCircle variant='Linear' size={15} color='#464B50' />
                            <FormLabel fontSize={"smaller"} mt={2} >Assignees</FormLabel>
                        </Flex>
                        <Box pos={"relative"}>
                            <Flex 
                                bg={"none"} 
                                fontWeight={500} 
                                fontSize={"1rem"} 
                                color={"#BAC1CC"} 
                                cursor={"pointer"}
                                onClick={toggleAssignees}
                            >
                                {
                                    assigneeIds.length > 0 ? 
                                    (
                                        assigneeIds.map((id) => {
                                            const matchedAssignee = Assignees.find(assignee => assignee.id === id);
                                            return(
                                                <Image src={matchedAssignee?.image} key={id}
                                                    w={"24px"} h={"24px"} 
                                                    borderRadius={"50%"} objectFit={"cover"} 
                                                    mx={-1}
                                                />  
                                            )
                                        })
                                    ) 
                                    : 
                                    (<Text>Selected Assignees</Text>)
                                    
                                }
                            </Flex>
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
                                        onClick={() => addAssignees(user.id)}
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
                                color={`${priority ? priorityColors[priority.label] : '#464B50'}`} />
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
                                {priority ? priority.label : "Select Priority"}
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
                                        onClick={() => selectPriority(priority)}
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
                    <Button  type='submit'
                        mr={3}  color={"#ffffff"}
                        px={3} 
                        py={2}
                        bg={'#75C5C1'} borderRadius={"10px"}
                    >
                        Create Task
                    </Button>
                    
                </ModalFooter>

            </form>
        </ModalContent>
      </Modal>
    

  )
}

export default CreateTaskModal