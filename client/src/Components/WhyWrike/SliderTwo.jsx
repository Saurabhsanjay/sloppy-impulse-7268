import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "./Assets/s1.jpg";
import imageTwo from "./Assets/s2.jpg";
import imageThree from "./Assets/s3.jpg";

///////////////////////////////////////////////
export const SliderTwo = () => {
  return (
    <Box m={"auto"} mt="3em" w={"90%"}>
      <Slider autoplay={true} autoplaySpeed={1900} dots initialSlide={0}>
        <Box>
          <Box>
            <Image
              src={imageOne}
              alt="img1"
              width="100%"
              height={["23vh", "40vh", "70vh"]}
            />
          </Box>
        </Box>

        <Box>
          <Image
            src={imageTwo}
            alt="img2"
            width="100%"
            height={["23vh", "40vh", "70vh"]}
          />
        </Box>
        <Box>
          <Image
            src={imageThree}
            alt="img3"
            width="100%"
            height={["23vh", "40vh", "70vh"]}
          />
        </Box>
      </Slider>
    </Box>
  );
};
