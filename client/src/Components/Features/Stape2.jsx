import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

const Stape2 = () => {
  return (
    <div>
      <Box
        // border="5px solid red"
        bg="rgb(234,237,245)"
        w="100%"
        p={4}
        height="800px"
        boxSize="large"
      >
        <Stack
          maxW="55rem"
          margin="auto"
          spacing={8}
          textAlign="center"
          alignItems="center"
        >
          <Heading mb={4} color="black" fontWeight="bold" marginTop="5%">
            {" "}
            Wave goodbye to generic project management terminology
          </Heading>
          <Text fontSize="xl" color="black">
            ome platforms take a one-size-fits-all approach to work management.
            With Wrike’s custom item types, you can build a workspace tailored
            to your role, department, or industry.
          </Text>
          <Button size="lg" colorScheme="green" mt="24px">
            Get Started
          </Button>
        </Stack>
        <Stack
          className="stack2"
          // border="1px solid red"
          width="100%"
          margin="auto"
          marginTop="5%"
        >
          <Flex>
            <Box
              // border="1px solid black"
              width={{ base: "90%", sm: "90%", md: "30%", lg: "30%" }}
              margin="auto"
              borderRadius="5%"
            >
              <Accordion>
                <AccordionItem
                  _hover={{ color: "white", bg: "rgb(4,69,77)" }}
                  borderRadius="10px"
                  bg="white"
                  marginBottom="2%"
                >
                  <h2>
                    <AccordionButton
                      borderRadius="10px"
                      _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="23px" fontWeight="medium">
                          Customizable libraries
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    lineHeight="28px"
                    fontWeight="400"
                    fontSize="16px"
                    fontStyle="normal"
                  >
                    <Grid>
                      <Text>
                        Create a library of custom item types for your team or
                        entire company. Define your own terms to match the
                        business processes you use every day. Wrike's use case
                        templates include out-of-the-box item types so you can
                        get started right away.
                      </Text>
                      <Image
                        marginTop="1rem"
                        src={SlideData[0].image}
                        display={{
                          base: "block",
                          sm: "block",
                          md: "none",
                          lg: "none",
                        }}
                      ></Image>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  _hover={{ color: "white", bg: "rgb(4,69,77)" }}
                  borderRadius="10px"
                  bg="white"
                  marginBottom="2%"
                >
                  <h2>
                    <AccordionButton
                      borderRadius="10px"
                      _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="23px" fontWeight="medium">
                          Easy editing
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    lineHeight="28px"
                    fontWeight="400"
                    fontSize="16px"
                    fontStyle="normal"
                  >
                    <Grid>
                      <Text>
                        Tweak custom item types to suit your team's
                        requirements. Add a personal touch with recognisable
                        names, icons, and descriptions. You can also customize
                        your sections and fields as you see fit, leading to more
                        intuitive work processes.
                      </Text>
                      <Image
                        marginTop="1rem"
                        src={SlideData[1].image}
                        display={{
                          base: "block",
                          sm: "block",
                          md: "none",
                          lg: "none",
                        }}
                      ></Image>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  _hover={{ color: "white", bg: "rgb(4,69,77)" }}
                  borderRadius="10px"
                  bg="white"
                  marginBottom="2%"
                >
                  <h2>
                    <AccordionButton
                      borderRadius="10px"
                      _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="23px" fontWeight="medium">
                          Simplified automation
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    lineHeight="28px"
                    fontWeight="400"
                    fontSize="16px"
                    fontStyle="normal"
                  >
                    <Grid>
                      <Text>
                        With Wrike's smart automation, you can enable specific
                        business logic for each custom item type no code
                        required. Add automation rules and best practices to
                        deal with specific scenarios, i.e., what to do when a
                        status changes to "Completed:"
                      </Text>
                      <Image
                        marginTop="1rem"
                        src={SlideData[2].image}
                        display={{
                          base: "block",
                          sm: "block",
                          md: "none",
                          lg: "none",
                        }}
                      ></Image>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  _hover={{ color: "white", bg: "rgb(4,69,77)" }}
                  borderRadius="10px"
                  bg="white"
                  marginBottom="2%"
                >
                  <h2>
                    <AccordionButton
                      borderRadius="10px"
                      _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="23px" fontWeight="medium">
                          Configurable views
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    lineHeight="28px"
                    fontWeight="400"
                    fontSize="16px"
                    fontStyle="normal"
                  >
                    <Grid>
                      <Text>
                        Customize your layout with the configurable work item
                        view. Add necessaryfields for each item type, e.g, a HR
                        candidate profile will equire contact details. Any
                        irrelevant sections ? Simply hide them - you can always
                        add them back later if needed.
                      </Text>
                      <Image
                        marginTop="1rem"
                        src={SlideData[3].image}
                        display={{
                          base: "block",
                          sm: "block",
                          md: "none",
                          lg: "none",
                        }}
                      ></Image>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem
                  _hover={{ color: "white", bg: "rgb(4,69,77)" }}
                  borderRadius="10px"
                  bg="white"
                  marginBottom="2%"
                >
                  <h2>
                    <AccordionButton
                      borderRadius="10px"
                      _expanded={{ bg: "rgb(4,69,77)", color: "white" }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontSize="23px" fontWeight="medium">
                          Accessible details
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    lineHeight="28px"
                    fontWeight="400"
                    fontSize="16px"
                    fontStyle="normal"
                  >
                    <Grid>
                      <Text>
                        Keep the right type of work in the right place. Our
                        flexible workspace means you can access custom item
                        types across various Wrike views. Differentiate between
                        types in Table and Board view, and filter items to track
                        in your reports and dashboards.
                      </Text>
                      <Image
                        marginTop="1rem"
                        src={SlideData[4].image}
                        display={{
                          base: "block",
                          sm: "block",
                          md: "none",
                          lg: "none",
                        }}
                      ></Image>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box
              width="50%"
              margin="auto"
              // border="1px solid black"
              display={{ base: "none", sm: "none", md: "block", lg: "block" }}
            >
              <ImageSlider slides={SlideData} />
            </Box>
          </Flex>
        </Stack>

        <Button
          marginBottom="5%"
          marginTop="5%"
          size="lg"
          colorScheme="green"
          mt="24px"
        >
          Get Started
        </Button>
      </Box>
    </div>
  );
};

export default Stape2;
