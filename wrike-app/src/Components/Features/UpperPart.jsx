// import React from "react";

// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Button,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from "@chakra-ui/react";

// import ImageSlider from "./ImageSlider";
// import { SlideData } from "./SlideData";
// const UpperPart = () => {
//   return (
//     <>
//       <div>
//         <Box
//           // border="1px solid red"
//           bg="rgb(23,31,56)"
//           w="100%"
//           p={4}
//           height="800px"
//           boxSize="large"
//         >
//           <Stack
//             spacing={8}
//             // border="2px solid red"
//             textAlign="center"
//             alignItems="center"
//           >
//             <Text fontSize="56px" w="50%" color="white" fontWeight="bold">
//               Personalize Your Workspace With Custom Item Types
//             </Text>
//             <Text fontSize="xl" w="40%" color="white">
//               Build a customizable library in your Wrike workspace and mirror
//               the unique processes of your team, department, or company.
//             </Text>
//             <Button
//               colorScheme="green"
//               fontSize="2xl"
//               width="15%"
//               height="60px"
//             >
//               Get Started
//             </Button>
//           </Stack>

//           <Image
//             // border="1px solid red"
//             margin="auto"
//             marginTop="8%"
//             src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=1016,dpr=1/tp/storage/uploads/ef7bdc59-b416-4fe3-ae6a-674a01c02848/custom-item-types-media-2x.png"
//             alt="image"
//           />

//           <Stack
//             // border="1px solid red"
//             w="80%"
//             margin="auto"
//             spacing={6}
//             marginTop="8%"
//             marginBottom="3%"
//           >
//             <Text
//               color="white"
//               // fontFamily="TT_Norms_Pro, -apple-system, BlinkMacSystemFont "
//               fontSize="15"
//               fontStyle="normal"
//               fontWeight="10px"
//               // fontWeight={600}
//             >
//               TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
//             </Text>
//             <Grid templateColumns="repeat(7, 1fr)" bg="rgb(23,31,56)">
//               <GridItem w="100%" h="20" marginLeft="10%">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-google.svg" />
//               </GridItem>

//               <GridItem w="100%" h="20" marginLeft="10%">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos-white.svg" />
//               </GridItem>

//               <GridItem w="100%" h="20" marginLeft="10%">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-lyft-white.svg" />
//               </GridItem>
//               <GridItem w="100%" h="20">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-white-siemens.svg" />
//               </GridItem>
//               <GridItem w="100%" h="20">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon-white.svg" />
//               </GridItem>
//               <GridItem w="100%" h="20" marginLeft="12%">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-oglivy.svg" />
//               </GridItem>
//               <GridItem w="100%" h="20">
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-snowflake-white.svg" />
//               </GridItem>
//             </Grid>
//           </Stack>
//         </Box>

//         {/* ********************************************* */}

//         <Box
//           // border="1px solid red"
//           bg="rgb(234,237,245)"
//           w="100%"
//           p={4}
//           height="800px"
//           boxSize="large"
//         >
//           <Stack
//             spacing={8}
//             // border="2px solid red"
//             textAlign="center"
//             alignItems="center"
//           >
//             <Text
//               fontSize="56px"
//               w="60%"
//               color="black"
//               fontWeight="bold"
//               marginTop="5%"
//             >
//               Wave goodbye to generic project management terminology
//             </Text>
//             <Text fontSize="xl" w="55%" color="black">
//               Some platforms take a one-size-fits-all approach to work
//               management. With Wrike’s custom item types, you can build a
//               workspace tailored to your role, department, or industry.
//             </Text>
//           </Stack>
//           <Stack
//             // border="1px solid red"

//             width="80%"
//             margin="auto"
//             marginTop="5%"
//           >
//             <Flex gap="20px">
//               <Box
//                 // border="1px solid black"
//                 width="30%"
//                 margin="auto"
//                 borderRadius="5%"
//               >
//                 <Accordion>
//                   <AccordionItem
//                     _hover={{ color: "white", bg: "rgb(4,69,77)" }}
//                     borderRadius="10px"
//                     bg="white"
//                     marginBottom="2%"
//                   >
//                     <h2>
//                       <AccordionButton
//                         borderRadius="10px"
//                         _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
//                       >
//                         <Box flex="1" textAlign="left">
//                           <Text fontSize="23px" fontWeight="medium">
//                             Customizable libraries
//                           </Text>
//                         </Box>
//                         <AccordionIcon />
//                       </AccordionButton>
//                     </h2>
//                     <AccordionPanel
//                       lineHeight="28px"
//                       fontWeight="400"
//                       fontSize="16px"
//                       fontStyle="normal"
//                     >
//                       Create a library of custom item types for your team or
//                       entire company. Define your own terms to match the
//                       business processes you use every day. Wrike's use case
//                       templates include out-of-the-box item types so you can get
//                       started right away.
//                     </AccordionPanel>
//                   </AccordionItem>

//                   <AccordionItem
//                     _hover={{ color: "white", bg: "rgb(4,69,77)" }}
//                     borderRadius="10px"
//                     bg="white"
//                     marginBottom="2%"
//                   >
//                     <h2>
//                       <AccordionButton
//                         borderRadius="10px"
//                         _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
//                       >
//                         <Box flex="1" textAlign="left">
//                           <Text fontSize="23px" fontWeight="medium">
//                             Easy editing
//                           </Text>
//                         </Box>
//                         <AccordionIcon />
//                       </AccordionButton>
//                     </h2>
//                     <AccordionPanel
//                       lineHeight="28px"
//                       fontWeight="400"
//                       fontSize="16px"
//                       fontStyle="normal"
//                     >
//                       Tweak custom item types to suit your team's requirements.
//                       Add a personal touch with recognisable names, icons, and
//                       descriptions. You can also customize your sections and
//                       fields as you see fit, leading to more intuitive work
//                       processes.
//                     </AccordionPanel>
//                   </AccordionItem>

//                   <AccordionItem
//                     _hover={{ color: "white", bg: "rgb(4,69,77)" }}
//                     borderRadius="10px"
//                     bg="white"
//                     marginBottom="2%"
//                   >
//                     <h2>
//                       <AccordionButton
//                         borderRadius="10px"
//                         _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
//                       >
//                         <Box flex="1" textAlign="left">
//                           <Text fontSize="23px" fontWeight="medium">
//                             Simplified automation
//                           </Text>
//                         </Box>
//                         <AccordionIcon />
//                       </AccordionButton>
//                     </h2>
//                     <AccordionPanel
//                       lineHeight="28px"
//                       fontWeight="400"
//                       fontSize="16px"
//                       fontStyle="normal"
//                     >
//                       With Wrike's smart automation, you can enable specific
//                       business logic for each custom item type no code required.
//                       Add automation rules and best practices to deal with
//                       specific scenarios, i.e., what to do when a status changes
//                       to "Completed:"
//                     </AccordionPanel>
//                   </AccordionItem>

//                   <AccordionItem
//                     _hover={{ color: "white", bg: "rgb(4,69,77)" }}
//                     borderRadius="10px"
//                     bg="white"
//                     marginBottom="2%"
//                   >
//                     <h2>
//                       <AccordionButton
//                         borderRadius="10px"
//                         _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
//                       >
//                         <Box flex="1" textAlign="left">
//                           <Text fontSize="23px" fontWeight="medium">
//                             Configurable views
//                           </Text>
//                         </Box>
//                         <AccordionIcon />
//                       </AccordionButton>
//                     </h2>
//                     <AccordionPanel
//                       lineHeight="28px"
//                       fontWeight="400"
//                       fontSize="16px"
//                       fontStyle="normal"
//                     >
//                       Customize your layout with the configurable work item
//                       view. Add necessaryfields for each item type, e.g, a HR
//                       candidate profile will equire contact details. Any
//                       irrelevant sections ? Simply hide them - you can always
//                       add them back later if needed.
//                     </AccordionPanel>
//                   </AccordionItem>

//                   <AccordionItem
//                     _hover={{ color: "white", bg: "rgb(4,69,77)" }}
//                     borderRadius="10px"
//                     bg="white"
//                     marginBottom="2%"
//                   >
//                     <h2>
//                       <AccordionButton
//                         borderRadius="10px"
//                         _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
//                       >
//                         <Box flex="1" textAlign="left">
//                           <Text fontSize="23px" fontWeight="medium">
//                             Accessible details
//                           </Text>
//                         </Box>
//                         <AccordionIcon />
//                       </AccordionButton>
//                     </h2>
//                     <AccordionPanel
//                       lineHeight="28px"
//                       fontWeight="400"
//                       fontSize="16px"
//                       fontStyle="normal"
//                     >
//                       Keep the right type of work in the right place. Our
//                       flexible workspace means you can access custom item types
//                       across various Wrike views. Differentiate between types in
//                       Table and Board view, and filter items to track in your
//                       reports and dashboards.
//                     </AccordionPanel>
//                   </AccordionItem>
//                 </Accordion>
//               </Box>
//               <Box width="60%" margin="auto">
//                 <ImageSlider slides={SlideData} />
//               </Box>
//             </Flex>
//           </Stack>
//           <Button
//             colorScheme="green"
//             fontSize="2xl"
//             width="15%"
//             height="60px"
//             marginBottom="5%"
//             marginTop="5%"
//           >
//             Get Started
//           </Button>
//         </Box>

//         {/* ******************************************************************************************* */}

//         <Box bg="rgb(255,255,255)">
//           <Stack
//             spacing={8}
//             // border="2px solid red"
//             textAlign="center"
//             alignItems="center"
//           >
//             <Text
//               fontSize="56px"
//               w="60%"
//               color="black"
//               fontWeight="bold"
//               marginTop="5%"
//             >
//               Experience the power of truly customizable software
//             </Text>
//             <Text fontSize="xl" w="55%" color="black">
//               Whether you’re a marketer or an IT developer, Wrike’s custom item
//               types feature will work for your team. Here’s a taster of the
//               benefits it can bring.
//             </Text>
//           </Stack>

//           <Stack width="90%" margin="auto" marginTop="5%">
//             <Flex>
//               <Box
//                 // border="1px solid red"
//                 width="28%"
//                 height="300px"
//                 margin="auto"
//               >
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/0cd44218-4f0b-4617-a4f9-48180e5f6e61/brandevo-icon-visualisation.svg"></Image>
//                 <Flex align="flex-start">
//                   <Heading
//                     marginTop="8%"
//                     lineHeight="32%"
//                     fontSize="24px"
//                     fontWeight="700"
//                   >
//                     Boost visibility
//                   </Heading>
//                 </Flex>
//                 <Flex align="flex-start">
//                   <Text
//                     marginTop="8%"
//                     lineHeight="32px"
//                     fontWeight="400"
//                     fontSize="18px"
//                   >
//                     Keep track of meeting minutes, project files, and more with
//                     custom item types. Workspace members can view and access the
//                     information they need, be it a creative brief or a user
//                     story.
//                   </Text>
//                 </Flex>
//               </Box>
//               <Box
//                 // border="1px solid red"
//                 width="28%"
//                 height="300px"
//                 margin="auto"
//               >
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/0cd44218-4f0b-4617-a4f9-48180e5f6e61/brandevo-icon-items.svg"></Image>
//                 <Flex align="flex-start">
//                   <Heading
//                     marginTop="8%"
//                     lineHeight="32%"
//                     fontSize="24px"
//                     fontWeight="700"
//                   >
//                     Reduce complexity
//                   </Heading>
//                 </Flex>
//                 <Flex align="flex-start">
//                   <Text
//                     marginTop="8%"
//                     lineHeight="32px"
//                     fontWeight="400"
//                     fontSize="18px"
//                   >
//                     Speak your team’s language. By configuring your workspace to
//                     match your distinctive style, you can eliminate any
//                     confusion associated with vague terminology and focus on
//                     your shared objectives.
//                   </Text>
//                 </Flex>
//               </Box>

//               <Box
//                 // border="1px solid red"
//                 width="28%"
//                 height="300px"
//                 margin="auto"
//               >
//                 <Image src="https://web-static.wrike.com/tp/storage/uploads/88bbe0a8-c70d-4e25-bcfa-1ec516324bd0/boost.svg"></Image>
//                 <Flex align="flex-start">
//                   <Heading
//                     marginTop="8%"
//                     lineHeight="32%"
//                     fontSize="24px"
//                     fontWeight="700"
//                   >
//                     Increase efficiency
//                   </Heading>
//                 </Flex>
//                 <Flex align="flex-start">
//                   <Text
//                     marginTop="8%"
//                     lineHeight="32px"
//                     fontWeight="400"
//                     fontSize="18px"
//                   >
//                     Our powerful work item automation enables users to reduce
//                     admin tasks, saving valuable time. What’s more, our no-code
//                     workflows are easy to use, so you can hit the ground
//                     running.
//                   </Text>
//                 </Flex>
//               </Box>
//             </Flex>
//           </Stack>
//           <Button
//             colorScheme="green"
//             fontSize="2xl"
//             width="15%"
//             height="60px"
//             marginBottom="5%"
//             marginTop="5%"
//           >
//             Get Started
//           </Button>
//         </Box>
//       </div>
//     </>
//   );
// };

// export default UpperPart;
