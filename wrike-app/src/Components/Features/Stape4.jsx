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
        <Stack width="90%" margin="auto">
          <Heading
            fontSize="44px"
            lineHeight="60px"
            fontWeight="700"
            textAlign="center"
            marginTop="5%"
            marginBottom="5%"
          >
            Customer success stories
          </Heading>
          <Flex>
            <Box
              // border="1px solid red"
              width="28%"
              height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              textAlign="left"
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
                fontSize="20px"
                fontWeight="600"
                marginTop="10%"
                marginRight="200px"
              >
                Moneytree's story
              </Button>
            </Box>

            <Box
              // border="1px solid red"
              width="28%"
              height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              textAlign="left"
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
                fontSize="20px"
                fontWeight="600"
                marginTop="10%"
                marginRight="200px"
              >
                Fitbit's story
              </Button>
            </Box>

            <Box
              width="28%"
              height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white"}}
              textAlign="left"

            >
              <Image
                src="https://web-static.wrike.com/content/uploads/2020/11/rebrand-quote-slider_logo_marketing-architects.svg?av=8136a9351ccfaa40814af5713139d937"
               
              ></Image>

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
                fontSize="20px"
                fontWeight="600"
                marginTop="10%"
                marginRight="70px"
              >
                Marketing Architects' story
              </Button>
            </Box>
          </Flex>
        </Stack>
        <Box
          border="3px solid green"
          width="80%"
          height="350px"
          margin="auto"
          marginTop="5%"
          borderRadius="10px"
        >
          <Stack
            // border="1px solid red"
            width="80%"
            margin="auto"
            marginTop="5%"
          >
            <Text
              fontSize="32px"
              lineHeight="52px"
              fontWeight="400"
              verticalAlign="baseline"
              textAlign="left"
            >
              "I've never seen a tool as easy to use, as easy to onboard new
              users, as easy to scale, and as easy to customize to your own
              workflow, process, team, clientele, and changing environment."
            </Text>
          </Stack>
          <Stack width="80%" margin="auto" marginTop="2%">
            <Flex gap="15%">
              <Text
                // border="1px solid red"
                fontSize="18px"
                lineHeight="32px"
                margin="19px 0px"
                fontWeight="400"

                // textAlign="left"
              >
                Cheryl Venable, Senior Manager of Operations, Creative Center,
                Sony Pictures Television
              </Text>
              <Image src="https://web-static.wrike.com/tp/storage/uploads/a570bb8c-fe99-4f8c-809c-8399431bf855/rebrand-quote-logo-sony-120x70.svg"></Image>
            </Flex>
          </Stack>
        </Box>
        <Button
          colorScheme="green"
          fontSize="2xl"
          width="15%"
          height="60px"
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
