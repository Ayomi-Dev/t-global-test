"use client";


import { formatDate, presets } from '@/datas/Dates';
import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Text } from '@chakra-ui/react'
import { format } from 'date-fns';
import { ArrowLeft2, ArrowRight2, Calendar, Timer1 } from 'iconsax-react'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const dateInput = React.forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
    // just a helper function to allow datepicker use chakra's input as custom input
    <Input
        readOnly
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder="dd/mm/yyyy"
        cursor={"pointer"}
        w={"200px"}
        fontSize={"14px"}
        p={0}
        px={1}
        border={"none"}
    />
));
dateInput.displayName = "DateInput";




const DateOption = ({completedDate, setCompletedDate} : { completedDate: Date | null, setCompletedDate: React.Dispatch<React.SetStateAction<Date | null>>}) => {
    const [datePanel, setDatePanel] = useState<boolean>(false)

    const toggleDatePanel = () => {
        setDatePanel(!datePanel )
    }


  return (
    <FormControl display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"50%"} my={4}>
        <Flex alignItems={"center"} gap={2} color={"#464B50"} >
            <Calendar variant='Linear' size={15} color='#464B50' />
            <FormLabel fontSize={"smaller"} mt={2} >Dates</FormLabel>
        </Flex>
        <Box position={"relative"}>
            <Text
                color={"#BAC1CC"} 
                fontWeight={500}
                onClick={toggleDatePanel}
                cursor={"pointer"}
            >
                {completedDate ? formatDate(completedDate) : "00/00/0000"}
            </Text>
            <Flex 
                position={"absolute"}
                borderRadius={"10px"}
                border={"1px solid #EEF1F9"}
                bg={"#FFFFFF"}
                p={4}
                display={datePanel ? "flex" : "none"}
                zIndex={5}
            >
                <Box
                    w={'299px'}
                    border={"1px solid #EEF1F9"}
                    bg={"#f7f7f7"}
                    px={4}
                    py={3}
                    borderRadius={"10px"}
                >
                    {presets.map((preset, index) =>   (
                        <Flex
                            key={index}
                            justify={"space-between"}
                            px={4}
                            py={2}
                            my={2}
                            cursor={"pointer"}
                            onClick={() => setCompletedDate(preset.date)}
                            borderRadius={"6px"}
                            bg={"#ffffff"}
                            color={"#464B50"}
                            fontWeight={500}
                        >
                            <Text>{preset.label}</Text>
                            <Text color={"#6C7278"} fontSize={"12px"}>
                                {preset.date.toLocaleDateString("en-GB", {weekday: "short"})}
                            </Text>
                        </Flex>
                    ))}
                </Box>
                <Flex
                    w={"406px"}
                    border={"1px solid #EEF1F9"}
                    gap={2}
                    px={2}
                    bg={"#ffffff"}
                    direction={'column'}
                    justify={"space-between"}
                    borderRadius={"10px"}
                >
                    <Flex 
                        align={"center"}
                        my={3}
                        gap={2}
                        px={2}
                        py={1}
                        bg={"#F7F7F7"}
                        justify={"space-between"}
                        borderRadius={"10px"}
                        border={"1px solid #EEF1F9"}
                    >   
                        <HStack bg={"#ffffff"} borderRadius={"10px"} w={"50%"} p={1} >
                            <Calendar size={15} variant='Linear' color='#7988A9' />
                            <Text color={"#7988A9"} fontWeight={400} fontSize={"1rem"}>
                                {completedDate ? format(completedDate, "dd/mm/yyyy") : "DD/MM/YYYY"}
                            </Text>
                        </HStack>
                        <HStack bg={"#ffffff"} borderRadius={"10px"} w={"50%"} p={1}>
                            <Timer1 size={15} variant='Linear' color='#7988A9' />
                            <Text color={"#7988A9"} fontWeight={400} fontSize={"1rem"}>00:00</Text>
                        </HStack>
                        
                    </Flex>
                    <Box display="flex" alignItems="flex-end" justifyContent="center" pb={2}>
                        <DatePicker
                            inline
                            selected={completedDate}
                            onChange={(date) => setCompletedDate(date)}
                            dateFormat="dd/mm/yyyy"
                            customInput={React.createElement(dateInput)}
                            popperPlacement="bottom"
                            calendarClassName="chakra-datepicker"
                            formatWeekDay={(name) => name.substring(0,3)}
                            renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
                                <Flex
                                    justify="space-between"
                                    align="center"
                                    px={4}
                                    py={2}
                                    w={"100%"}
                                    bg={"#ffffff"}
                                >
                                    <Button onClick={decreaseMonth} borderRadius={"50%"} px={0} >
                                        <ArrowLeft2 size={15} variant='Linear' color='gray'/>
                                    </Button>
                                    <Text fontWeight="600" fontSize={"20px"}>
                                        {monthDate.toLocaleString("default", {
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </Text>
                                    <Button onClick={increaseMonth} borderRadius={"50%"} px={0}>
                                        <ArrowRight2 size={15} variant='Linear' color='gray'/>
                                    </Button>
                                </Flex>
                            )}
                        />
                    </Box> 
                </Flex>
               
            </Flex>
        </Box>
                    </FormControl>
  )
}

export default DateOption