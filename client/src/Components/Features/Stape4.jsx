import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Stape4 = () => {
  return (
    <div>
      <Box bg="rgb(234,237,245)">
        <Stack width="90%" margin="auto" p={1}>
          <Heading
            mb={4}
            color="black"
            fontWeight="bold"
            marginTop="5%"
            marginBottom="5%"
          >
            {" "}
            Customer success stories
          </Heading>
          <Flex gap="10px" direction={["column", "column", "row", "row"]}>
            <Box
              // border="1px solid red"
              // width="28%"
              width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}
              // height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              textAlign="start"
            >
              <Image src="https://web-static.wrike.com/content/uploads/2020/11/rebrand-quote-slider_logo_money-tree.svg?av=dd49fe45ad60ad72b55445c258d7c46c"></Image>

              <Heading
                marginTop="10%"
                lineHeight="32%"
                fontSize="50px"
                fontWeight="700"
              >
                75%
              </Heading>

              <Text
                marginTop="10%"
                lineHeight="32px"
                fontWeight="400"
                fontSize="18px"
              >
                faster project delivery
              </Text>

              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="link"
                lineHeight="20px"
                fontSize="1rem"
                fontWeight="600"
                marginTop="10%"
                // marginRight="200px"
              >
                Moneytree's story
              </Button>
            </Box>

            <Box
              // border="1px solid red"

              width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}
              textAlign="start"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
            >
              <Image src="https://web-static.wrike.com/content/uploads/2021/01/rebrand-quote_logo_fitbit.svg?av=525f74914e6eaa769ec4baf4ff45411a"></Image>

              <Heading
                marginTop="10%"
                lineHeight="32%"
                fontSize="50px"
                fontWeight="700"
              >
                200+
              </Heading>

              <Text
                marginTop="10%"
                lineHeight="32px"
                fontWeight="400"
                fontSize="18px"
              >
                hours saved
              </Text>

              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="link"
                lineHeight="20px"
                fontSize="1rem"
                fontWeight="600"
                marginTop="10%"
              >
                Fitbit's story
              </Button>
            </Box>

            <Box
              width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              textAlign="start"
            >
              <Image src="https://web-static.wrike.com/content/uploads/2020/11/rebrand-quote-slider_logo_marketing-architects.svg?av=8136a9351ccfaa40814af5713139d937"></Image>

              <Heading
                marginTop="10%"
                lineHeight="32%"
                fontSize="50px"
                fontWeight="700"
              >
                40%
              </Heading>

              <Text
                marginTop="10%"
                lineHeight="32px"
                fontWeight="400"
                fontSize="18px"
              >
                more efficient processes
              </Text>

              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="link"
                lineHeight="20px"
                fontSize="1rem"
                fontWeight="600"
                marginTop="10%"
              >
                Marketing Architects' story
              </Button>
            </Box>
          </Flex>
        </Stack>
        <Box
          border="3px solid green"
          width={{ base: "90%", sm: "90%", md: "80%", lg: "80%" }}
          margin="auto"
          marginTop="5%"
          borderRadius="10px"
        >
          <Stack
            maxW="60rem"
            // border="1px solid red"
            width={{ base: "90%", sm: "90%", md: "80%", lg: "80%" }}
            margin="auto"
            marginTop="2%"
            textAlign="center"
          >
            <Heading
              mb={4}
              fontSize="25px"
              lineHeight="2rem"
              fontWeight="400"
              verticalAlign="baseline"
              textAlign="justify-all"
              // alignItem="start"
            >
              {" "}
              I've never seen a tool as easy to use, as easy to onboard new
              userS, as easy to scale, and as easy to customize to your own
              workflow, process, team, clientele, and changing environment."
              {/* "The way I'm able to customize Wrike to fit my workflow is one of
              the strongest features." */}
            </Heading>
          </Stack>
          <Stack
            width={{ base: "90%", sm: "90%", md: "80%", lg: "80%" }}
            margin="auto"
            marginTop="1rem"
          >
            <Flex gap="15%" direction={["column", "column", "row", "row"]}>
              <Text
                // border="1px solid red"
                fontSize="20px"
                lineHeight="32px"
                fontWeight="400"
              >
                Paul De Leon, Graphic Designer, San Francisco Chronicle
              </Text>
              <Image
                // border="1px solid red"
                width={{ base: "90%", sm: "90%", md: "20%", lg: "15%" }}
                margin="auto"
                display={{
                  base: "block",
                  sm: "none",
                  md: "block",
                  lg: "block",
                }}
                src="https://web-static.wrike.com/tp/storage/uploads/a570bb8c-fe99-4f8c-809c-8399431bf855/rebrand-quote-logo-sony-120x70.svg"
              ></Image>
            </Flex>
          </Stack>
        </Box>
        <Button
          size="lg"
          colorScheme="green"
          mt="24px"
          marginBottom="5%"
          marginTop="5%"
        >
          Get Started
        </Button>
      </Box>
    </div>
  );
};

export default Stape4;
