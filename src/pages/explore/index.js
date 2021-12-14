import React, { useState } from "react";
import styledComp from "styled-components";
import { Box, Table, TableHead, TableBody, TableCell, TableRow, styled, Button } from "@material-ui/core";
import { CgSortAz } from "react-icons/cg";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaHandPaper, FaTag } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { IoSwapVerticalOutline } from "react-icons/io5";
import { VscLinkExternal } from "react-icons/vsc";
import { SimpleSwitch } from "../../components/elements/index";
import { DropDown, DropDownItem } from "../../components/elements/dropdown";
import { lightTheme, darkTheme } from "../../theme/theme";

import { PageTitile, PageTitileContent, HeaderCard, HeaderCardBase, MainCard } from "./index.component";
import NFTImage1 from "../../images/cover/cover-3.png";
import TokenImage from "../../images/small_duke1.png";

const CardImages = [require("../../images/explore/1.png").default, require("../../images/explore/2.png").default, require("../../images/explore/3.png").default, require("../../images/explore/4.png").default, require("../../images/explore/5.png").default, require("../../images/explore/6.png").default, require("../../images/explore/7.png").default, require("../../images/explore/8.png").default, require("../../images/explore/9.png").default, require("../../images/explore/10.png").default, require("../../images/explore/11.png").default, require("../../images/explore/12.png").default, require("../../images/explore/13.png").default];

const ExplorePage = ({ ctheme }) => {
  return (
    <Box px={[6, 7, 9, 11]} maxWidth={1010}>
      <Box mt={6} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        <HeaderCardBase>
          <PageTitile>Explore</PageTitile>
          <PageTitileContent>Buy the finest NFT’s on Binance Smart Chain</PageTitileContent>
        </HeaderCardBase>
        <HeaderCard>
          <img src={CardImages[0]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[1]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[2]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[3]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[4]} alt="" />
        </HeaderCard>
      </Box>
      <Box mt={[2, 4, 6, 8]} display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"} gridGap={24}>
        <TypeSelector>Sale type</TypeSelector>
        <TypeSelector mr="auto">Price</TypeSelector>
        <DropDown text={"Recently Added"} color="#757B75">
          <DropDownItem>Select option-1</DropDownItem>
          <DropDownItem>Select option-2</DropDownItem>
          <DropDownItem>Select option-3</DropDownItem>
        </DropDown>
      </Box>
      <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </Box>
      <Box mt={6} mb={9} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        <NormalBtn variant="contained">Load more</NormalBtn>
      </Box>
    </Box>
  );
};

const NormalBtn = styledComp(
  styled(Button)({
    backgroundColor: "#2BA55D",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    textTransform: "initial",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 48,
    paddingRight: 48,
    "&:hover": {
      backgroundColor: "#3FBF6F",
    },
  })
)``;

const TypeSelector = ({ mt, mr }) => {
  const [isCollapse, setCollapse] = useState(true);
  return (
    <Box mt={mt} mr={mr} position={"relative"} display={"flex"} flexDirection={"column"} border={"1px solid #CECECE"} borderRadius={8}>
      <Box display={"flex"} alignItems={"stretch"}>
        <Box px={2} py={2} display={"flex"} alignItems={"center"}>
          <SimpleSwitch />
        </Box>
        <Box
          flexGrow={1}
          pr={2}
          display={"flex"}
          alignItems={"center"}
          css={{ cursor: "pointer", gridGap: "10px" }}
          onClick={() => {
            setCollapse(!isCollapse);
          }}
        >
          <Box mr={"auto"} fontFamily={"Poppins"} fontSize={["12px", "16px", "18px"]} lineHeight={["20px", "30px", "34px"]} fontWeight={"normal"} color={"#01070B"} letterSpacing={"0.5px"}>
            Types
          </Box>
          <Box fontSize={24} color={"#363936"} display={"flex"} alignItems={"center"} css={{ transform: `rotate(${isCollapse ? `0deg` : `180deg`})` }}>
            <TiArrowSortedDown />
          </Box>
        </Box>
      </Box>
      <Box position={"absolute"} top={"100%"} bgcolor={"white"} maxHeight={isCollapse ? "0px" : "100vh"} overflow={"hidden"} css={{ transition: "300ms" }}>
        <Box border={"1px solid #CECECE"} borderRadius={8}>
          <Box px={2} py={2} display={"flex"} alignItems={"center"}>
            <Box color={"#363936"} fontFamily={"Poppins"}>
              {"each.name"}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExplorePage;
