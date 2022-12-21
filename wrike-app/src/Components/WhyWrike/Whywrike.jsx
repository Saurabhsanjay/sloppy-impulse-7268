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
import { Slideshow } from "./Slider";
import imageSS from "./Assets/live.jpg";
import { SliderTwo } from "./SliderTwo";
/////////////////////////////////////////////

const Whywrike = () => {
  return (
    <>
      {/* ////////////////////////--------Launch. Measure. Grow.---//////////////////////// */}
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
      {/* //////////////////---Trusted by 20,000+ organisations worldeide---//////////////// */}
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
        {/* ////////////////////////---Deliver high-performing campaigns on-time---///////////////////////// */}

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
      {/*//////////////////////////////////-------Tripple box-------///////////////////////////*/}
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
      {/* /////////////////-------Everything you need to succeed---------///////////////////// */}
      <Box className="wRMiddle_1">
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
              controls
              autoPlay
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
        <Box className="wRdrop_down">
          <Accordion>
            <AccordionItem
              className="AccordionItem"
              _hover={{ color: "white", bg: "rgb(4,69,77)" }}
            >
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

            <AccordionItem
              _hover={{ color: "white", bg: "rgb(4,69,77)" }}
              className="AccordionItem"
            >
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
            <AccordionItem
              _hover={{ color: "white", bg: "rgb(4,69,77)" }}
              className="AccordionItem"
            >
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
            <AccordionItem
              _hover={{ color: "white", bg: "rgb(4,69,77)" }}
              className="AccordionItem"
            >
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
            <AccordionItem
              _hover={{ color: "white", bg: "rgb(4,69,77)" }}
              className="AccordionItem"
            >
              <h2>
                <AccordionButton>
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
          <Box w={[300, 400, 550]} mt="-20px">
            <Slideshow />
          </Box>
        </Box>
      </Box>
      {/* ///////////------Optimize digital ROI with real-time performance data-----////////// */}
      <Grid className="wRMiddle_2">
        <GridItem mt="2rem">
          <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=256,dpr=3/tp/storage/uploads/a8756fa9-3a03-4349-ae3f-8723e452fde5/rebrand-screenshot_WfMP-table-campaign-ROI_2x-1.png" />
        </GridItem>
        <GridItem
          textAlign={{ base: "", md: "", lg: "left" }}
          mt={{ base: "-2rem", md: "", lg: "6rem" }}
          mb={{ base: "2rem", md: "", lg: "" }}
        >
          <Text as="b" fontSize={{ base: "25px", md: "25px", lg: "30px" }}>
            Optimize digital ROI with real-time performance data
          </Text>
          <br />
          <br />
          <Text fontSize={{ base: "15px", md: "17px", lg: "20px" }}>
            Our game-changing marketing project management <br /> software now
            delivers instant insights into your digital <br /> marketing
            performance across more than 50 channels with <br /> a few clicks,
            right where work happens. No analysts, BI tools, <br /> or
            spreadsheets needed.
            <br />
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </Text>
        </GridItem>
      </Grid>
      {/* ///////////////////-------Templates to get you started------//////////////////////// */}
      <Grid w={"70%"} m={"auto"}>
        <Text
          mt={"2rem"}
          as="b"
          fontSize={{ base: "27px", md: "30px", lg: "35px" }}
        >
          Templates to get you started
        </Text>
        <br />
        <Text fontSize={{ base: "15px", md: "17px", lg: "22px" }}>
          Our templates help you get the most out of your marketing project
          management software.
        </Text>
      </Grid>
      {/* //////////////////////////------Six small box pt-ONE-------////////////////////////// */}
      <Grid className="wRMiddle_4">
        <GridItem
          padding={"1.5em"}
          border={"1px solid rgb(213, 236, 228)"}
          borderRadius={"15px"}
          backgroundColor="rgb(213, 236, 228)"
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            MARKETING
          </Text>
          <br />
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Campaign Management
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "17px"]}>
            No matter what you're planning for your campaigns ,
            <br /> managing them from dtart to finish is a breeze with <br />{" "}
            Wrike
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
        {/* ------------------------------- */}
        <GridItem
          padding={"1.5em"}
          border={"1px solid rgb(213, 236, 228)"}
          borderRadius={"15px"}
          backgroundColor="rgb(213, 236, 228)"
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            MARKETING
          </Text>
          <br />
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Campaign Management
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "17px"]}>
            No matter what you're planning for your campaigns ,
            <br /> managing them from dtart to finish is a breeze with <br />{" "}
            Wrike
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
        {/* ------------------------------- */}
        <GridItem
          padding={"1.5em"}
          border={"1px solid rgb(213, 236, 228)"}
          borderRadius={"15px"}
          backgroundColor="rgb(213, 236, 228)"
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            MARKETING
          </Text>
          <br />
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Campaign Management
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "17px"]}>
            No matter what you're planning for your campaigns ,
            <br /> managing them from dtart to finish is a breeze with <br />{" "}
            Wrike
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
        {/* ------------------------------- */}
        <GridItem
          padding={"1.5em"}
          border={"1px solid rgb(213, 236, 228)"}
          borderRadius={"15px"}
          backgroundColor="rgb(213, 236, 228)"
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            MARKETING
          </Text>
          <br />
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Campaign Management
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "17px"]}>
            No matter what you're planning for your campaigns ,
            <br /> managing them from dtart to finish is a breeze with <br />{" "}
            Wrike
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
        {/* ------------------------------- */}
        <GridItem
          padding={"1.5em"}
          border={"1px solid rgb(213, 236, 228)"}
          borderRadius={"15px"}
          backgroundColor="rgb(213, 236, 228)"
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            MARKETING
          </Text>
          <br />
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Campaign Management
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "17px"]}>
            No matter what you're planning for your campaigns ,
            <br /> managing them from dtart to finish is a breeze with <br />{" "}
            Wrike
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
        {/* ------------------------------- */}
        <GridItem
          padding={"1.5em"}
          border={"1px solid rgb(213, 236, 228)"}
          borderRadius={"15px"}
          backgroundColor="rgb(213, 236, 228)"
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            MARKETING
          </Text>
          <br />
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Campaign Management
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "17px"]}>
            No matter what you're planning for your campaigns ,
            <br /> managing them from dtart to finish is a breeze with <br />{" "}
            Wrike
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
      </Grid>
      {/* //////////////////-------Streamline the way you work--------///////////////////////// */}
      <Grid className="wRend_1">
        <GridItem>
          <Image src={imageSS} />
        </GridItem>
        <GridItem
          textAlign={{ base: "", md: "", lg: "left" }}
          mt={{ base: "-1rem", md: "", lg: "7rem" }}
          mb={{ base: "2rem", md: "", lg: "" }}
        >
          <Text as="b" fontSize={["9px", "12px", "14px"]}>
            INTEGRATION
          </Text>
          <br />
          <Text as="b" fontSize={["20px", "25px", "35px"]}>
            Streamline the way you work
          </Text>
          <br />
          <br />
          <Text fontSize={["13px", "15px", "19px"]}>
            Switching between dozens of apps only wastes your team’s <br /> time
            and delays projects. Get work-related information right <br /> in
            your Wrike workspace while still using the tools you love.
          </Text>
          <br />
          <Text as={"b"} fontSize="lg" color="green">
            See who we work with →{" "}
          </Text>
        </GridItem>
      </Grid>
      {/* ////////////////////////////------End slid show------/////////////////////////////// */}
      <SliderTwo />
      {/* /////////////////////////----------Six small box pt-TWO--------////////////////////// */}
      <Box backgroundColor={"yellow.50"} paddingBottom={"3em"}>
        <Box m="auto" mt={["4em", "4em", "6em"]} w={["70%", "80%", "70%"]}>
          <Text as="b" fontSize={["20px", "25px", "35px"]}>
            Achieve more with these marketing project management resources
          </Text>
        </Box>
        {/* ////////////////////------END_BOXES------/////////////////// */}
        <Grid className="wRendBoxes">
          <GridItem
            padding={"1.5em"}
            border={"1px solid rgb(213, 236, 228)"}
            borderRadius={"15px"}
            backgroundColor="rgb(213, 236, 228)"
          >
            <Text as="b" fontSize={["9px", "12px", "14px"]}>
              MARKETING
            </Text>
            <br />
            <Text as="b" fontSize={["13px", "16px", "19px"]}>
              Campaign Management
            </Text>
            <br />
            <br />
            <Text fontSize={["13px", "15px", "17px"]}>
              No matter what you're planning for your campaigns ,
              <br /> managing them from dtart to finish is a breeze with <br />{" "}
              Wrike
            </Text>
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </GridItem>
          {/* ------------------------------- */}
          <GridItem
            padding={"1.5em"}
            border={"1px solid rgb(213, 236, 228)"}
            borderRadius={"15px"}
            backgroundColor="rgb(213, 236, 228)"
          >
            <Text as="b" fontSize={["9px", "12px", "14px"]}>
              MARKETING
            </Text>
            <br />
            <Text as="b" fontSize={["13px", "16px", "19px"]}>
              Campaign Management
            </Text>
            <br />
            <br />
            <Text fontSize={["13px", "15px", "17px"]}>
              No matter what you're planning for your campaigns ,
              <br /> managing them from dtart to finish is a breeze with <br />{" "}
              Wrike
            </Text>
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </GridItem>
          {/* ------------------------------- */}
          <GridItem
            padding={"1.5em"}
            border={"1px solid rgb(213, 236, 228)"}
            borderRadius={"15px"}
            backgroundColor="rgb(213, 236, 228)"
          >
            <Text as="b" fontSize={["9px", "12px", "14px"]}>
              MARKETING
            </Text>
            <br />
            <Text as="b" fontSize={["13px", "16px", "19px"]}>
              Campaign Management
            </Text>
            <br />
            <br />
            <Text fontSize={["13px", "15px", "17px"]}>
              No matter what you're planning for your campaigns ,
              <br /> managing them from dtart to finish is a breeze with <br />{" "}
              Wrike
            </Text>
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </GridItem>
          {/* ------------------------------- */}
          <GridItem
            padding={"1.5em"}
            border={"1px solid rgb(213, 236, 228)"}
            borderRadius={"15px"}
            backgroundColor="rgb(213, 236, 228)"
          >
            <Text as="b" fontSize={["9px", "12px", "14px"]}>
              MARKETING
            </Text>
            <br />
            <Text as="b" fontSize={["13px", "16px", "19px"]}>
              Campaign Management
            </Text>
            <br />
            <br />
            <Text fontSize={["13px", "15px", "17px"]}>
              No matter what you're planning for your campaigns ,
              <br /> managing them from dtart to finish is a breeze with <br />{" "}
              Wrike
            </Text>
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </GridItem>
          {/* ------------------------------- */}
          <GridItem
            padding={"1.5em"}
            border={"1px solid rgb(213, 236, 228)"}
            borderRadius={"15px"}
            backgroundColor="rgb(213, 236, 228)"
          >
            <Text as="b" fontSize={["9px", "12px", "14px"]}>
              MARKETING
            </Text>
            <br />
            <Text as="b" fontSize={["13px", "16px", "19px"]}>
              Campaign Management
            </Text>
            <br />
            <br />
            <Text fontSize={["13px", "15px", "17px"]}>
              No matter what you're planning for your campaigns ,
              <br /> managing them from dtart to finish is a breeze with <br />{" "}
              Wrike
            </Text>
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </GridItem>
          {/* ------------------------------- */}
          <GridItem
            padding={"1.5em"}
            border={"1px solid rgb(213, 236, 228)"}
            borderRadius={"15px"}
            backgroundColor="rgb(213, 236, 228)"
          >
            <Text as="b" fontSize={["9px", "12px", "14px"]}>
              MARKETING
            </Text>
            <br />
            <Text as="b" fontSize={["13px", "16px", "19px"]}>
              Campaign Management
            </Text>
            <br />
            <br />
            <Text fontSize={["13px", "15px", "17px"]}>
              No matter what you're planning for your campaigns ,
              <br /> managing them from dtart to finish is a breeze with <br />{" "}
              Wrike
            </Text>
            <br />
            <Text as={"b"} fontSize="lg" color="green">
              See who we work with →{" "}
            </Text>
          </GridItem>
        </Grid>
      </Box>
      {/* ////////////////////////////----------THE_END----------////////////////////////////// */}
      <Grid className="theEnd" m={"auto"} mt={["1em", "1em", "2em"]}>
        <GridItem>
          <Text as="b" fontSize={["13px", "16px", "19px"]}>
            Powerful marketing project management software
          </Text>
          <br />
          <br />
        </GridItem>
        <GridItem>
          <Text as="b" fontSize={["19px", "26px", "36px"]}>
            Create your highest-performing campaigns yet
          </Text>
        </GridItem>
        <br />
        <GridItem>
          <Box display={"flex"} gap={3} className="wRGrid_end_box">
            <Input placeholder="Enter Your Bussiness Email" size="lg" />
            <Button size="lg" colorScheme="green">
              Start for Free
            </Button>
          </Box>
        </GridItem>
        <br />
        <br />
      </Grid>

      <hr />
    </>
  );
};

export default Whywrike;
