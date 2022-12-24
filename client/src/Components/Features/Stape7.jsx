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

const Stape7 = () => {
  return (
    <div>
      <Box bg="rgb(23,31,56)" p={1}>
        <Flex margin="auto">
          <Box width="40%" marginTop={15}>
            <Image
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "block",
              }}
              width="100%"
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=488,dpr=1/tp/static/assets/img/raster/dark/1.png?v2"
            ></Image>
          </Box>
          <Box width="100%" w="100%" p={1} marginBottom={10} boxSize="large">
            <Stack
              // border="1px solid red"
              maxW="55rem"
              margin="auto"
              spacing={8}
              textAlign="center"
              alignItems="center"
            >
              <Heading mb={4} color="white" fontWeight="bold" marginTop="5%">
                {" "}
                Why wait? Try Wrike today for free
              </Heading>
              <Text fontSize="xl" color="white">
                Explore custom item types and Wrike’s other innovative features
                with a free two-week trial — no credit card required.
              </Text>
              <Button size="lg" colorScheme="green" mt="24px">
                Get Started
              </Button>
            </Stack>
          </Box>
          <Box width="40%" marginTop={20}>
            <Image
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "block",
              }}
              boxSize="100%"
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=488,dpr=1/tp/static/assets/img/raster/dark/2.png?v2"
            ></Image>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Stape7;
