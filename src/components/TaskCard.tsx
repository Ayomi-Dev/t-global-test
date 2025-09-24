import { Assignees } from '@/datas/AssigneeList'
import { priorityConfig } from '@/datas/PriorityList'
import { Task } from '@/types'
import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Calendar, Flag, ProfileCircle } from 'iconsax-react'
import React from 'react'

const TaskCard = ({task} : {task : Task}) => {
  return (
    <Box
        bg={"#fff"}
        borderRadius={"10px"}
        display={"flex"}
        flexDirection={"column"}
        m={1}
        gap={2}
        p={2}
    >
        <Heading 
            color={"#464B50"}
            fontWeight={"semibold"}
            fontSize={"14px"}
        >
            {task.name}
        </Heading>
        <HStack>
            <Calendar color='gray' variant='Linear' size={15}/>
            <Text fontSize={"small"} color={"#464B50"} fontWeight={400}>
                {task.dates.createdAt}
            </Text>
        </HStack>
        <HStack>
            <ProfileCircle color='gray' variant='Linear' size={15}/>
            <Flex>
                {(task.assigneeIds.length > 2 ? task.assigneeIds.slice(0,2) : task.assigneeIds)
                    .map(id => {
                        const foundAssignee = Assignees.find(assignee => assignee.id === id)
                        return(
                            <Image 
                                key={id}
                                src={foundAssignee?.image} 
                                h={"20px"}
                                w={"20px"}
                                borderRadius={"50%"}
                                objectFit={"cover"}
                            />
                        )
                    })
                }

            </Flex>
            
            <Text>
                {task.assigneeIds.length > 2 ? "+1" : ""}
            </Text>
        </HStack>
        <HStack>
            {priorityConfig[task.priority].icon}
            <Text fontSize={"small"} color={"#464B50"} fontWeight={400}>
                {task.priority}
            </Text>
        </HStack>

    </Box>
  )
}

export default TaskCard