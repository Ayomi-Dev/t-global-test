import { Box, Button, IconButton, Input } from '@chakra-ui/react'
import { RowHorizontal, RowVertical, SearchNormal } from 'iconsax-react'
import React from 'react'

interface TodoSearchProp{
    tableView: () => void;
    sortedView: () => void;
    view: boolean;
}

const TodoSearch = ({ tableView, sortedView, view }: TodoSearchProp) => {
  return (
    <Box display={"flex"} w={"100%"} bg={"#E9F5F7"} h={"60px"} justifyContent={"space-between"} alignItems={"center"} borderRadius={"6px"} px={3}> 
        <Box bg={"#fff"} borderRadius={"6px"} w={"300px"} h={"40px"}
            display={"flex"} alignItems={"center"} px={3}
        >
            <SearchNormal size={15} color='#333' variant='Linear' />
            <Input bg={"none"} border={"none"} outline={"none"} px={2} placeholder='Search for To-Do' color={"#292D32"} />
        </Box>

        <Box w={"82px"} h={"42px"} display={"flex"} gap={2}  bg={"#ffffff"} p={2}
            alignItems={"center"} justifyContent={"center"} borderRadius={"6px"}
        >
            <Box 
                borderRadius={"4px"} 
                p={1} bg={view ? "#75C5C1": "#fff"} 
                onClick={ sortedView}
                cursor={"pointer"}
            >
                <RowHorizontal size={20} color={view ? "#fff":'#333'} variant='Linear'/>
            </Box>

            <Box 
                borderRadius={"4px"}  
                bg={!view ? "#75C5C1": "#ffffff"} 
                p={1} onClick={tableView}
                cursor={"pointer"}
            >
                <RowVertical size={20} color={!view ? "#fff" : "#333"} variant='Linear'/>
            </Box>
        </Box>
    </Box>
  )
}

export default TodoSearch