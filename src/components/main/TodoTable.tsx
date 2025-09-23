"use client"

import { useTaskContext } from "@/Context"
import { Assignees } from "@/datas/AssigneeList"
import { Flex, HStack, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

const TodoTable = () => {
    const { tasks } = useTaskContext()
  return (
   
    <Table variant={"simple"} border={"1px solid #CDD6E9"} borderRadius={"10px"}>
        <Thead bg={"#F7F7F7"} border={"1px solid #CDD6E9"}>
            <Tr>
                <Th >Name</Th>
                <Th >Data</Th>
                <Th >Assignee</Th>
                <Th >Priority</Th>
            </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <Tr key={index} >
              <Td>{task.name}</Td>
              <Td>
                {task.dates.createdAt}
              </Td>
              <Td>
                <HStack>
                  <Flex>
                  { (task.assigneeIds.length > 2 ? task.assigneeIds.slice(0,2) : task.assigneeIds)
                    .map((id) => {
                    const matchedAssignee = Assignees.find(assignee => assignee.id === id);
                    return(
                        <Image src={matchedAssignee?.image} key={id}
                            w={"20px"} h={"20px"} 
                            borderRadius={"50%"} objectFit={"cover"} 
                            mx={-1}
                        />  
                      )
                  })}
                  </Flex>
                  <Text fontSize={"10px"} fontWeight={500} color={"#464B50"}> 
                    {task.assigneeIds.length > 2 ? "+1" : ""}
                  </Text>

                </HStack>
              </Td>
              <Td >
                <Flex justify={"space-between"}>
                  <Flex align={"center"} gap={2}>
                    {task.priority.flag}
                    <Text>{task.priority.label}</Text>
                  </Flex>
                  <Flex 
                    bg={"#F7F7F7"} 
                    w={"40px"} 
                    h={"30px"} 
                    borderRadius={"6px"}
                    align={"center"}
                    justify={"center"}
                  >
                    ...
                  </Flex>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
    </Table>
  )
}

export default TodoTable