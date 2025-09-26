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
      borderRadius={10} 
      py={3}
      width={"100%"}  
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
