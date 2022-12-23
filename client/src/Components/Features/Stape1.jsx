import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Stape1 = () => {
  return (
    <div>
      <Box
        // border="1px solid red"
        bg="rgb(23,31,56)"
        w="100%"
        p={2}
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
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="link"
            color="greenyellow"
            size="md"
            mt="24px"
          >
            All features
          </Button>

          <Heading mb={4} color="white" fontWeight="bold">
            {" "}
            Personalize Your Workspace With Custom Item Types
          </Heading>
          <Text fontSize="xl" color="white">
            Build a customizable library in your Wrike workspace and mirror the
            unique processes of your team, department, or company.
          </Text>
          <Button size="lg" colorScheme="green" mt="24px">
            Get Started
          </Button>
        </Stack>

        <Image
          // border="1px solid red"
          margin="auto"
          marginTop="8%"
          src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=1016,dpr=1/tp/storage/uploads/ef7bdc59-b416-4fe3-ae6a-674a01c02848/custom-item-types-media-2x.png"
          alt="image"
        />

        <Stack
          // border="1px solid red"
          w="80%"
          margin="auto"
          spacing={6}
          marginTop="8%"
          marginBottom="3%"
        >
          <Text
            color="white"
            // fontFamily="TT_Norms_Pro, -apple-system, BlinkMacSystemFont "
            fontSize="15"
            fontStyle="normal"
            fontWeight="10px"
            // fontWeight={600}
          >
            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
          </Text>
          <SimpleGrid minChildWidth="100px" spacing="20px">
            <Box height="100px">
              <Image
                width="100%"
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-google.svg"
              />
            </Box>
            <Box height="100px">
              <Image
                width="100%"
                src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos-white.svg"
              />
            </Box>
            <Box height="100px">
              <Image
                width="100%"
                src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-white-siemens.svg"
              />
            </Box>
            <Box height="100px">
              <Image
                width="100%"
                src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon-white.svg"
              />
            </Box>
            <Box height="100px">
              <Image
                width="100%"
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-oglivy.svg"
              />
            </Box>
            <Box height="100px">
              <Image
                width="100%"
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-snowflake-white.svg"
              />
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </div>
  );
};

export default Stape1;
