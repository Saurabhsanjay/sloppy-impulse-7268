
 import { Box, Image } from "@chakra-ui/react";
 
 const ImageSlider = ({ slides }) => {
   return (
     <Box infiniteLoop>
       {slides.map((slide) => {
         return <Image src={slide.image} height="auto" width="800px" />;
       })}
     </Box>
   );
 };
 
 export default ImageSlider;
 
 