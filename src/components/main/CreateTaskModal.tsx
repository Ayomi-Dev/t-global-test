"use client";

import { useTaskContext } from '@/Context';

import { Button,  Flex,  FormControl, 
        FormLabel, Input, Modal,
        ModalBody, ModalCloseButton,
        ModalContent, ModalFooter, 
        ModalOverlay,  Textarea
} from '@chakra-ui/react'
import {  Stickynote } from 'iconsax-react';
import React, { FormEvent, useState } from 'react'

import { PriorityLabel, TaskStatus } from '@/types';
import { formatDate } from '@/datas/Dates';
import "react-datepicker/dist/react-datepicker.css";
import PriorityOption from '../options/PriorityOption';
import StatusOption from '../options/StatusOption';
import AssigneeOption from '../options/AssigneeOption';
import DateOption from '../options/DateOption';



const CreateTaskModal = () => {
    const { createTask } = useTaskContext()
    const { isOpen, onClose } = useTaskContext();
    const [name, setName] = useState<string>("");
    const [ assigneeIds, setAssigneeIds] = useState<string[]>([]);
    const [ priority, setPriority] = useState<PriorityLabel | null>(null);
    const [ description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<TaskStatus | null>(null)
    const [startDate, setStartDate] = useState<Date | null>(null);
    

    const addAssignees = (id: string) => {
        setAssigneeIds(prev => 
            prev.includes(id) //if selected assignee is already selected,
             ?
            prev //leaves it
            :
            [...prev, id]  //adds selected assignee if not already in the list
        )
    }

    const handleCreateTask = (e: FormEvent) => {
        e.preventDefault()

        if(!name || !priority || !description || !startDate || !status) return
        
        const newTask = {
            id: Date.now().toString(),
            name,
            assigneeIds,
            priority,
            status,
            description,
            dates: {
                createdAt: formatDate(startDate) ,
                completedAt: ""
            }
        }
        createTask(newTask) //adds new task to task list

        setName("")
        setPriority(null)
        setStartDate(null);
        setDescription("");
        setAssigneeIds([]);
        setStatus(null)
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

                        
                    <StatusOption status = {status} setStatus = {setStatus} />

                    <DateOption startDate={startDate} setStartDate={setStartDate} />
                

                    <AssigneeOption assigneeIds={assigneeIds} addAssignees={addAssignees} />

                    <PriorityOption selected = {priority} onChange = {setPriority} />

                    <FormControl display={"flex"} justifyContent={"space-between"}  flexDirection={"column"}  my={4}>
                        <Flex alignItems={"center"} gap={2} mb={3} color={"#464B50"} >
                            <Stickynote variant='Linear' size={15} color='#464B50' />
                            <FormLabel fontSize={"smaller"} mt={2} >Description</FormLabel>
                        </Flex>
                        <Textarea 
                            bg={"#F7F7F7"} 
                            placeholder='Write something or type' 
                            fontFamily={"1rem"}
                            onChange={(e) => setDescription(e.target.value)} 
                            value={description}
                        ></Textarea>
                    </FormControl>

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