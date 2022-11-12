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

const Stape3 = () => {
  return (
    <div>
      <Box bg="rgb(255,255,255)">
        <Stack
          spacing={8}
          // border="2px solid red"
          textAlign="center"
          alignItems="center"
        >
          <Text
            fontSize="56px"
            w="60%"
            color="black"
            fontWeight="bold"
            marginTop="5%"
          >
            Experience the power of truly customizable software
          </Text>
          <Text fontSize="xl" w="55%" color="black">
            Whether you’re a marketer or an IT developer, Wrike’s custom item
            types feature will work for your team. Here’s a taster of the
            benefits it can bring.
          </Text>
        </Stack>

        <Stack width="90%" margin="auto" marginTop="5%">
          <Flex direction={["column", "column", "row", "row"]}>
            <Box
              // border="1px solid red"
              width={["90vw", "90vw", "90vw", "28vw"]}
              height="300px"
              margin="auto"
              textAlign="left"
            >
              <Image src="https://web-static.wrike.com/tp/storage/uploads/0cd44218-4f0b-4617-a4f9-48180e5f6e61/brandevo-icon-visualisation.svg"></Image>

              <Heading
                marginTop="8%"
                lineHeight="32%"
                fontSize="24px"
                fontWeight="700"
              >
                Boost visibility
              </Heading>

              <Text
                marginTop="8%"
                lineHeight="32px"
                fontWeight="400"
                fontSize="18px"
              >
                Keep track of meeting minutes, project files, and more with
                custom item types. Workspace members can view and access the
                information they need, be it a creative brief or a user story.
              </Text>
            </Box>
            <Box
              // border="1px solid red"
              width={["90vw", "90vw", "90vw", "28vw"]}
              height="300px"
              margin="auto"
              textAlign="left"
            >
              <Image src="https://web-static.wrike.com/tp/storage/uploads/0cd44218-4f0b-4617-a4f9-48180e5f6e61/brandevo-icon-items.svg"></Image>

              <Heading
                marginTop="8%"
                lineHeight="32%"
                fontSize="24px"
                fontWeight="700"
              >
                Reduce complexity
              </Heading>

              <Text
                marginTop="8%"
                lineHeight="32px"
                fontWeight="400"
                fontSize="18px"
              >
                Speak your team’s language. By configuring your workspace to
                match your distinctive style, you can eliminate any confusion
                associated with vague terminology and focus on your shared
                objectives.
              </Text>
            </Box>

            <Box
              // border="1px solid red"
              width={["90vw", "90vw", "90vw", "28vw"]}
              height="300px"
              margin="auto"
              textAlign="left"
            >
              <Image src="https://web-static.wrike.com/tp/storage/uploads/88bbe0a8-c70d-4e25-bcfa-1ec516324bd0/boost.svg"></Image>

              <Heading
                marginTop="8%"
                lineHeight="32%"
                fontSize="24px"
                fontWeight="700"
              >
                Increase efficiency
              </Heading>

              <Text
                marginTop="8%"
                lineHeight="32px"
                fontWeight="400"
                fontSize="18px"
              >
                Our powerful work item automation enables users to reduce admin
                tasks, saving valuable time. What’s more, our no-code workflows
                are easy to use, so you can hit the ground running.
              </Text>
            </Box>
          </Flex>
        </Stack>
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

export default Stape3;
