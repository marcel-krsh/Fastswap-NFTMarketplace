import { VscColorMode } from "react-icons/vsc";
import React from "react";
import { FaTwitter, FaTelegram, FaShareAlt } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';
import cover_big1 from '../../images/cover/collection_header.png';
import small_ellipse from "../../images/small_ellipse2.png"
import small_duke from "../../images/small_duke1.png";
import cover from "../../images/cover/cover.png";
import cover1 from "../../images/cover/cover-1.png";
import cover2 from "../../images/cover/cover-2.png";
import cover3 from "../../images/cover/cover-3.png";
import cover4 from "../../images/cover/cover-4.png";
import cover5 from "../../images/cover/cover-5.png";
import cover6 from "../../images/cover/cover-6.png";
import cover7 from "../../images/cover/cover-7.png";
import cover8 from "../../images/cover/cover-8.png";
import cover9 from "../../images/cover/cover-9.png";
import cover10 from "../../images/cover/cover-10.png";
import cover11 from "../../images/cover/cover-11.png";
import cover12 from "../../images/cover/cover-12.png";
import cover13 from "../../images/cover/cover-13.png";
import cover14 from "../../images/cover/cover-14.png";
import cover15 from "../../images/cover/cover-15.png";
import bnb1 from "../../images/bnb1.png";

import Btn_Customize from "../../components/buttons/btn_container"
import Hot_Collection from "../../components/carts/cart_collection"
import Last_Drop from "../../components/carts/cart_drop"
import Img_Letter from "../../components/letters/img_letter"
import { lightTheme, darkTheme } from "../../theme/theme"


const Collection_page = ({ ctheme }) => {

    return (
        <StyledContainer ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme}>
            <Header1>
                <Box display="flex" flex="1"></Box>
                <Box display="flex" flex="3" justifyContent="space-between">
                    <HLetter>Overview</HLetter>
                    <HLetter>Explore</HLetter>
                    <HLetter>Rankings</HLetter>
                    <HLetter>Activities</HLetter>
                    <HLetter>Manage</HLetter>
                </Box>
                <Box display="flex" flex="1"></Box>
            </Header1>
            <Show_Detail>
                <Box display="flex" flex="1" marginLeft="100px" marginTop="120px" flexDirection="column" marginRight="100px" position="relative">
                    <Box display="flex" flex="210" width="100%" >
                        <img src={cover_big1} width="100%" height="210px"></img>
                    </Box>
                    <Box display="flex" flex="50" marginTop="10px">
                        <Box display="flex" flex="3"></Box>
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center">
                            <Box marginRight="20px"><FaTwitter fontSize="20px" color="grey" /></Box>
                            <Box marginRight="20px"><RiMessage3Fill fontSize="20px" color="grey" /></Box>
                            <Box marginRight="20px"><FaTelegram fontSize="20px" color="grey" /></Box>
                            <Box><FaShareAlt fontSize="20px" color="grey" /></Box>
                        </Box>
                    </Box>
                    <Box position="absolute" bottom="0px" left="10%">
                        <img src={small_ellipse} width="88px" height="88px"></img>
                    </Box>
                </Box>
                <Box display="flex" flex="1" marginLeft="100px" marginRight="100px" marginTop="20px" >
                    <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginLeft="100px">
                        <Box alignItems="flex-start" fontFamily="Work Sans" fontSize="24px" fontWeight="600"><span>Collection name</span></Box>
                        <Box fontFamily="Work Sans" fontSize="18px" color="#363936" lineHeight="22px">
                            <pre>Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Placerat praesent in dictum <br />
                                arcu consequat. Porttitor nisl enim dictum ut <br />
                                non consectetur euismod. Aliquam lorem <br />
                                neque, lobortis neque arcu.</pre>
                        </Box>
                    </Box>
                    <Box display="flex" flex="1" justifyContent="center" alignItems="center">
                        <Box display="flex" width="80%" height="62px" border="1px solid #CECECE" borderRadius="8px">
                            <Box display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                                <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Work Sans" fontWeight="800">
                                    7
                                </Box>
                                <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Work Sans" color="#757B75">
                                    Items
                                </Box>
                            </Box>
                            <Box display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                                <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Work Sans" fontWeight="800">
                                    $9,251
                                </Box>
                                <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Work Sans" color="#757B75">
                                    Floor price
                                </Box>
                            </Box>
                            <Box display="flex" flex="1.2" flexDirection="column">
                                <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Work Sans" fontWeight="800">
                                    <img src={bnb1} width="16px" height="16px"/>{'\u00a0'}424.1K
                                </Box>
                                <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Work Sans" color="#757B75">
                                    voL traded
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Show_Detail>
            <Show_Items>
                <Box display="flex" marginLeft="100px" marginRight="100px" marginTop="50px" borderBottom="1px solid #CECECE" width="100%">
                    <LItem marginRight="30px">Items</LItem>
                    <LItem1>Activity</LItem1>
                </Box>
            </Show_Items>
            <Box display="flex" marginTop="50px" width="100%">
                <Box display="flex" marginLeft="100px" marginRight="100px" width="100%">
                    <Box display="flex" flex="1" alignItems="center">
                        <Btn_Customize color={'white'} back={'#2BA55D'} width={'83px'} height={'32px'} border={'1px solid #2BA55D'} str={'All 7'} borderRadius={'8px'} />
                    </Box>
                    <Box display="flex" flex="2" fontSize="16px" fontFamily="Work Sans" fontWeight="600" alignItems="center" justifyContent="center">On auction 4</Box>
                    <Box display="flex" flex="1" fontSize="16px" fontFamily="Work Sans" fontWeight="600" alignItems="center">Sold 3</Box>
                    <Box display="flex" flex="5"></Box>
                    <Box display="flex" flex="3" alignItems="center" justifyContent="flex-end">
                        <Btn_Customize color={'#757B75'} back={'white'} width={'187px'} height={'32px'} border={'1px solid #757B75'} str={'Price - lowest'} borderRadius={'8px'} />
                    </Box>
                </Box>
            </Box>
            <Part_Drop>
                <Box display="flex" flexDirection="column" marginLeft="100px" marginRight="100px">
                    <Box display="flex" flexDirection="column" marginTop="30px">
                        <Box display="flex" flex="1" justifyContent="space-between" marginBottom="30px">
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                        </Box>
                        <Box display="flex" flex="1" justifyContent="space-between" marginBottom="30px">
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                        </Box>
                    </Box>
                </Box>
            </Part_Drop>

        </StyledContainer>
    );
};

const Part_Drop = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:20px;
    flex-direction: column;

`
const LItem = styled(Box)`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #757B75;
    border-bottom: 4px solid rgba(0,0,0,0);
    &:hover{
        color: #2BA55D;
        border-bottom: 4px solid #2BA55D;
    }
`

const LItem1 = styled(Box)`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #757B75;
    border-bottom: 4px solid rgba(0,0,0,0);
    &:hover{
        color: #2BA55D;
        border-bottom: 4px solid #2BA55D;
    }
`

const Show_Items = styled(Box)`
    width:100%;
    display: flex;
`

const Show_Detail = styled(Box)`
    width:100%;
    display: flex;
    height:520px;
    flex-direction: column;
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: ${({ ctheme, ltheme, dtheme }) => ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
`

const Header1 = styled(Box)`
    display: flex;
    width:100%;
`
const HLetter = styled(Box)`
    display: flex;
    height:34px;
    justify-content: center;
    align-items: center;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #2BA55D;
    border-top: 4px solid rgba(0,0,0,0);
    &:hover{
        border-top: 4px solid  #2BA55D;
        cursor: pointer;
    }
`

export default Collection_page;