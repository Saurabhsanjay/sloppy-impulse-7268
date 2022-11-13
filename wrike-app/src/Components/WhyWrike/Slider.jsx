import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slideshow = () => {
  return (
    <Box width={"100%"} m="auto">
      <Slider autoplay={true} autoplaySpeed={1900} dots initialSlide={0}>
        <Box>
          <Image
            src="https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-wfmp-social-media-performance-2x.png"
            alt="img1"
            w="100%"
            h={["30vh", "40vh", "70vh"]}
          />
        </Box>

        <Box>
          <Image
            src="https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-space-2x.png"
            alt="img2"
            w="100%"
            h={["30vh", "40vh", "70vh"]}
          />
        </Box>
        <Box>
          <Image
            src="https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-workload-2x.png"
            alt="img3"
            w="100%"
            h={["30vh", "40vh", "70vh"]}
          />
        </Box>
        <Box>
          <Image
            src="https://www.wrike.com/tp/storage/uploads/507a7b19-1718-4b5a-b735-e4df7178b090/rebrand-screenshot-approval-2x.png"
            w="100%"
            h={["30vh", "40vh", "70vh"]}
          />
        </Box>
        <Box>
          <Image
            src="https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-attach-to-task-2x.png"
            w="100%"
            h={["30vh", "40vh", "70vh"]}
          />
        </Box>
      </Slider>
    </Box>
  );
};
