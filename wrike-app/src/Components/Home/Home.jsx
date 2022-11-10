import { Text, Box, Image, Heading, Stack, Input,WrapItem,Button, Grid, SimpleGrid, Flex } from '@chakra-ui/react'
import React from 'react'
import { companyLogo, dataImage } from './data'
import {HiArrowSmRight} from "react-icons/hi"
 const Home = () => {
  return (
    <SimpleGrid>
    <SimpleGrid minChildWidth="100px" spacingX={5} spacingY={10} bg="#181f38" w="100%" h="700px" m="0px" p="0px" boxSizing="border-box">
      <Box  w="90%" h="700px" m="auto" display="flex" alignItems="center" justifyContent="center">
        <Box  ml="5%" w="75%" h="500px" textAlign="left">
         <Heading mb="3%"  color="#ffffff" fontSize="50px">Remove barriers,</Heading>
         <Heading mb="3%"  color="#ffffff" fontSize="50px">find clarity,</Heading>
         <Heading mb="3%"  color="#ffffff" fontSize="50px">exceed goals</Heading>
          <Text mb="3%"  fontSize="22px" color="#ffffff">Anything is possible with the most powerful work management software at your fingertips.</Text>
          <Box mt="10%" h={"20px"} w="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Stack spacing={3}  w="100%" >
              <Input bg="white" borderRadius="10px" w="100%" p="28px" pl="20px" fontSize="18px" focusBorderColor='lime' placeholder='Enter your business email' />   
            </Stack>
            <Button fontSize="20px" bg="#08CF65" colorScheme='green' w="43%" ml="2%" h="100%" p="5% 7%" color="#ffffff">Get Started</Button>
          </Box>
        </Box >

        <Box w="90%" h="500px">
          <Image w="98%" h="570px" ml="10%" mt="5%" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=672,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png' alt='homeImage' />
        </Box>
      </Box>
       
    </SimpleGrid>
    <SimpleGrid bg="#EBF5F3"  w={"100%"} h="auto" pb="5%">
      <Box p={"5%"} w="85%" m="auto" display={"flex"} alignItems={"center"} justifyContent={"space-between"} column={7} >
        {
          companyLogo.map((img) => <Box key={img.id}><Image   src={img.img}></Image></Box>)
        }
      </Box>
      <Text mt="-40px" fontFamily= "'Anek Odia', sans-serif" fontSize={"18px"} fontWeight="400" color={"gray"} >TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</Text>
     <Box w="70%" m="auto" mt="5%" mb="5%">
      <Heading fontSize={"45px"}>Transform the way your teams work</Heading>
      <Text mt="3%" fontSize={"25px"} color={"gray"} lineHeight={"30px"}>Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</Text>
     </Box>
    <Box  m="auto" w="80%" display={"flex"} alignItems={"center"} justifyContent={'space-between'}>
      {
        dataImage.map((ele) => <Box  h="auto" bg="#ffffff"  p='25px' m="1%" key={ele.id}><Image src={ele.img}/>
          <Heading  fontSize={"25px"}  textAlign={"left"} mt="7%">{ele.title}</Heading>
          <Text fontWeight={400} lineHeight={"30px"} textAlign={"left"} mt="4%" fontSize={"20px"}>{ele.des}</Text>
          <Box color={"#0a615a"}   m="8% 0"  pl="-10px" display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Text pl="-0.5" fontSize={"20px"} ml="-48%">Learn More</Text><HiArrowSmRight/>
          </Box>
        </Box>)
      }
    </Box>
    </SimpleGrid>
    </SimpleGrid>
   
  )
}

export default Home
