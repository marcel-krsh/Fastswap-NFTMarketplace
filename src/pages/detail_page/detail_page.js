/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */

import React, { useEffect } from "react";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/small_duke1.png";
import bnb1 from "../../images/bnb1.png";
import cover4 from "../../images/cover/cover-4.png";
import cover5 from "../../images/cover/cover-5.png";
import cover6 from "../../images/cover/cover-6.png";
import cover7 from "../../images/cover/cover-7.png";
import icon_logo from "../../images/icon_logo.png";
import detail_chart1 from "../../images/detail_chart1.png";
import Btn_Customize from "../../components/buttons/btn_container";
import Last_Drop from "../../components/carts/cart_drop";
import List_ULetter from "../../components/letters/list_uletter";
import { lightTheme, darkTheme } from "../../theme/theme";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Web3 from "web3";
import { NFT_MARKETPLACE_ABI } from "../../utils/abi";
import { CONTRACTS } from "../../utils/constants";

const Detail_Page = ({ ctheme }) => {
  const history = useHistory();
  const nftsIndex = parseInt(history.location.search.slice(1));
  const { nfts } = useSelector((store) => store.product);
  const mainData = nfts[nftsIndex];
  const { connector, account, activate, deactivate } = useWeb3React();
  useEffect(() => {
    console.log("------------------------");
    console.log(mainData);
  });
  if (mainData === undefined || mainData === null) {
    history.push("/");
    return <></>;
  }
  const handleBuyNow = async () => {
    window.web3 = new Web3(window.web3.currentProvider);
    const contract = await new window.web3.eth.Contract(NFT_MARKETPLACE_ABI, CONTRACTS.MARKETPLACE);
    const buy_nft = await contract.methods.buy(mainData.ids, mainData.price).send({ from: account });
    console.log(buy_nft);
  };
  const price_format = (payment, value) => {
    var temp;
    if (payment === "DUKE") {
      temp = value / Math.pow(10, 9);
    } else if (payment === "FAST") {
      temp = value / Math.pow(10, 18);
    } else if (payment === "BNB") {
      temp = value / Math.pow(10, 18);
    }

    if (temp >= 0) {
      return temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    } else {
      return temp;
    }
  };
  return (
    <StyledContainer ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme}>
      <Header1>
        <Header1_space display="flex" flex="1" justifyContent="space-between" marginLeft="20%" marginRight="20%">
          <HLetter>Overview</HLetter>
          <HLetter>Explore</HLetter>
          <HLetter>Rankings</HLetter>
          <HLetter>Activities</HLetter>
          <HLetter>Manage</HLetter>
        </Header1_space>
      </Header1>
      <Box display="flex" width="100%" marginTop="5%">
        <Detail_Img display="flex" marginLeft="5%" marginRight="5%" width="100%">
          <Box display="flex" flex="4" borderRadius="8px">
            <img src={mainData.img} width="100%" height="100%" borderRadius="8px"></img>
          </Box>
          <Box display="flex" flex="5" justifyContent="center">
            <Box display="flex" flexDirection="column" width="90%">
              <Box display="flex" flex="1" alignItems="center">
                <Box display="flex" mt={["10px", "20px"]} flex="1" justifyContent="flex-start" fontFamily="Work Sans" fontWeight="500" fontSize={["14px", "18px"]} color="#2BA55D">
                  Collection name
                </Box>
                <Box display="flex" flex="1" justifyContent="flex-end">
                  <FaShareAlt fontSize="18px" color="#757B75"></FaShareAlt>
                </Box>
              </Box>
              <Box display="flex" flex="2" flexDirection="column" marginTop="1%">
                <Img_Title1 display="flex" flex="1" fontFamily="Work Sans" fontWeight="800" fontSize={["20px", "30px", "34px"]} color="#363936" lineHeight={["20px", "30px", "40px"]} alignItems="center">
                  {/* NFT artwork titleNFT */}
                  {mainData.title}
                </Img_Title1>
                <Img_Title1 display="flex" flex="1" fontFamily="Work Sans" fontWeight="800" fontSize={["20px", "30px", "34px"]} color="#363936" lineHeight={["20px", "30px", "40px"]} alignItems="center">
                  artwork title
                </Img_Title1>
              </Box>
              <Box display="flex" flex="1" alignItems="center" marginTop="1%">
                <Box display="flex" flex="60" alignItems="center" justifyContent="center" fontFamily="Work Sans" fontSize="12px" fontWeight="400" color="#757B75">
                  Owned by{" "}
                </Box>
                <Box display="flex" flex="75" alignItems="center" justifyContent="center" fontFamily="Work Sans" fontSize="12px" fontWeight="400" color="#2BA55D">
                  User's name
                </Box>
                <Box display="flex" flex="95" alignItems="center" justifyContent="center" fontFamily="Work Sans" fontSize="12px" fontWeight="400" color="#757B75">
                  <MdRemoveRedEye fontSize="20px" />
                  {"\u00a0"}2.4 K views
                </Box>
                <Box display="flex" flex="95" alignItems="center" justifyContent="center" fontFamily="Work Sans" fontSize="12px" fontWeight="400" color="#757B75">
                  <FaHeart fontSize="20px" />
                  {"\u00a0"}201 favorited
                </Box>
                {/* <Box display="flex" flex="100" alignItems="center" justifyContent="center" fontFamily="Work Sans" fontSize="12px" fontWeight="500" color=""></Box> */}
              </Box>
              <Box display="flex" flex="2" flexDirection="column" marginTop="1%">
                <Box display="flex" flex="1" alignItems="flex-end" fontFamily="Work Sans" fontSize="10px" fontWeight="400" color="#757B75">
                  Lowest price
                </Box>
                <Box display="flex" flex="1" alignItems="flex-start" marginTop="10px">
                  <Box display="flex" alignItems="center">
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={mainData.payment_method === "DUKE" ? small_duke : mainData.payment_method === "FAST" ? icon_logo : mainData.payment_method === "BNB" ? bnb1 : ""} width="24px" height="24px" />
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" marginLeft="10px" fontFamily="Work Sans" fontSize={["14px", "18px"]} fontWeight="400" color="#131413">
                      {price_format(mainData.payment_method, mainData.price)}
                      {/* 200.1 FAST */}
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" marginLeft="10px" fontFamily="Work Sans" fontSize="12px" fontWeight="400" color="#757B75">
                      $4.05
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flex="2" alignItems="flex-start" marginTop="1%">
                <Btn_Customize
                  flexGrow={1}
                  marginTop={"20px"}
                  color={"white"}
                  back={"#2BA55D"}
                  width={"100%"}
                  height={"56px"}
                  border={"1px solid #2BA55D"}
                  str={"Buy now"}
                  borderRadius={"8px"}
                  onClick={() => {
                    handleBuyNow();
                  }}
                />
                {/* <Btn_Customize
                  flexGrow={1}
                  marginL={1}
                  color={"white"}
                  back={"#2BA55D"}
                  width={"100%"}
                  height={"56px"}
                  border={"1px solid #2BA55D"}
                  str={"Make an offer"}
                  borderRadius={"8px"}
                />
                <Btn_Customize
                  marginL={1}
                  color={"#2BA55D"}
                  back={"white"}
                  width={"100%"}
                  height={"56px"}
                  border={"1px solid #2BA55D"}
                  str={"Buy now"}
                  borderRadius={"8px"}
                  style={{maxWidth: 63}}
                /> */}
              </Box>
            </Box>
          </Box>
        </Detail_Img>
      </Box>
      <Box display="flex" width="100%">
        <Underline1 display="flex" marginLeft="5%" marginRight="5%" width="100%" marginTop="2%">
          <Box display="flex" flex="4" width="100%" justifyContent="flex-start">
            <Box display="flex" width="95%" flexDirection="column">
              <List_ULetter ctheme={ctheme} str={"Description"} width1={"100%"} height1={"40px"}></List_ULetter>
              <Box display="flex" flexDirection="column" marginTop="30px" width="100%">
                <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start" fontFamily="Work Sans" fontSize="18px" fontWeight="400" color="#363936">
                  Create by <Box color="#2BA55D">{"\u00a0"}username</Box>
                </Box>
                <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start" fontFamily="Work Sans" fontSize="18px" fontWeight="400" color="#363936">
                  {mainData.description}
                </Box>
              </Box>
              <List_ULetter ctheme={ctheme} str={"Property"} width1={"100%"} height1={"40px"}></List_ULetter>
              <List_ULetter ctheme={ctheme} str={"About this collection"} width1={"100%"} height1={"40px"}></List_ULetter>
              <List_ULetter ctheme={ctheme} str={"Details"} width1={"100%"} height1={"40px"}></List_ULetter>
            </Box>
          </Box>
          <Underline3 display="flex" flex="5" width="100%" justifyContent="center">
            <Underline2 display="flex" width="90%" flexDirection="column">
              <List_ULetter ctheme={ctheme} str={"Price history"} width1={"100%"} height1={"40px"}></List_ULetter>
              <Box display="flex">
                <img src={detail_chart1} width="100%" height="100%"></img>
              </Box>
            </Underline2>
          </Underline3>
        </Underline1>
      </Box>

      <Box display="flex" width="100%">
        <Box display="flex" marginLeft="5%" marginRight="5%" width="90%" marginTop="2%" flexDirection="column">
          <List_ULetter ctheme={ctheme} str={"Items activity"} width1={"100%"} height1={"40px"}></List_ULetter>
          <Drop_chart1>Need to make table here</Drop_chart1>
        </Box>
      </Box>

      <Box display="flex" width="100%">
        <Box display="flex" marginLeft="5%" marginRight="5%" width="90%" marginTop="2%" flexDirection="column">
          <List_ULetter ctheme={ctheme} str={"Other items in this collection"} width1={"100%"} height1={"40px"}></List_ULetter>
        </Box>
      </Box>

      <Part_Drop>
        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%">
          <Box display="flex" flexDirection="column" marginTop="2%">
            <Collection_Image display="flex" flex="1" marginBottom="2%">
              <Box display="flex" flex="1" marginRight="2%">
                <Last_Drop index={1} img={cover4} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1" marginRight="2%">
                <Last_Drop index={1} img={cover5} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1" marginRight="2%">
                <Last_Drop index={1} img={cover6} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop index={1} img={cover7} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
            </Collection_Image>
          </Box>
        </Box>
      </Part_Drop>
    </StyledContainer>
  );
};

const Collection_Image = styled(Box)`
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Underline1 = styled(Box)`
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Underline2 = styled(Box)`
  @media (max-width: 800px) {
    width: 95% !important;
  }
`;

const Underline3 = styled(Box)`
  @media (max-width: 800px) {
    justify-content: flex-start !important;
  }
`;

const Detail_Img = styled(Box)`
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Img_Title1 = styled(Box)`
  @media (max-width: 1000px) {
  }
`;

const Part_Drop = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
`;

const Drop_chart1 = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background: linear-gradient(273.64deg, rgba(187, 230, 204, 0.33) 3.14%, rgba(198, 231, 255, 0.31) 97.12%);
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: black;
  // color: ${({ ctheme, ltheme, dtheme }) => (ctheme ? "black" : "white")};
`;
const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: ${({ ctheme, ltheme, dtheme }) => (ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main)};
`;

const Header1_space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
`;

const HLetter = styled(Box)`
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #2ba55d;
  border-top: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    border-top: 4px solid #2ba55d;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

const Header1 = styled(Box)`
  display: flex;
  width: 100%;
`;
export default Detail_Page;
