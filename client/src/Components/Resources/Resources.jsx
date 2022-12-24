import { Box,Text,Stack,Button,Grid,Heading, SimpleGrid ,Input, Image, GridItem} from '@chakra-ui/react'
import React from 'react'
import "./resources.css"
import ImageSlider from '../Resources/ImageSlider'

 

const Resources = () => {

  return (
    <>
     <Box ><Stack
          maxW="55rem"
        
          margin="auto"
          spacing={8}
          textAlign="center"
          alignItems="center"
        >
          <Heading   fontSize="37px" mb={4} color="black" fontWeight="bold" marginTop="5%">
            {" "}
            Resources Library
          </Heading>
          
        </Stack></Box>
 {/* <Box marginTop="20px"><Text id="e1"  className="z1"  as="b" ml="-67%"   fontSize={{ base: '26px', md: '40px', lg: '45px' }}>Resources Library</Text> </Box> */}
      <br />
      <br />{/*------------------------- First section---------------------------------------- */}

      <Grid    marginTop="-1px"  className="Grid_1" borderRadius="30px">
         <GridItem margin={"auto"} height='80px'>
          <Box> 
            <Image 
             borderRadius="15"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/ebook-25-must-know-productivity-tips.png"
             />
             
             <br />
             <Text
                id='e2'
               className='e1'
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-350}
                letterSpacing='wide'
                color='gray'>EBOOKS</Text>
              
              <Text className='d3'
               fontWeight='bold'
                mt="8px"
                fontSize='md'
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>


            <Text  fontWeight='bold'
            className='d3'
                textTransform='uppercase'
                fontSize='14'
                mt="8px"
                letterSpacing='wide'
                color='gray'>Enable a flexible workforce with our eBook guide to navigating hybrid work. Learn about the benefits and challenges of hybrid work, as well as tips and tricks for creating your own hybrid work model.</Text>


             </Box>
            
          </GridItem>


         <GridItem margin={"auto"} height='80px'>
           <Box>
           <Image
             borderRadius="15"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e6ebed47-7309-4d57-9073-abc383370379/use-case-carnival.png'
             />
             <br />
               <Text
                 id='e3'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-340}
                letterSpacing='wide'
                color='gray'>USE CASE</Text>

             <Text className='d3'
             fontWeight='bold'
                  mt="8px"
                fontSize='md'
                  marginLeft="1px"
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>


            <Text  
            className='d3'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                mt="8px"
                letterSpacing='wide'
                color='gray'> Wondering how you can use Wrike in your role or industry? We’ve rounded up 24 use cases that demonstrate the power of Wrike in a range of teams, from business operations to creative production.</Text>
           </Box>
        
 
         </GridItem>

         <GridItem height='80px'>
          <Box>
          <Image
             borderRadius="15"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/7c5778b8-697b-4b30-bb3f-ce6cc2f3ced3/resources-collaborate-2x.png'
             />
              <br />
               <Text 
                id='e4'
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-305}
                color='gray'>ONLINE EVENT</Text>
                
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                ml="-1px"
                mt="8px"
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>


            <Text className='d3'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                mt="8px"
                color='gray'> View exclusive presentations, breakout sessions, and product announcements, all available on demand at a time that suits you. Explore the next generation in work management with Wrike.</Text>
            </Box>
         
          </GridItem>
      </Grid>
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /> 

      {/*----------------------------- Second section -------------------------------------------- */}
         

         {/* ----------------------First section------------------------------------------------- */}

         {/* marginTop="-50px"  ml={10} mr="750px"  */}
      <Box marginLeft="40px" width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}>
         <Input id='f2' placeholder='Search' height="60px" size='lg' />
      </Box>
       <br />
       <br />

       {/*  SECOND GRID */}

      <Grid className="Grid_2" >
         <GridItem  height='80px'>
             <Image
             
               borderRadius="15"
               cursor="pointer"
             src= " https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2c3be91d-f038-4445-bdd5-a938ef8aae07/resources-webinars-recycle-dark-matter-into-productivity-2x.png"
             />
             <br />
             <Text 
             id='e6'
             fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-336}
                letterSpacing='wide'
                color='gray'>WEBINAR</Text>
              
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                ml="1px"
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>
         </GridItem>


         <GridItem   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src=' https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2c3be91d-f038-4445-bdd5-a938ef8aae07/resources-blog-resources-for-professional-services-teams-2x.png'
             />
             <br />
               <Text 
                  id='e7'
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>

             <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                  ml="1px"
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </GridItem>




         <GridItem height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/2c3be91d-f038-4445-bdd5-a938ef8aae07/resources-blog-pmo-halloween-planning-2x.png'
             />
              <br />
               <Text
                 id='e7'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-330}
                color='gray'>BLOGPOST</Text>
                
              <Text fontWeight='bold'
                 className='d3'
                fontSize='md'
                ml="3px"
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </GridItem>
                
      </Grid>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      

      {/*  -----------------------------second second  ------------------------------*/}
      
      <Grid className="Grid_3">
         <GridItem  height='80px'>
             <Image
              cursor="pointer"
             
               borderRadius="15"
             src= " https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/916da484-56ca-47cd-b711-08529a0e6801/resources-wrike-under-vista-2x.png"
             />
             <br />
             <Text
               id='e7'
              fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>
              
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                ml="1px"
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>
         </GridItem>


         <GridItem  height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/916da484-56ca-47cd-b711-08529a0e6801/resources-up-level-your-work-management-2x.png'
             />
             <br />
               <Text 
               id='e7'
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>

             <Text fontWeight='bold'
                 className='d3'
                fontSize='md'
                  ml="2px"
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </GridItem>


         <GridItem height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/916da484-56ca-47cd-b711-08529a0e6801/resources-13-resources-to-help-pm-teams-2x.png'
             />
              <br />
               <Text 
               id='e7'
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-330}
                color='gray'>BLOGPOST</Text>
                
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                ml="3px"
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </GridItem>
                
      </Grid>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

       {/*  ---------------------------- Third section ------------------------------*/}
      
      <Grid className="Grid_4" >
         <GridItem height='80px'>
             <Image
             
               borderRadius="15"
               cursor="pointer"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/7bfbddba-15c8-4063-bc05-f3f7dc929a4c/cover-how-wrike-speaks-your-teams-language-2x.png"
             />
             <br />
             <Text
                id='e6'
              fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-340}
                letterSpacing='wide'
                color='gray'>WEBINAR</Text>
              
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                letterSpacing='wide'
                color='black.200'> Building Flexible Workplaces: A Definitive Guide to Hybrid Work  </Text>
          </GridItem>


         <GridItem height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-media-enterprise-times-2x.png'
             />
             <br />
               <Text
                  id='e8'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-354}
                letterSpacing='wide'
                color='gray'>MEDIA</Text>

             <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                  // ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </GridItem>




         <GridItem height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-report-remote-vs-office-2x.png'
             />
              <br />
               <Text
                  id='e5' 
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-350}
                color='gray'>REPORT</Text>
                
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                // ml={-4}
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </GridItem>
                
      </Grid>
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* ------------------ Fouth section------------------------ */}

      <Grid className="Grid_5">
         <GridItem  height='80px'>
             <Image
             
               borderRadius="15"
               cursor="pointer"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-blog-building-business-resilience-2x.png"
             />
             <br />
             <Text 
                id='e7'
             fontWeight='bold'
                textTransform='uppercase'
                fontSize='14'
                ml={-330}
                letterSpacing='wide'
                color='gray'>BLOGPOST</Text>
              
              <Text
                id='e9'
               fontWeight='bold'
                 ml={-14}
                fontSize='md'
                letterSpacing='wide'
                color='black.200'>Protect Your Organization From Uncertainty
                </Text>


           
 


         </GridItem>


         <GridItem   height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/e103ef5e-28d9-460e-b87f-dfe209a9fa23/resources-idg-connect-article-2x.png'
             />
             <br />
               <Text
                  id='e8'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-355}
                letterSpacing='wide'
                color='gray'>MEDIA</Text>

             <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                  // ml={-4}
                letterSpacing='wide'
                color='black.200'> The Use Case Carnival: Wrike Use Cases for Every Team
                USE CASES</Text>
 
 
         </GridItem>




         <GridItem height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/ca21cd92-525e-4d4c-8837-3c143b2aba1b/resources-marketing-kit-2x.png'
             />
              <br />
               <Text 
                  id='f1'
               fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-305}
                color='gray'>SUCCESS KIT</Text>
                
              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
                ml="7px"
                // ml={-}
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
                </GridItem>
                
      </Grid>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      

      <Grid className="Grid_6">
         <GridItem  height='80px'>
             <Image
              cursor="pointer"
               borderRadius="15"
             src= "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/c1da6bcf-0fb2-4c9b-9d5a-6eeb41691172/resources-media-strategic-hires-2x.png"
             />
             <br />
             <Text 
                id='e8'
             fontWeight='bold'
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

          </GridItem>


         <GridItem height='80px'>
          <Image
             borderRadius="15"
             cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/5fa37051-10e5-4425-ac32-47fbd247da21/resources-quet-quitting-2x.png'
             />
             <br />
               <Text
                  id='e5'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                ml={-350}
                letterSpacing='wide'
                color='gray'> MEDIA</Text>

              <Text fontWeight='bold'
                className='d3'
                fontSize='md'
               ml="4px"
                letterSpacing='wide'
                color='black.200'>  Collaborate 2022 On-demand: The Ultimate Work Management Event
                ONLINE EVENT</Text>
 
 
         </GridItem>




         <GridItem height='80px'>
         <Image
         borderRadius="15"
         cursor="pointer"
             src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/53eda02b-b285-4f00-ab0e-5e3bd23d1454/resources-dark-matter-digitalisation-world-2x.png'
             />
              <br />
               <Text
                  id='e5'
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                ml={-350}
                color='gray'>MEDIA</Text>
                
                <Text fontWeight='bold'
                ml="4px"
                fontSize='md'
               className='d3'
                letterSpacing='wide'
                color='black.200'>  Hires Focused On Customer Growth, New Markets
                ONLINE EVENT</Text>
                </GridItem>
                
      </Grid>
      
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

     {/* Button section */}
      
     <Button  className='C1' fontSize="20px" width="200px" height="60px" colorScheme='teal' variant='outline'>
          Load more
     </Button>

     <br />
      <br />
      <br />
      <br />
     

     {/* Fouth section */}

    <Box className='b1'>
      <br />
      <br />
      <br />
       <Box >
        <Text as="b" fontSize={{   md: '40px' }}>Work smarter with Wrike's many resources</Text>
      </Box>
      <br />
      <br />


     <ImageSlider id="t1">  
     {/* <Grid  className="Grid_7" height="455px">
        <GridItem id="a" className='re1'  height='455px'>
         
          <br />
          <Text className='grid7'  fontSize="23px" ml="-120px" as="b">Wrike Blog</Text>
          <Text className='d2' color='gray'>Tips stories, and new approaches 
          <br />to work management,<br />collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br />
          <Image marginTop="-4px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-6.png'/>
        </GridItem>
        <GridItem id="a" className='re1'  height='455px'>
          <br />
        <Text fontSize="23px" ml="-30px" as="b">Educational Guides</Text>
          <Text  className='d2' color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
         <br />
         <br />
         <br />
          <Image marginTop="-4px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-4.png'/>
        </GridItem>
        <GridItem id="a" className='re1'  height='455px'>
          <br/>
        <Text fontSize="23px" ml="-140px" as="b">Webinars</Text>
          <Text className='d2'  color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image marginTop="-4px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards.png'/>
        </GridItem>
        <GridItem id="a" className='re1'   height='455px'>
          <br/>
        <Text fontSize="23px" ml="-40px" as="b">Computer Success</Text>
          <Text className='d2'   color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br/>
          <Image marginTop="-4px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-3.png'/>
        </GridItem>
        
     </Grid> */}
    </ImageSlider>  
    </Box>
     
     {/* <br /><br /><br /><br />  */}


    </>
  )
}

export default Resources
