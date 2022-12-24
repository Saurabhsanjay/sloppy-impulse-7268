import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Stape6 = () => {
  return (
    <div>
      <Box bg="rgb(235,237,245)">
        <Stack
          // border="1px solid red"
          maxW="55rem"
          margin="auto"
          spacing={8}
          textAlign="center"
          alignItems="center"
          p={1}
        >
          <Heading mb={4} color="black" fontWeight="bold" marginTop="5%">
            {" "}
            Explore more customizable features
          </Heading>
          <Text fontSize="xl" color="black">
            Work your way with Wrike’s powerful work management platform. Our
            versatile software has a wide range of features you can tailor to
            your team.
          </Text>
        </Stack>
        <Stack width="90%" margin="auto" marginTop="5%">
          <Flex gap="15px" direction={["column", "column", "row", "row"]}>
            <Box
              // border="1px solid red"
              width={{ base: "90%", sm: "90%", md: "35%", lg: "35%" }}
              // height="300px"
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
                variant="link"
                marginTop="5%"
                marginBottom="1rem"
                size="lg"
                colorScheme="teal"
                mt="24px"
              >
                Read more
              </Button>
            </Box>

            <Box
              // border="1px solid red"
              width={{ base: "90%", sm: "90%", md: "35%", lg: "35%" }}
              // height="300px"
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
                variant="link"
                marginTop="5%"
                marginBottom="1rem"
                size="lg"
                colorScheme="teal"
                mt="24px"
              >
                Read more
              </Button>
            </Box>

            <Box
              // border="1px solid red"
              width={{ base: "90%", sm: "90%", md: "35%", lg: "35%" }}
              // height="300px"
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
                variant="link"
                marginTop="5%"
                marginBottom="1rem"
                size="lg"
                colorScheme="teal"
                mt="24px"
                // border='1px solid red'

              >
                Read more
              </Button>
            </Box>
          </Flex>
        </Stack>
        <Button
          rightIcon={<ArrowForwardIcon />}
          variant="link"
          marginTop="5%"
          marginBottom="3rem"
          size="lg"
          colorScheme="teal"
          mt="24px"
        >
          See all features
        </Button>
      </Box>
    </div>
  );
};

export default Stape6;
