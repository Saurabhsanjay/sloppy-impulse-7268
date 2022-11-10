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
        <Stack width="90%" margin="auto"  >
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
            >
              <Image
                src="https://web-static.wrike.com/tp/storage/uploads/5c0c9dfb-b4ad-472c-a2f6-aefcf3d2f628/rebrand-quote-slider-logo-money-tree-invert.svg"
                border="1px solid red"
              ></Image>
              <Flex align="flex-start">
                <Heading
                  marginTop="10%"
                  lineHeight="32%"
                  fontSize="50px"
                  fontWeight="700"
                >
                  75%
                </Heading>
              </Flex>
              <Flex align="flex-start">
                <Text
                  marginTop="10%"
                  lineHeight="32px"
                  fontWeight="400"
                  fontSize="18px"
                >
                  faster project delivery
                </Text>
              </Flex>
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
            >
              <Image
                src="https://web-static.wrike.com/tp/storage/uploads/5c0c9dfb-b4ad-472c-a2f6-aefcf3d2f628/rebrand-quote-logo-fitbit-invert.svg"
                border="1px solid red"
              ></Image>
              <Flex align="flex-start">
                <Heading
                  marginTop="10%"
                  lineHeight="32%"
                  fontSize="50px"
                  fontWeight="700"
                >
                  200+
                </Heading>
              </Flex>
              <Flex align="flex-start">
                <Text
                  marginTop="10%"
                  lineHeight="32px"
                  fontWeight="400"
                  fontSize="18px"
                >
                  hours saved
                </Text>
              </Flex>
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
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
            >
              <Image
                src="https://web-static.wrike.com/tp/storage/uploads/5c0c9dfb-b4ad-472c-a2f6-aefcf3d2f628/rebrand-quote-slider-logo-marketing-architects-2-invert.svg"
                border="1px solid red"
              ></Image>
              <Flex align="flex-start">
                <Heading
                  marginTop="10%"
                  lineHeight="32%"
                  fontSize="50px"
                  fontWeight="700"
                >
                  40%
                </Heading>
              </Flex>
              <Flex align="flex-start">
                <Text
                  marginTop="10%"
                  lineHeight="32px"
                  fontWeight="400"
                  fontSize="18px"
                >
                  more efficient processes
                </Text>
              </Flex>
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
      </Box>
    </div>
  );
};

export default Stape4;
