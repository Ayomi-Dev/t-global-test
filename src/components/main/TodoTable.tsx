"use client"

import { useTaskContext } from "@/Context"
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"

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

        </Tbody>
    </Table>
  )
}

export default TodoTable