import { Box, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import { Add, Status, TaskSquare } from 'iconsax-react'
import React from 'react'
import TaskCard from '../TaskCard'
import { useTaskContext } from '@/Context'

const SortedTasks = () => {
  const { tasks } = useTaskContext()
  return (
    <Grid
      templateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
      w={"100%"}
      gap={2}
      mt={4}    
    >
      <GridItem 
        bg={'#f7f7f7'}
        borderRadius={"6px"}
      >
        <Flex 
          px={2}
          justify={"space-between"}
          align={"center"}
          bg={"#F9F3FF"}
          h={"45px"}
          borderTopRightRadius={"6px"}
          borderTopLeftRadius={"6px"}
        >
          <Box
            gap={1}
            display={"flex"}
          >
              <HStack px={2} bg={"#fff"} borderRadius={"6px"}>
                <TaskSquare color="#F9F3FF" size={10} variant='Bold'/>
                <Text color="#464B50" fontWeight={600} fontSize={"sm"}>
                  To Do
                </Text>
              </HStack>
              <Text bg={"#fff"} borderRadius={"6px"} px={2}>
                ({tasks.filter(task => task.status === 'To Do').length})
              </Text>
          </Box>
          <Text bg={"#fff"} px={2} py={2} fontSize={"small"} borderRadius={6}>
            <Add variant='Linear' color="#464B50" size={15} />
          </Text>
        </Flex>

        {tasks
          .filter(task => task.status === "To Do")
          .map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        
        }

        <Box 
          bg={"#fff"}
          borderRadius={"6px"}
          display={'flex'}
          p={2}
          alignItems={"center"}
          gap={2}
          m={1}
          cursor={"pointer"}
        >
          <Add color='#464B50' variant='Linear' size={15} />
          <Text color={"#464B50"} fontWeight={500} fontSize={"small"} >
             Add Task
          </Text>
        </Box>
      </GridItem>


      <GridItem        
       borderRadius={"6px"}
        bg={'#f7f7f7'}
      >
        <Flex 
          px={2}
          justify={"space-between"}
          align={"center"}
          h={"45px"}
          bg={"#FBF4E4"}
          borderTopRightRadius={"6px"}
          borderTopLeftRadius={"6px"}
        >
          <Box
            gap={1}
            display={"flex"}
          >
              <HStack px={2} bg={"#fff"} borderRadius={"6px"}>
                <Status color="#F6BE38" size={10} variant='Bold'/>
                <Text color="#464B50" fontWeight={600} fontSize={"sm"}>
                  In Progress
                </Text>
              </HStack>
              <Text bg={"#fff"} borderRadius={"6px"} px={2}>
                
                ({tasks.filter(task => task.status === 'In Progress').length})
              </Text>
          </Box>
          <Text bg={"#fff"} px={2} py={2} fontSize={"small"} borderRadius={6}>
            <Add variant='Linear' color="#464B50" size={15} />
          </Text>
        </Flex>

        {tasks
          .filter(task => task.status === "In Progress")
          .map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        
        }

        <Box 
          bg={"#fff"}
          borderRadius={"6px"}
          display={'flex'}
          p={2}
          alignItems={"center"}
          gap={2}
          m={1}
          cursor={"pointer"}
        >
          <Add color='#464B50' variant='Linear' size={15} />
          <Text color={"#464B50"} fontWeight={500} fontSize={"small"} >
             Add Task
          </Text>
        </Box>
      </GridItem>



      <GridItem 
        bg={'#f7f7f7'}
       borderRadius={"6px"}
      >
        <Flex 
          px={2}
          justify={"space-between"}
          align={"center"}
          bg={"#E9F5F7"}
          h={"45px"}
          borderTopRightRadius={"6px"}
          borderTopLeftRadius={"6px"}
        >
          <Box
            gap={1}
            display={"flex"}
          >
              <HStack px={2} bg={"#fff"} borderRadius={"6px"}>
                <TaskSquare color="#75C5C1" size={10} variant='Bold'/>
                <Text color="#464B50" fontWeight={600} fontSize={"sm"}>
                  Complete
                </Text>
              </HStack>
              <Text bg={"#fff"} borderRadius={"6px"} px={2}>
                ({tasks.filter(task => task.status === 'Complete').length}) 
              </Text>
          </Box>

          <Text bg={"#fff"} px={2} py={2} fontSize={"small"} borderRadius={6}>
            <Add variant='Linear' color="#464B50" size={15} />
          </Text>
        </Flex>

        {tasks
          .filter(task => task.status === "Complete")
          .map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        
        }

        <Box 
          bg={"#fff"}
          borderRadius={"6px"}
          display={'flex'}
          p={2}
          alignItems={"center"}
          gap={2}
          m={1}
          cursor={"pointer"}
        >
          <Add color='#464B50' variant='Linear' size={15} />
          <Text color={"#464B50"} fontWeight={500} fontSize={"small"} >
             Add Task
          </Text>
        </Box>
          
      </GridItem>
    </Grid>
  )
}

export default SortedTasks