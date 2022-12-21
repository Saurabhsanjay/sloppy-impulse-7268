import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Stape6 = () => {
  return (
    <div>
      <Box bg="rgb(235,237,245)">
        <Stack
          spacing={8}
          // border="2px solid red"
          textAlign="center"
          alignItems="center"
        >
          <Text
            fontSize="40px"
            w="60%"
            color="black"
            fontWeight="bold"
            marginTop="5%"
          >
            Explore more customizable features
          </Text>
          <Text fontSize="20px" w="55%" color="black" textAlign="left">
            Work your way with Wrike’s powerful work management platform. Our
            versatile software has a wide range of features you can tailor to
            your team.
          </Text>
        </Stack>
        <Stack width="80%" margin="auto" marginTop="5%">
          <Flex gap="20px">
            <Box
              // border="1px solid red"
              width="30%"
              height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              lineHeight="25px"
              textAlign="left"
            >
              <Text fontSize="15px" fontWeight="400" letterSpacing="normal">
                PROFESSIONAL SERVICES
              </Text>

              <Heading
                fontSize="20px"
                fontWeight="600"
                marginTop="2%"
                marginBottom="2%"
              >
                Enterprise Service Management
              </Heading>

              <Text fontSize="16px" fontWeight="400" letterSpacing="normal">
                Wrike's ESM template has multiple custom item types to get you
                started, from Service Requests to Knowledge Base Articles and
                Customer Surveys.
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
                Read more
              </Button>
            </Box>

            <Box
              // border="1px solid red"
              width="30%"
              height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              lineHeight="25px"
              textAlign="left"
            >
              <Text fontSize="15px" fontWeight="400" letterSpacing="normal">
                PROFESSIONAL SERVICES
              </Text>

              <Heading
                fontSize="20px"
                fontWeight="600"
                marginTop="2%"
                marginBottom="2%"
              >
                Enterprise Service Management
              </Heading>

              <Text
                fontSize="16px"
                fontWeight="400"
                letterSpacing="normal"
                textAlign="left"
              >
                Wrike's ESM template has multiple custom item types to get you
                started, from Service Requests to Knowledge Base Articles and
                Customer Surveys.
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
                Read more
              </Button>
            </Box>

            <Box
              // border="1px solid red"
              width="30%"
              height="300px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "rgb(4,69,77)", color: "white" }}
              lineHeight="25px"
              textAlign="left"
            >
              <Text fontSize="15px" fontWeight="400" letterSpacing="normal">
                PROFESSIONAL SERVICES
              </Text>

              <Heading
                fontSize="20px"
                fontWeight="600"
                marginTop="2%"
                marginBottom="2%"
              >
                Enterprise Service Management
              </Heading>

              <Text
                fontSize="16px"
                fontWeight="400"
                letterSpacing="normal"
                textAlign="left"
              >
                Wrike's ESM template has multiple custom item types to get you
                started, from Service Requests to Knowledge Base Articles and
                Customer Surveys.
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
                Read more
              </Button>
            </Box>
          </Flex>
        </Stack>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="link"
          lineHeight="20px"
          fontSize="20px"
          fontWeight="600"
          marginTop="3%"
          marginRight="70px"
          marginBottom="5%"
        >
          See all features
        </Button>
      </Box>
    </div>
  );
};

export default Stape6;
