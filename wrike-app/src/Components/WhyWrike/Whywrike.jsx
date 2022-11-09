import React from "react";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  Input,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "./Whywrike.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
////////////////////////////////////////////
const Whywrike = () => {
  return (
    //////////////////---TOP-1 SECTION---/////////////////////////
    <>
      <Grid className="wRGrid_1">
        <GridItem margin={"auto"} w="87%" h="auto">
          <Box>
            <Text as="b" fontSize="5xl">
              Launch. Measure. Grow.
            </Text>
            <Text textAlign={"left"} margin={"10px"} fontSize="xl">
              Get the best results from your marketing campaigns <br /> and gain
              actionable insights with Wrike’s project <br /> management
              software for marketing.
            </Text>
          </Box>
          <Box
            display={"flex"}
            gap={3}
            marginTop={"20px"}
            className="wRGrid_1_box"
          >
            <Input placeholder="Enter Your Bussiness Email" w="60%" size="lg" />
            <Button size="lg" colorScheme="green">
              Start for Free
            </Button>
          </Box>
        </GridItem>
        <GridItem margin={"auto"} w="87%" h="auto">
          <Image
            src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=600,dpr=2/tp/storage/uploads/805f013e-dfbb-4a2e-abe5-3cc958f2dd83/rebrand-hero-illustration_teams_marketing_upd_2x.png"
            alt="Dan Abramov"
          />
        </GridItem>
      </Grid>
      {/* ////////////////////---TOP-2 SECTION---///////////////////////// */}
      <Text m="auto" mt={"60px"} fontSize="md">
        <b>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</b>
      </Text>
      <Grid className="wRGrid_2">
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg"
            alt="google"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg"
            alt="syneos"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg"
            alt="lyft"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg"
            alt="siemens"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg"
            alt="nickelodeon"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg"
            alt="oglivy"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg"
            alt="snowflake"
          />
        </GridItem>
      </Grid>
      <Box w="60%" m="auto" mt="60px">
        <Text fontSize={{ base: "24px", md: "25px", lg: "40px" }}>
          {" "}
          <b>Deliver high-performing campaigns on-time</b>{" "}
        </Text>
        <Text fontSize={{ base: "16px", md: "15px", lg: "20px" }}>
          Wrike’s marketing project management software gives you and your team
          complete visibility across all your campaigns. Monitor your social
          channels, track results, and communicate in one place.
        </Text>
      </Box>
      {/*/////////////////////-----TRIPPLE BOX-------////////////////////////*/}
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={18}
        m="auto"
        mt="70px"
        w="80%"
      >
        {/* ////////////////---1---/////////////// */}
        <GridItem>
          <Image
            mb="10px"
            src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-laptop-interface.svg"
            alt="laptop"
          />
          <Box textAlign="left" mb="10px">
            <Text mb="10px" fontSize={{ base: "20px", md: "22px", lg: "25px" }}>
              {" "}
              <b>Break down silos</b>{" "}
            </Text>
            <Text fontSize={{ base: "16px", md: "15px", lg: "20px" }}>
              Keep everyone on the same page. Centralize communication and make
              collaboration easier across the whole department.
            </Text>
          </Box>
        </GridItem>
        {/* ////////////////---2---/////////////// */}
        <GridItem>
          <Image
            mb="10px"
            src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-visibility-binoculars.svg"
            alt="visibility"
          />
          <Box textAlign="left" mb="10px">
            <Text mb="10px" fontSize={{ base: "20px", md: "22px", lg: "25px" }}>
              {" "}
              <b>Get complete visibility</b>{" "}
            </Text>
            <Text fontSize={{ base: "16px", md: "15px", lg: "20px" }}>
              Take a deep dive, or zoom out to a macro view. Wrike’s marketing
              project management software gives you a 360° view
            </Text>
          </Box>
        </GridItem>
        {/* ////////////////---3---/////////////// */}
        <GridItem>
          <Image
            mb="10px"
            src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-document-list-checkbox.svg"
            alt="checkbox"
          />
          <Box textAlign="left" mb="10px">
            <Text mb="10px" fontSize={{ base: "20px", md: "22px", lg: "25px" }}>
              {" "}
              <b>Demonstrate results</b>{" "}
            </Text>
            <Text fontSize={{ base: "16px", md: "15px", lg: "20px" }}>
              Monitor your social channels, track results, and communicate in
              one place for complete visibility across campaigns.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      {/* //////////////////////-------MIDDLE_1---------/////////////////////// */}
      <Grid className="wRMiddle_1">
        <Box w="60%" m="auto" mt="60px">
          <Text fontSize={{ base: "24px", md: "25px", lg: "40px" }} mb="10px">
            {" "}
            <b>Everything you need to succeed</b>{" "}
          </Text>
          <Text fontSize={{ base: "12px", md: "15px", lg: "20px" }} mb="30px">
            Unify your marketing processes, streamline communication, and
            turbocharge your results. Marketing project management helps you
            achieve your goals on many levels, from increasing visibility over
            tasks to ensuring team members have the information they need.
          </Text>
        </Box>
        {/*********************VIDEO WITH DATA--1************************* */}
        <Grid
          w="85%"
          m="auto"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={20}
          mt="40px"
          className="wRvideo_1"
        >
          <GridItem className="video_GridItem_left">
            <video
              type="video/mp4"
              title="naruto"
              src="https://cdn.wrike.com/video/LP_Animation_Custom-workflows.mp4"
              autoPlay
              controls
            />
          </GridItem>
          <GridItem className="video_GridItem_text_left">
            <Text
              fontSize={{ base: "16px", md: "20px", lg: "25px" }}
              mb="10px"
              id="Mid_Text"
            >
              {" "}
              <b>Work how you like to work</b>{" "}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={{ base: "13px", md: "15px", lg: "16px" }}
              mb="30px"
            >
              Project management for marketing is not “one size fits all.” From
              varying personas to using agile versus waterfall, every team is
              different. <br />
              <br /> Wrike’s customizable workflows and statuses mean you can
              eliminate the process guessing game and get more out the door,
              faster.
            </Text>
          </GridItem>
        </Grid>
        {/*********************VIDEO WITH DATA--2************************* */}
        <Grid
          w="85%"
          m="auto"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={20}
          mt="40px"
          className="wRvideo_1"
        >
          <GridItem className="video_GridItem_text_right">
            <Text
              fontSize={{ base: "16px", md: "20px", lg: "25px" }}
              mb="10px"
              id="Mid_Text"
            >
              {" "}
              <b>Keep everyone informed</b>{" "}
            </Text>
            <Text
              textAlign={"right"}
              fontSize={{ base: "13px", md: "15px", lg: "16px" }}
              mb="30px"
            >
              Quit having to dig around for that one statistic you saw in an
              email thread to roll up into your executive update. <br />
              <br /> Wrike’s marketing project management offers dynamic reports
              that allow you to gather and visualize the business intelligence
              you need quickly.
            </Text>
          </GridItem>
          <GridItem className="video_GridItem_right">
            <video
              type="video/mp4"
              title="naruto"
              src="https://cdn.wrike.com/video/LP_Animation_Reports.mp4"
              autoPlay
              controls
            />
          </GridItem>
        </Grid>
        {/*********************VIDEO WITH DATA--3************************* */}
        <Grid
          w="85%"
          m="auto"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(1,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={20}
          mt="40px"
          className="wRvideo_1"
        >
          <GridItem className="video_GridItem_left">
            <video
              controls
              autoPlay
              type="video/mp4"
              title="naruto"
              src="https://cdn.wrike.com/video/LP_Animation_Proofing.mp4"
            />
          </GridItem>
          <GridItem className="video_GridItem_text_left">
            <Text
              fontSize={{ base: "16px", md: "20px", lg: "25px" }}
              mb="10px"
              id="Mid_Text"
            >
              {" "}
              <b>Review assets at lightning speed</b>{" "}
            </Text>
            <Text
              textAlign={"left"}
              fontSize={{ base: "13px", md: "15px", lg: "16px" }}
              mb="30px"
            >
              Comment directly on images, videos, HTML, and more so your team
              gets full context for your feedback. (No more guessing!) <br />
              <br /> With Wrike, your team knows exactly what you mean with your
              proofing feedback and can act on it to dramatically cut down on
              review cycles.
            </Text>
          </GridItem>
        </Grid>
        <Box mt={"4rem"}>
          <Text as="b" fontSize={{ base: "25px", md: "30px", lg: "35px" }}>
            Drive results with the most versatile work <br /> management
            platform
          </Text>
        </Box>
        {/* ////////////////////------DROP-DOWN-------///////////////////////////////// */}
        <Grid className="wRdrop_down">
          <Accordion >
            <AccordionItem className="AccordionItem" >
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1" textAlign="left">
                    Get quick performance insights
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
                Take control of your data insights with Wrikes first-ot-its-kind
                performancce aggregator acros 50 Tools . Turn data into
                optimization.
                <br />
                <br />
                Wrike Insights delivers powerful real-time data across
                advertising,marketing,and social media,gathered in one simple
                interface
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1" textAlign="left">
                    Gain clarity for all projects
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
                Take control of your data insights with Wrikes first-ot-its-kind
                performancce aggregator acros 50 Tools . Turn data into
                optimization.
                <br />
                <br />
                Wrike Insights delivers powerful real-time data across
                advertising,marketing,and social media,gathered in one simple
                interface
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1" textAlign="left">
                    Eliminate burnout
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
                Take control of your data insights with Wrikes first-ot-its-kind
                performancce aggregator acros 50 Tools . Turn data into
                optimization.
                <br />
                <br />
                Wrike Insights delivers powerful real-time data across
                advertising,marketing,and social media,gathered in one simple
                interface
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton>
                  <Box as="b" flex="1" textAlign="left">
                    Automate approvals
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
                Take control of your data insights with Wrikes first-ot-its-kind
                performancce aggregator acros 50 Tools . Turn data into
                optimization.
                <br />
                <br />
                Wrike Insights delivers powerful real-time data across
                advertising,marketing,and social media,gathered in one simple
                interface
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="AccordionItem">
              <h2>
                <AccordionButton >
                  <Box as="b" flex="1" textAlign="left">
                    Simplify asset publication
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left">
                Take control of your data insights with Wrikes first-ot-its-kind
                performancce aggregator acros 50 Tools . Turn data into
                optimization.
                <br />
                <br />
                Wrike Insights delivers powerful real-time data across
                advertising,marketing,and social media,gathered in one simple
                interface
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* <GridItem className="slidShow">2 */}
          {/* <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})` ,"width":'100%'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div> */}
          {/* </GridItem> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Whywrike;

const slideImages = [
  {
    url: 'https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-wfmp-social-media-performance-2x.png',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-space-2x.png',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-workload-2x.png',
    caption: 'Slide 3'
  },
  {
    url: 'https://www.wrike.com/tp/storage/uploads/507a7b19-1718-4b5a-b735-e4df7178b090/rebrand-screenshot-approval-2x.png',
    caption: 'Slide 3'
  },
  {
    url: 'https://www.wrike.com/tp/storage/uploads/rebrand-screenshot-attach-to-task-2x.png',
    caption: 'Slide 3'
  },
];
