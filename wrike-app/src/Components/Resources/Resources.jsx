import { Box,Text,Stack,Button, SimpleGrid ,Input, Image} from '@chakra-ui/react'
import React from 'react'
import resources from "../Resources/resources.css"
const Resources = () => {
  return (
    <Box >
      <Text as="b" ml="-60%" fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Resources Library</Text>
      <br />
      <br />
 

 {/* First section */}

      <SimpleGrid ml={10} mr={10} columns={[2, 3]} spacing='20px'>
         <Box  height='80px'>
             <Image
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/ebook-25-must-know-productivity-tips.png"
             />
             <br />
             <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-350}
                letterSpacing='wide'
                color='gray'>EBOOKS</Text>
              
              <Text fontWeight='bold'
                
                mt="8px"
                fontSize='md'
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>


            <Text  fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                mt="8px"
                letterSpacing='wide'
                color='gray'>Enable a flexible workforce with our eBook guide to navigating hybrid work. Learn about the benefits and challenges of hybrid work, as well as tips and tricks for creating your own hybrid work model.</Text>
 


         </Box>


         <Box   height='80px'>
          <Image
             
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/use-case-carnival.png'
             />
             <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-340}
                letterSpacing='wide'
                color='gray'>USE CASE</Text>

             <Text fontWeight='bold'
                  mt="8px"
                fontSize='md'
                  ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>


            <Text  fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                mt="8px"
                letterSpacing='wide'
                color='gray'> Wondering how you can use Wrike in your role or industry? We’ve rounded up 24 use cases that demonstrate the power of Wrike in a range of teams, from business operations to creative production.</Text>
 
         </Box>




         <Box height='80px'>
         <Image
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/7c5778b8-697b-4b30-bb3f-ce6cc2f3ced3/resources-collaborate-2x.png'
             />
              <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-305}
                color='gray'>ONLINE EVENT</Text>
                
              <Text fontWeight='bold'
                
                fontSize='md'
                ml={-4}
                mt="8px"
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>


            <Text  fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                mt="8px"
                color='gray'> View exclusive presentations, breakout sessions, and product announcements, all available on demand at a time that suits you. Explore the next generation in work management with Wrike.</Text>
         </Box>
      </SimpleGrid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      

      {/* Second section */}

      <Stack  ml={10} mr="720px"  >
         <Input placeholder='Search' height="60px" size='lg' />
      </Stack>
       <br />
       <br />

      <SimpleGrid ml={10} mr={10} columns={[2, 3]} spacing='20px'>
         <Box  height='80px'>
             <Image
             
               borderRadius="15"
               cursor="pointer"
             src= " https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2c3be91d-f038-4445-bdd5-a938ef8aae07/resources-webinars-recycle-dark-matter-into-productivity-2x.png"
             />
             <br />
             <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-336}
                letterSpacing='wide'
                color='gray'>WEBINAR</Text>
              
              <Text fontWeight='bold'
                
                fontSize='md'
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>


           
 


         </Box>


         <Box   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src=' https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2c3be91d-f038-4445-bdd5-a938ef8aae07/resources-blog-resources-for-professional-services-teams-2x.png'
             />
             <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>

             <Text fontWeight='bold'
                
                fontSize='md'
                  ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </Box>




         <Box height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2c3be91d-f038-4445-bdd5-a938ef8aae07/resources-blog-pmo-halloween-planning-2x.png'
             />
              <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-330}
                color='gray'>BLOGPOST</Text>
                
              <Text fontWeight='bold'
                
                fontSize='md'
                ml={-4}
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </Box>
                
      </SimpleGrid>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <SimpleGrid ml={10} mr={10} columns={[2, 3]} spacing='20px'>
         <Box  height='80px'>
             <Image
              cursor="pointer"
             
               borderRadius="15"
             src= " https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/916da484-56ca-47cd-b711-08529a0e6801/resources-wrike-under-vista-2x.png"
             />
             <br />
             <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>
              
              <Text fontWeight='bold'
                
                fontSize='md'
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>


           
 


         </Box>


         <Box   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/916da484-56ca-47cd-b711-08529a0e6801/resources-up-level-your-work-management-2x.png'
             />
             <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>

             <Text fontWeight='bold'
                
                fontSize='md'
                  ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </Box>




         <Box height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/916da484-56ca-47cd-b711-08529a0e6801/resources-13-resources-to-help-pm-teams-2x.png'
             />
              <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-330}
                color='gray'>BLOGPOST</Text>
                
              <Text fontWeight='bold'
                
                fontSize='md'
                ml={-4}
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </Box>
                
      </SimpleGrid>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <SimpleGrid ml={10} mr={10} columns={[2, 3]} spacing='20px'>
         <Box  height='80px'>
             <Image
             
               borderRadius="15"
               cursor="pointer"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/7bfbddba-15c8-4063-bc05-f3f7dc929a4c/cover-how-wrike-speaks-your-teams-language-2x.png"
             />
             <br />
             <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-340}
                letterSpacing='wide'
                color='gray'>WEBINAR</Text>
              
              <Text fontWeight='bold'
                
                fontSize='md'
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>


           
 


         </Box>


         <Box   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-media-enterprise-times-2x.png'
             />
             <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-354}
                letterSpacing='wide'
                color='gray'>MEDIA</Text>

             <Text fontWeight='bold'
                
                fontSize='md'
                  ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </Box>




         <Box height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-report-remote-vs-office-2x.png'
             />
              <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-350}
                color='gray'>REPORT</Text>
                
              <Text fontWeight='bold'
                
                fontSize='md'
                ml={-4}
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </Box>
                
      </SimpleGrid>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SimpleGrid ml={10} mr={10} columns={[2, 3]} spacing='20px'>
         <Box  height='80px'>
             <Image
             
               borderRadius="15"
               cursor="pointer"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-blog-building-business-resilience-2x.png"
             />
             <br />
             <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>
              
              <Text fontWeight='bold'
                 ml={-14}
                fontSize='md'
                letterSpacing='wide'
                color='black.200'>Protect Your Organization From Uncertainty
                </Text>


           
 


         </Box>


         <Box   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e103ef5e-28d9-460e-b87f-dfe209a9fa23/resources-idg-connect-article-2x.png'
             />
             <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-355}
                letterSpacing='wide'
                color='gray'>MEDIA</Text>

             <Text fontWeight='bold'
                
                fontSize='md'
                  ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </Box>




         <Box height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/ca21cd92-525e-4d4c-8837-3c143b2aba1b/resources-marketing-kit-2x.png'
             />
              <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-305}
                color='gray'>SUCCESS KIT</Text>
                
              <Text fontWeight='bold'
                
                fontSize='md'
                // ml={-}
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </Box>
                
      </SimpleGrid>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <SimpleGrid ml={10} mr={10} fontSize={['sm', 'md', 'lg', 'xl']} columns={[2, 3]} spacing='20px'>
         <Box  height='80px'>
             <Image
              cursor="pointer"
               borderRadius="15"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-media-strategic-hires-2x.png"
             />
             <br />
             <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-350}
                letterSpacing='wide'
                color='gray'> MEDIA</Text>
              
              <Text fontWeight='bold'
                
                fontSize='md'
              
                letterSpacing='wide'
                color='black.200'>  Hires Focused On Customer Growth, New Markets
                </Text>


           
 


         </Box>


         <Box   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/5fa37051-10e5-4425-ac32-47fbd247da21/resources-quet-quitting-2x.png'
             />
             <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-350}
                letterSpacing='wide'
                color='gray'> MEDIA</Text>

<Text fontWeight='bold'
                
                fontSize='md'
              
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
 
 
         </Box>




         <Box height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/53eda02b-b285-4f00-ab0e-5e3bd23d1454/resources-dark-matter-digitalisation-world-2x.png'
             />
              <br />
               <Text fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-350}
                color='gray'>MEDIA</Text>
                
                <Text fontWeight='bold'
                
                fontSize='md'
               
                letterSpacing='wide'
                color='black.200'>  Hires Focused On Customer Growth, New Markets
                ONLINE EVENT</Text>
                </Box>
                
      </SimpleGrid>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
    
      <br />
      <br />
      
     {/* Button section */}
      
     <Button  className='C1' fontSize="20px" width="200px" height="60px" colorScheme='teal' variant='outline'>
          Load more
     </Button>

     <br />
      <br />
      <br />
      <br />
     

     {/* Fouth section */}


      <Box  colorScheme='gray'>
        <Text as="b" fontSize={{   md: '40px' }}>Work smarter with Wrike's many resources</Text>
      </Box>
      <br />
      <br />

     <SimpleGrid height="455px"  ml={10} mr={10} columns={4} spacing="20px" >
        <Box id="1" className='re1'  height='455px'>
          <br />
          <Text fontSize="23px" ml="-120px" as="b">Wrike Blog</Text>
          <Text   color='gray'>Tips stories, and new approaches 
          <br />to work management,<br />collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br />
          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-6.png'/>
        </Box>
        <Box className='re1'  height='455px'>
          <br />
        <Text fontSize="23px" ml="-30px" as="b">Educational Guides</Text>
          <Text   color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
         <br />
         <br />
         <br />
          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-4.png'/>
        </Box>
        <Box className='re1'  height='455px'>
          <br/>
        <Text fontSize="23px" ml="-140px" as="b">Webinars</Text>
          <Text   color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards.png'/>
        </Box>
        <Box  className='re1'   height='455px'>
          <br/>
        <Text fontSize="23px" ml="-40px" as="b">Computer Success</Text>
          <Text   color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br/>
          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-3.png'/>
        </Box>
        
     </SimpleGrid>
     <br /><br /><br /><br /> 


    </Box>
  )
}

export default Resources
