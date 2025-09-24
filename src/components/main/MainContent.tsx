"use client"
import { Box, Divider } from '@chakra-ui/react'

import React, { useState } from 'react'
import TopHeader from './TopHeader'
import TodoSearch from './TodoSearch'
import TodoTabs from './TodoTabs'
import TodoTable from './TodoTable'
import SortedTasks from './SortedTasks'

export const MainContent = () => {
  const [view, setView] = useState<boolean>(false);

  const tableView = () => { 
      setView(false)
  }
  const sortedView = () => {
    setView(true)
  }
  return (
    <Box 
        bg={"#ffffff"}
        borderRadius={10} 
        minHeight={"calc(100vh - 200px)"}
        width={"95%"}
        mx={"auto"}
        my={5}
        p={3}
    >
        <TopHeader />

        <Divider my={4} w={"100%"} border={"1px solid #CDD6E9"} borderColor={"#CDD6E9"} />

        <TodoSearch tableView = {tableView} sortedView={sortedView}view={view} />

        {!view && <TodoTabs /> }
        

        {!view && <TodoTable />   }

        {view && <SortedTasks />}
    </Box>
  )
}
