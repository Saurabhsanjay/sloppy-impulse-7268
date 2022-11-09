import { Text, Box, Image, Heading, Stack, Input,WrapItem,Button, Grid, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <SimpleGrid bg="#181f38" w="100%" h="700px" m="0px" p="0px" boxSizing="border-box">
      <Box  w="90%" h="700px" m="auto" display="flex" alignItems="center" justifyContent="center">
        <Box ml="5%" w="50%" h="500px" textAlign="left">
         <Heading mb="3%"  color="#ffffff" fontSize="50px">Remove barriers,</Heading>
         <Heading mb="3%"  color="#ffffff" fontSize="50px">find clarity,</Heading>
         <Heading mb="3%"  color="#ffffff" fontSize="50px">exceed goals</Heading>
          <Text mb="3%"  fontSize="22px" color="#ffffff">Anything is possible with the most powerful work management software at your fingertips.</Text>
          <Box  mt="10%" w="90%" display="flex" alignItems="center" justifyContent="space-between">
            <Stack spacing={3}  w="65%" >
              <Input bg="white" borderRadius="10px" w="100%" p="30px" pl="20px" fontSize="25px" focusBorderColor='lime' placeholder='Enter your business email' />   
            </Stack>
            <Button fontSize="20px" bg="#08CF65" colorScheme='green' w="33%" p="5%" color="#ffffff">Get Started</Button>
          </Box>
        </Box >

        <Box w="70%" h="500px">
          <Image w="100%" h="600px" ml="10%" mt="5%" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=672,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png' alt='homeImage' />
        </Box>
      </Box>
    </SimpleGrid>
  )
}

export default Home
