import { priorityConfig } from "@/datas/PriorityList"
import { PriorityLabel } from "@/types"
import { Box, Button, Divider, Flex, FormControl, FormLabel, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { Flag, Slash } from "iconsax-react"


const PriorityOption = ({selected, onChange} : { selected: PriorityLabel | null; onChange:(value: PriorityLabel | null) => void}) => {
    const clearPriority = () => { //set priority option to defualt value
        onChange(null);
    }
  return (
    <FormControl
        display={"flex"} 
        justifyContent={"space-between"} 
        alignItems={"center"} w={"50%"} 
        my={4}
        pos={"relative"}
    >
        <Flex alignItems={"center"} gap={2} color={"#464B50"} >
            <Flag 
                variant={`${selected ? "Bold" : 'Linear'}`} 
                size={15} 
                color={`${selected ? priorityConfig[selected].color : '#464B50'}`} 
            />
            <FormLabel fontSize={"smaller"} mt={2} >Priority</FormLabel>
        </Flex>
        <Menu>
            <MenuButton
                as={Button} 
                bg={"none"} 
                fontWeight={500} 
                fontSize={"1rem"} 
                color={`${selected ? "#464B50" : "#BAC1CC"}`}
                _hover={{bg: "none"}}
            >
                {selected ? priorityConfig[selected].label : "Select Priority"}
            </MenuButton>
            <MenuList 
                border={"1px solid #CDD6E9"} 
                w={"190px"} 
                borderRadius={"10px"} 
                bg={"#ffffff"} 
                py={4}
                pos={"absolute"} 
            >
                {Object.values(PriorityLabel).map((option) => (
                    <MenuItem key={option} onClick={() => onChange(option)}  >
                        <Flex 
                            key={option} 
                            alignItems={"center"} 
                            gap={2} 
                            color={"#464B50"} 
                            ml={5} 
                            py={1}
                            cursor={"pointer"}
                        >
                            {priorityConfig[option].icon}
                            <Text fontSize={"1rem"} >{option}</Text>
                        </Flex>
                    </MenuItem>
                ))}
                    <MenuItem 
                        px={5}
                        bg={"#ffffff"}
                        display={"flex"}
                        gap={2}
                        onClick={clearPriority}
                        
                    >
                        <Slash size={15} variant='Linear' color="#464B50" />
                        <Text fontSize={"1rem"} color="#464B50">Clear</Text>
                    </MenuItem>
            </MenuList>

        </Menu>

    </FormControl>
  )
}

export default PriorityOption