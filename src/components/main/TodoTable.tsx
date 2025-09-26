"use client"

import { useTaskContext } from "@/Context"
import { Assignees } from "@/datas/AssigneeList"
import { priorityConfig } from "@/datas/PriorityList"
import { Box, Button, Flex, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { ArrowDown2, ArrowLeft2, ArrowLeft3, ArrowRight2, ArrowRight3, TickCircle } from "iconsax-react"
import { FaEllipsis } from "react-icons/fa6"
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi"

const TodoTable = () => {
    const { tasks, completeTask } = useTaskContext()
  return (
   <>
      <Table variant={"simple"} border={"1px solid #CDD6E9"}  size={"md"}>
          <Thead bg={"#F7F7F7"} border={"1px solid #CDD6E9"} >
            <Tr h={'60px'} >
                <Th >Name</Th>
                <Th >Date</Th>
                <Th >Assignee</Th>
                <Th >Priority</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((task, index) => (
              <Tr key={index} color={"#464B50"} fontSize={"xs"} h={"60px"}   >
                <Td fontWeight={600}>{task.name}</Td>
                <Td color={"#464B50"} fontSize={"xs"} fontWeight={"semibold"}>
                  {task.dates.createdAt} - {` ${task.dates.completedAt}`}
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
                              alt="name"
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
                      {priorityConfig[task.priority].icon}
                      <Text  fontWeight={400}>{priorityConfig[task.priority].label}</Text>
                    </Flex>
                    <Menu>
                      <MenuButton 
                        as={Button}
                        bg={"#F7F7F7"}
                        size={"sm"}
                        borderRadius={"6px"}
                        color={"gray.500"}
                      >
                        <FaEllipsis />
                      </MenuButton>
                      <MenuList>
                        <MenuItem  bg={"none"} gap={2} onClick={() => completeTask(task.id)}>
                          <TickCircle color="green" variant="Bold" size={15} />
                          <Text fontSize={"xs"}>Mark as complete</Text>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
      </Table>
      <Flex 
        justify={"space-between"} 
        border={"1px solid #CDD6E9"}
        borderBottomLeftRadius={"10px"}
        borderBottomRightRadius={"10px"}
        px={2}
      >
        <Box
          bg={"#f7f7f7"}
          py={1}
          px={2}
          m={2}
          display={"flex"}
          alignItems={"center"}
          borderRadius={"20px"}
          gap={2}
        >
          <HiOutlineChevronDoubleLeft color="#464B50"  size={10} />
          <ArrowLeft2 color="#464B50" variant="Linear" size={10} />
          <Text bg={"#75C5C1"} w={7} h={7} display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"13px"} color={"#fff"}>1</Text>
          <Text border={"1px solid #75C5C1"} justifyContent={"center"} w={7} h={7} display={"flex"} alignItems={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"10px"} color={"#75C5C1"}>2</Text>
          <Text border={"1px solid #75C5C1"} justifyContent={"center"} w={7} h={7} display={"flex"} alignItems={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"10px"} color={"#75C5C1"}>3</Text>
          <Text border={"1px solid #75C5C1"} justifyContent={"center"} w={7} h={7} display={"flex"} alignItems={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"10px"} color={"#75C5C1"}>4</Text>
          <Text border={"1px solid #75C5C1"} justifyContent={"center"} w={7} h={7} display={"flex"} alignItems={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"10px"} color={"#75C5C1"}>5</Text>
          <Text border={"1px solid #75C5C1"} justifyContent={"center"} w={7} h={7} display={"flex"} alignItems={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"10px"} color={"#75C5C1"}>...</Text>
          <Text border={"1px solid #75C5C1"} justifyContent={"center"} w={7} h={7} display={"flex"} alignItems={"center"} borderRadius={"50%"} fontWeight={"semibold"} fontSize={"10px"} color={"#75C5C1"}>100</Text>
          <ArrowRight2 color="#464B50" variant="Linear" size={10} />
          <HiOutlineChevronDoubleRight color="#464B50" size={10} />
        </Box> 
        <HStack m={2}>
          <Text color={"#1A1C1E"} fontWeight={"semibold"} fontSize={"13px"}>
            Rows Per Page:
          </Text>
          <HStack
            border={"1px solid #75C5C1"} 
            bg={"#f7f7f7"} 
            borderRadius={"20px"}
            px={4}
            py={1}
            cursor={"pointer"}
          >
            <Text color={"#545464"} fontWeight={"semibold"} fontSize={"10px"}>
              10
            </Text>
            <ArrowDown2 variant="Linear" color="#545464" size={10} />
          </HStack>

        </HStack>
      </Flex>
   </>
  )
}

export default TodoTable