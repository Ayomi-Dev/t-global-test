import { Assignees } from '@/datas/AssigneeList'
import { priorityConfig } from '@/datas/PriorityList'
import { Task } from '@/types'
import { Box, Card, CardBody, CardHeader, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Calendar, Flag, ProfileCircle } from 'iconsax-react'
import React from 'react'

const TaskCard = ({task} : {task : Task}) => {
  return (
    <Card
        size={"sm"}
        variant={"elevated"}
        bg={"#fff"}
        borderRadius={"10px"}
        display={"flex"}
        flexDirection={"column"}
        m={1}
    >
        <CardHeader>
            <Heading 
                color={"#464B50"}
                fontWeight={"semibold"}
                fontSize={"14px"}
            >
                {task.name}
            </Heading>
        </CardHeader>
        <CardBody >
            <HStack >
                <Calendar color='gray' variant='Linear' size={15}/>
                <Text fontSize={"small"} color={"#464B50"} fontWeight={400}>
                    {task.dates.createdAt}
                </Text>
            </HStack>
            <HStack py={2}>
                <ProfileCircle color='gray' variant='Linear' size={15}/>
                <Flex>
                    {(task.assigneeIds.length > 2 ? task.assigneeIds.slice(0,2) : task.assigneeIds) //displays not more than two assignees
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
        </CardBody>

    </Card>
  )
}

export default TaskCard