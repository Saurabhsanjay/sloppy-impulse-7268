import { Box, Container, Divider, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Stack spacing={50}  padding={{base:5, md:10, lg:50}} bg="#0c3245" alignItems="center" >
          <Image w="40px" src="https://cdn.iconscout.com/icon/free/png-256/wrike-226538.png"/>  
        <SimpleGrid margin="auto"  w="80%" columns={[1,2,5]} fontSize="15px" spacing={5}  >
         
         <Stack alignItems="flex-start" spacing={2}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Product</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product tour</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Pricing</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" >Templates</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Apps & Integrations</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Gantt charts</Text>

                 <Text fontWeight="thin" color="whiteAlpha.800" > Wrike Status</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Security</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > API</Text>
  
              </SimpleGrid>
              
         </Stack>

  

         <Stack alignItems="flex-start" spacing={2}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" >Solutions</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > All Teams</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" >Marketing</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Project Management</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Business Operations</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Professional Services</Text>
        </SimpleGrid>
         </Stack>

         <Stack alignItems="flex-start" spacing={2}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Resources
</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > Help Center</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Community</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Webinars</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Interactive Training</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Support</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product management 101</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product management glossary</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > </Text>
               
        </SimpleGrid>
         </Stack>
         
         <Stack alignItems="flex-start" spacing={2}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Company</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >
                 
                 <Text fontWeight="thin" color="whiteAlpha.800" > About Us</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Carrers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Privace</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Press</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Our Customers</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Events</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Newsroom</Text>
               
        </SimpleGrid>
         </Stack>

         <Stack alignItems="flex-start" spacing={2}> 
            <Text fontSize="18px" fontWeight="semibold" color="whiteAlpha.800" > Guides</Text>
            <SimpleGrid textAlign="left" direction={{base:"row" ,md:"column", }} columns={{base:"2", md:"1"}} spacing={{base:2, md:5}}   >

                 <Text fontWeight="thin" color="whiteAlpha.800" > Project Management Guide</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Kanban Guide</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Remote Work Guide</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Marketing Project Management Guide</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Go-to-Market Guide</Text>
                 <Text fontWeight="thin" color="whiteAlpha.800" > Product Management Guide</Text>
               
        </SimpleGrid>
         </Stack>
  
           
        </SimpleGrid>


        <Divider />

     


        <Stack w="full" margin="auto" direction={{base:"column", md:"column", lg:"row"}} > 
           <HStack spacing={5}>
             <Image w="40px" src="https://cdn.iconscout.com/icon/free/png-256/wrike-226538.png"/>
              <Text color="whiteAlpha.800" >©2006-2022 Wrike, Inc. All rights reserved. Patented.</Text>
           </HStack>

           <Spacer />

           <HStack spacing={5} >
            
              <Text as='u' color="whiteAlpha.800" >Privacy Policy.</Text>
              <Text  as='u' color="whiteAlpha.800" > Terms of Service</Text>
              <Text as='u' color="whiteAlpha.800" >Cookie Preferences</Text>
           </HStack>
         </Stack>

    </Stack>
  )
}

export default Footer