import { Text, Box, Image, Heading, Stack, Input, WrapItem, Button, Grid, SimpleGrid, Flex } from '@chakra-ui/react'
import React from 'react'
// import "./Home.css"
import { companyLogo, dataImage, dataImageSecond } from './data'
import { HiArrowSmRight } from "react-icons/hi"
const Home = () => {
  return (
    <SimpleGrid>
      <SimpleGrid columns={{base:1,sm:2,md:2}} gap="2%" minChildWidth="100px"  bg="#181f38" w="100%" h="700px" m="0px" p="0px" boxSizing="border-box">
        <Box w="90%" h="700px" m="auto" display="flex" alignItems="center" justifyContent="center">
          <Box ml="5%" w="75%" h="500px" textAlign="left">
            <Heading mb="3%" color="#ffffff" fontSize="50px">Remove barriers,</Heading>
            <Heading mb="3%" color="#ffffff" fontSize="50px">find clarity,</Heading>
            <Heading mb="3%" color="#ffffff" fontSize="50px">exceed goals</Heading>
            <Text mb="3%" fontSize="22px" color="#ffffff">Anything is possible with the most powerful work management software at your fingertips.</Text>
            <Box mt="10%" h={"20px"} w="100%" display="flex" alignItems="center" justifyContent="space-between">
              <Stack spacing={3} w="100%" >
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
      <SimpleGrid bg="#EBF5F3" w={"100%"} h="auto" pb="10%">
        <Box p={"5%"} w="85%" m="auto" display={"flex"} alignItems={"center"} justifyContent={"space-between"} column={7} >
          {
            companyLogo.map((img) => <Box key={img.id}><Image src={img.img}></Image></Box>)
          }
        </Box>
        <Text mt="-40px" fontFamily="'Anek Odia', sans-serif" fontSize={"18px"} fontWeight="400" color={"gray"} >TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</Text>
        <Box w="70%" m="auto" mt="5%" mb="5%">
          <Heading fontSize={"45px"}>Transform the way your teams work</Heading>
          <Text mt="3%" fontSize={"25px"} color={"gray"} lineHeight={"30px"}>Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</Text>
        </Box>
        <Box m="auto" w="80%" display={"flex"} alignItems={"center"} justifyContent={'space-between'}>
          {
            dataImage.map((ele) => <Box h="600px" bg="#ffffff" p='25px' m="1%" key={ele.id}><Image src={ele.img} />
              <Heading fontSize={"25px"} textAlign={"left"} mt="10%" mb={"10%"}>{ele.title}</Heading>
              <Text fontWeight={400} lineHeight={"30px"} textAlign={"left"} mt="4%" fontSize={"20px"} color="gray">{ele.des}</Text>
              <Box color={"#0a615a"} m="8% 0" pl="-10px" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Text pl="-0.5" fontSize={"20px"} fontWeight="bold" ml="-48%" mr="10px">Learn More</Text><HiArrowSmRight fontWeight="bold" fontSize={"30px"} />
              </Box>
            </Box>)
          }
        </Box>
        <Box color={"#0a615a"} display={"flex"} alignItems="cneter" justifyContent={"center"} w="15%" m="auto" mt="5%">
          <Text fontSize={"20px"} fontWeight="bold" mr="10px">Sea all teams</Text><HiArrowSmRight fontWeight="bold" fontSize={"30px"} />
        </Box>
        <Box w="20%" m={"auto"} mt="8%">
          <Button fontSize="25px" bg="#08CF65" colorScheme='green' p="12% 20%" color="#ffffff">Get Started</Button>
        </Box>
      </SimpleGrid>
      <SimpleGrid  w="100%" h={"auto"} p="4% 7%" bg="#181f38" >
        <Box display={"flex"} alignItems="cneter" justifyContent={"space-between"}>
          <Box w="40%" p="10% 3%" textAlign={"left"} lineHeight={"20px"}>
            <Text color="#C1C9D8" mb="5%">WRIKE LIGHTSPEED IS HERE</Text>
            <Heading mb="5%" color={"#ffffff"}>Wall to Wall, We Do it All</Heading>
            <Text mb="5%" fontSize="20px" lineHeight="35px" pr="20px" color={"#ffffff"}>Wrike Lightspeed, the latest innovation of Wrike’s platform, makes it easy for every team to find the fastest way to productivity by working as one. Tap into the most powerful work management solution without tradeoffs and experience configurability, scalability, and ease of use — all at once.</Text>
            <Box  color={"#08cf65"} display={"flex"} alignItems="cneter" justifyContent={"left"} w="45%" pl={"-10px"} mt="8%">
              <Text pl="-10px" fontSize={"20px"} fontWeight="bold" mr="10px">Learn more</Text><HiArrowSmRight fontWeight="bold" fontSize={"30px"} />
            </Box>
          </Box>
          <Box>
            <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/18695481-7007-4fb2-86b9-e837ec726ede/lightspeed-promo-analyze-2x.png'></Image>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid bg="#0c3245" p="6% 5%">
       <Box w="95%" m="auto">
       <Heading fontSize={"45px"} w="40%" color={"#ffffff"} m="auto">The Most Versatile Work Management Platform™</Heading>
        <Text mt="2%" p="0% 15%" color={"#ffffff"} fontSize="23px">Maximize your team's performance, accelerate growth, and improve customer experience with Wrike's robust and extensive features.</Text>
       </Box>
      
        <Box  pt="10%" borderBottom={"1px solid green"} w="60%" display={"flex"} alignItems="center" justifyContent={"space-between"} m="auto">
          <Box cursor={"pointer"} p="5px 10px" borderBottom={"3px solid #08cf65"}  bg="#0c3245" color="#ffffff"  fontSize={"18px"}>Dashboards</Box>
          <Box cursor={"pointer"} p="5px 10px"  borderBottom={"3px solid #08cf65"} bg="#0c3245"   color="#ffffff" fontSize={"18px"}>Cross-tagging</Box>
          <Box cursor={"pointer"} p="5px 10px"  borderBottom={"3px solid #08cf65"} bg="#0c3245"  color="#ffffff" fontSize={"18px"}>Integrations</Box>
          <Box cursor={"pointer"} p="5px 10px" borderBottom={"3px solid #08cf65"}  bg="#0c3245"  color="#ffffff" fontSize={"18px"}>Proofing</Box>
          <Box cursor={"pointer"} p="5px 10px" borderBottom={"3px solid #08cf65"}  bg="#0c3245"  color="#ffffff" fontSize={"18px"}>Gantt charts</Box>
        </Box>
        <Box display={"flex"} alignItems="cneter" justifyContent={"space-between"}>
          <Box w="40%" p="10% 3%" textAlign={"left"} lineHeight={"20px"}>
            {/* <Text color="#C1C9D8" mb="5%">WRIKE LIGHTSPEED IS HERE</Text> */}
            <Heading mb="5%" color={"#ffffff"}>Customizable dashboards</Heading>
            <Text mb="5%" fontSize="20px" lineHeight="35px" pr="20px" color={"#ffffff"}>Wrike Lightspeed, the latest innovation of Wrike’s platform, makes it easy for every team to find the fastest way to productivity by working as one. Tap into the most powerful work management solution without tradeoffs and experience configurability, scalability, and ease of use — all at once.</Text>
            <Box  color={"#08cf65"} display={"flex"} alignItems="cneter" justifyContent={"left"} w="45%" pl={"-10px"} mt="8%">
              <Text pl="-10px" fontSize={"20px"} fontWeight="bold" mr="10px">Learn more</Text><HiArrowSmRight fontWeight="bold" fontSize={"30px"} />
            </Box>
          </Box>
          <Box mt="5%">
            <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png'></Image>
          </Box>
        </Box>
        <Box w="20%" m={"auto"} mt="2%">
          <Button fontSize="25px" bg="#ffc000" colorScheme='hsla(45, 100%, 52%, 0.667);' p="12% 20%" color="#181f38">Get Started</Button>
        </Box>
      </SimpleGrid>
        <SimpleGrid p="3% 7% 6% 7%">
        <Box display={"flex"} alignItems="cneter" justifyContent={"space-between"}>
          <Box w="40%" p="10% 3%" textAlign={"left"} lineHeight={"20px"}>
            <Heading mb="5%" color={"#black"}>Robust, industry-leading security</Heading>
            <Text mb="5%" fontWeight={"350"} fontSize="20px" lineHeight="35px" pr="20px" color={"black"}>Ensure peace of mind for your organization with Wrike’s enterprise-grade security, including user authentication, role-based access control, and 99.9% uptime.</Text>
            <Text mb="5%" fontWeight={"350"} fontSize="20px" lineHeight="35px" pr="20px" color={"black"}>Add an extra layer of security with the Wrike Lock add-on. Own and manage your encryption keys for maximum control of your cloud data.</Text>
            <Box  color={"#08cf65"} display={"flex"} alignItems="cneter" justifyContent={"left"} w="50%" pl={"-10px"} mt="8%">
              <Text pl="-10px" fontSize={"20px"} fontWeight="bold" mr="5px">Be secure with Wrike</Text><HiArrowSmRight fontWeight="bold" fontSize={"30px"} />
            </Box>
          </Box>
          <Box mt="5%">
            <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/46b5c5fb-dfa2-4aae-a1d0-3e5c7220944c/rebrand-screenshot-lock-scheme-white.png'></Image>
          </Box>

        </Box>
        <Box w="20%" m={"auto"} mt="-2%">
          <Button fontSize="25px" bg="#08cf65"  colorScheme='green' p="12% 20%" color="#181f38">Get Started</Button>
        </Box>
        </SimpleGrid>
        <SimpleGrid bg="#EBF5F3" w={"100%"} h="auto" pb="10%">
        <Box w="70%" m="auto" mt="5%" mb="5%">
          <Heading fontSize={"45px"}>Integrate apps with just a few clicks</Heading>
          <Text mt="3%" fontSize={"25px"} color={"gray"} lineHeight={"30px"}>Empower your teams to do the best work of their lives with 360° visibility, true cross-departmental collaboration, and powerful automation.</Text>
        </Box>
        <SimpleGrid columns={{base:2,sm:3,md:3}} gap="20px" m="auto" w="80%" className='boxGrid'>
          {
            dataImageSecond.map((ele) => <Box borderRadius={"10px"}  _hover={{color:"#ffffff", bg: "#0c3245",border:"4px solid #ffc000" }} bg="#ffffff" p='25px' key={ele.id}>
              <Image src={ele.img} color="black"/>
              <Text _hover={{color:"#ffffff"}}  mt="20px" fontSize={{base:"10px",sm:"18px",md:"18px"}}  fontWeight={400} lineHeight={"30px"} textAlign={"left"}  color="gray">{ele.des}</Text>
            </Box>)
          }
        </SimpleGrid>
        <Box color={"#0a615a"} display={"flex"} alignItems="cneter" justifyContent={"center"} w="15%" m="auto" mt="5%">
          <Text fontSize={"20px"} fontWeight="bold" mr="10px">Sea all Integrations</Text><HiArrowSmRight fontWeight="bold" fontSize={"30px"} />
        </Box>
        <Box w="20%" m={"auto"} mt="8%">
          <Button fontSize="25px" bg="#ffc000" colorScheme='hsla(45, 100%, 52%, 0.667);' p="12% 20%" color="black">Get Started</Button>
        </Box>
      </SimpleGrid>
    </SimpleGrid>

  )
}

export default Home
