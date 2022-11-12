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
      <Box bg="rgb(23,31,56)" height="400px">
        <Flex margin="auto">
          <Box width="40%" height="400px">
            <Image
              width="100%"
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=488,dpr=1/tp/static/assets/img/raster/dark/1.png?v2"
            ></Image>
          </Box>
          <Box width="100%">
            <Heading
              fontSize="40px"
              fontWeight="600"
              marginTop="8%"
              marginBottom="2%"
              color="white"
            >
              Why wait? Try Wrike today for free
            </Heading>

            <Text color="white" fontSize="20px" marginTop="5%">
              Explore custom item types and Wrike’s other innovative features
              with a free two-week trial — no credit card required.
            </Text>
            <Button
              colorScheme="green"
              fontSize="2xl"
              width="20%"
              height="60px"
              //   marginBottom="5%"
              marginTop="7%"
            >
              Get Started
            </Button>
          </Box>
          <Box width="40%" height="400px">
            <Image
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
