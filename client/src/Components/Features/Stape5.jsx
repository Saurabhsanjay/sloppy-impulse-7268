import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Stape5 = () => {
  return (
    <>
      <Box bg="rgb(255,255,255)">
        <Stack width="90%" margin="auto" p={1}>
          <Heading
            mb={4}
            fontSize="30px"
            color="black"
            fontWeight="bold"
            marginTop="5%"
            marginBottom="5%"
          >
            {" "}
            Try custom item types with these templates{" "}
          </Heading>
        </Stack>
        <Stack
          width="90%"
          margin="auto"
          marginBottom="5%"
          // border="1px solid red"
        >
          <Flex gap="15px" direction={["column", "column", "row", "row"]}>
            <Box
              // border="1px solid red"
              width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}
              height="400px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "green.50" }}
              lineHeight="25px"
              textAlign="left"
            >
              <Image
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=389,dpr=1/tp/storage/uploads/5f7737d7-8acb-4624-bb16-ccd7488f35b5/rebrand-cover-templates-esm-2x.png"
                _hover={{ boxShadow: "dark-lg" }}
                borderRadius="10px"
                marginBottom="5%"
                width="100%"
              ></Image>

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
            </Box>

            <Box
              // border="1px solid red"
              width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}
              height="400px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "green.50" }}
              lineHeight="25px"
              textAlign="left"
            >
              <Image
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=323,dpr=1/tp/storage/uploads/7029d90e-fed2-4d37-a5ae-86b0a3149188/rebrand-cover-templates-okr-template2x.png"
                _hover={{ boxShadow: "dark-lg" }}
                borderRadius="10px"
                marginBottom="5%"
                width="100%"
              ></Image>

              <Text fontSize="15px" fontWeight="400" letterSpacing="normal">
                PROJECT MANAGEMENT
              </Text>

              <Heading
                fontSize="20px"
                fontWeight="600"
                marginTop="2%"
                marginBottom="2%"
              >
                Strategic Planning
              </Heading>

              <Text fontSize="16px" fontWeight="400" letterSpacing="normal">
                Take control of your company strategy with this OKR template.
                Custom item types include Objectives, Key Results, Action Items,
                and Deliverables.
              </Text>
            </Box>

            <Box
              // border="1px solid red"
              width={{ base: "90%", sm: "90%", md: "40%", lg: "30%" }}
              height="400px"
              margin="auto"
              p={5}
              borderRadius="15px"
              bg="rgb(255,255,255)"
              _hover={{ bg: "green.50" }}
              lineHeight="25px"
              textAlign="left"
            >
              <Image
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=389,dpr=1/tp/storage/uploads/rebrand-cover-templates-agile-teamwork-2x.jpg"
                _hover={{ boxShadow: "dark-lg" }}
                borderRadius="10px"
                marginBottom="5%"
                width="100%"
              ></Image>

              <Text fontSize="15px" fontWeight="400" letterSpacing="normal">
                AGILE
              </Text>

              <Heading
                fontSize="20px"
                fontWeight="600"
                marginTop="2%"
                marginBottom="2%"
              >
                Agile Teamwork
              </Heading>

              <Text fontSize="16px" fontWeight="400" letterSpacing="normal">
                This template has all the custom item types your Agile team
                could ever need, including Bugs, Epics, Features, Sprints, and
                Stories.
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Stape5;
