import { Box,Text,Stack,Button,Grid, SimpleGrid ,Input, Image, GridItem} from '@chakra-ui/react'
 import React, { Component } from "react";
 import Slider from "react-slick";
 
 export default class Responsive extends Component {
   render() {
     var settings = {
       dots: true,
       infinite: false,
       speed: 300,
       slidesToShow: 4,
       slidesToScroll: 4,
       initialSlide: 0,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
     };
     return (
       <div>
          
         <Slider {...settings}>
           <div>
             <h3><Text id="g1" fontSize="23px" ml="-150px" as="b">Wrike Blog</Text>
          <Text className='d2' color='gray'>Tips stories, and new approaches 
          <br />to work management,<br />collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br />
          <br />
          <Image  width="250px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-6.png'/></h3>
           </div>
           <div>
             <h3> <Text id="g2" fontSize="23px" ml="-60px" as="b">Educational Guides</Text>
          <Text  className='d2' color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
         <br />
         <br />
         <br />
          <Image  width="250px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-4.png'/></h3>
           </div>
           <div>
             <h3> <Text id="g3" fontSize="23px" ml="-164px" as="b">Webinars</Text>
          <Text className='d2'  color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image  width="250px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards.png'/></h3>
           </div>
           <div>
             <h3>  <h3> <Text id="g4" fontSize="23px" ml="-71px" as="b">Computer Success</Text>
          <Text className='d2'  color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image  width="250px" marginTop="-4px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-3.png'/></h3></h3>
           </div>
           <div>
             <h3>  <h3> <Text id='g3' fontSize="23px" ml="-160px" as="b">Templates</Text>
          <Text className='d2'  color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image  width="250px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-2.png'/></h3></h3>
           </div>
           

           <div>
             <h3>  <h3> <Text id='g5' fontSize="23px" ml="-110px" as="b">Wrike Discover</Text>
          <Text className='d2'  color='gray'>Tips stories, and new approaches <br /> to work management, <br /> collaboration, productivity, and <br /> more. Gain insights from highly <br /> effective teams and emerging <br /> work trends</Text>
          <br />
          <br/>
          <br/>
          

          <Image width="250px" src='https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=216,dpr=2/tp/storage/uploads/09835002-f546-4f93-ad5e-0b9fd3114ba3/image-example-swipe-cards-1.png'/></h3></h3>
           </div>
           
           
         </Slider>
       </div>
     );
   }
 }
 