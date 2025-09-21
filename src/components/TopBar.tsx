import { Box, Flex, HStack, IconButton, Image, Input, Text } from '@chakra-ui/react'
import { CloseCircle, Link1, Notification, SearchNormal } from 'iconsax-react';
import React from 'react'
import {  FaCaretDown } from 'react-icons/fa';

const TopBar = () => {
  const imgIcons = [
    {
      src: '/assets/img1.png',
      height: '25.34px',
      width: '30px'
    },
    {
      src: '/assets/img2.png',
      height: '25px',
      width: '25px'
    },
    {
      src: '/assets/img3.png',
      height: '12.16px',
      width: '30px'
    },
    {
      src: '/assets/img4.png',
      height: '25px',
      width: '25px'
    },
  ]
  return (
    <Flex
      as={"nav"}
      color={"white"}
      justifyContent={"center"}
      w={"95%"}
      mx={"auto"}
      h={"100%"}
      alignItems={"center"}
      gap={2}
    >
      <Box 
        display={'flex'}
        bg={"#f7f7f7"}
        width={"220px"}
        h={"46px"}
        borderRadius={"10px"}
        border={"1px solid #cdd6e9"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // px={3}
      >
        <Flex>
          <IconButton aria-label='search' icon={<SearchNormal size={15} variant='Linear' color={"#464B50"} />} bg={"none"} />
          <Input placeholder='M91|' border={"none"} color={"#292D32"} />
        </Flex>
          <IconButton aria-label='close' icon={<CloseCircle size={15} variant='Linear' color={"#464B50"} />} bg={"none"}  />
      </Box>


      <Box 
        w="214px"
        h="46px"
        display={"flex"}
        gap={3}
        alignItems={"center"}
      >
        { imgIcons.map((img, index) => (

            <Box key={index}
              h={"46px"} 
              w={"46px"} 
              border={"1px solid #eef1f9"}  
              display={"flex"} 
              gap={3} 
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"10px"}
            >
              <Image src={img.src} h={img.height} w={img.width} />
            </Box>
          )
            
        )}
        
      </Box>

      <HStack
        w={"388px"}
        h={"46px"}
        borderRadius={"10px"}
        border={"1px solid #eef1f9"}
        fontSize={"14px"}
        fontWeight={700}
      >
        <Text
          p={2}
          borderRadius={"10px"}
          bg={"#41245F"}
          color={"#ffffff"}
          cursor={"pointer"}
        >
          Melding maken
        </Text>
        <Text
          p={2}
          borderRadius={"10px"}
          bg={"#75C5C1"}
          color={"#ffffff"}
          cursor={"pointer"}
        >
          VM
        </Text>
        <Text
          p={2}
          borderRadius={"10px"}
          bg={"#75C5C1"}
          color={"#ffffff"}
          cursor={"pointer"}
        >
          LMS
        </Text>
        <Text
          p={2}
          borderRadius={"10px"}
          bg={"#75C5C1"}
          color={"#ffffff"}
          cursor={"pointer"}
        >
          BHV
        </Text>
        <Text
          p={2}
          borderRadius={"10px"}
          bg={"#75C5C1"}
          color={"#ffffff"}
          cursor={"pointer"}
        >
          DataLek
        </Text>
      </HStack>

      <Box w={"46px"} h={"46px"} borderRadius={"10px"} border={"1px solid #eef1f9"} bg={"#f7f7f7"}>
        <IconButton aria-label='link' icon={<Link1 size={15} variant='Linear' color='#464B50' />} bg={"none"} />
      </Box>

      <IconButton 
        aria-label='notification'
        w={"46px"}
        h={"46px"}
        borderRadius={"50%"}
        icon={ <Notification size={15} variant='Outline' color={"#292D32"} /> }
        bg={"#F7F7F7"}
      />
      
      <Box
          w={"154px"}
          h={"46px"}
          borderRadius={"50px"}
          bg={"#F7F7F7"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"}>
            <Image 
              src='/assets/user.png'
              h={"40px"}
              w={"40px"}
              borderRadius={"50%"}
              objectFit={"cover"}
            />
            
            <Text
              fontWeight={600}
              fontSize={"14px"}
              fontStyle={"semibold"}
              color={"#1A1C1E"}
              px={2}
            >
              Hi Paul
            </Text>
          </Flex>

          <IconButton aria-label='arrow' icon={<FaCaretDown size={15} />} bg={"none"} justifySelf={"end"} />

      </Box>
    </Flex>
  )
}

export default TopBar;