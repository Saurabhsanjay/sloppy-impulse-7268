import React from "react";
 import { Box, Image,Text } from "@chakra-ui/react";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 
 export const SlideData = () => {
   return (
    
     <Box marginLeft="50px" border="1px solid red" width="22%">
       <Slider>
         <Box>
         <Text  fontSize="23px" ml="-120px" as="b">Wrike Blog</Text>
          <Text className='d2' color='gray'>Tips stories, and new approaches 
          <br />to work management,<br />collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br />
          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-6.png'/>
        </Box>

        <Box>
          <br />


        <Text fontSize="23px" ml="-30px" as="b">Educational Guides</Text>
          <Text  className='d2' color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
         <br />
         <br />
         <br />
          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-4.png'/>
          </Box>

          <Box>
          <br/>
        <Text fontSize="23px" ml="-140px" as="b">Webinars</Text>
          <Text className='d2'  color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards.png'/>
          </Box>
          <Box>
          <br/>
        <Text fontSize="23px" ml="-40px" as="b">Computer Success</Text>
          <Text className='d2'   color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br/>
          <Image src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-3.png'/>
          
         </Box>
       </Slider>
     </Box>
   );
 };
 