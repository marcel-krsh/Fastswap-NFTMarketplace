import { VscColorMode } from "react-icons/vsc";
import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';
import cover_big1 from '../../images/cover/cover_big1.png';
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

import Btn_Customize from "../../components/buttons/btn_container"
import Hot_Collection from "../../components/carts/cart_collection"
import Last_Drop from "../../components/carts/cart_drop"
import Img_Letter from "../../components/letters/img_letter"
import { lightTheme, darkTheme } from "../../theme/theme"

const Mainpage = ({ctheme}) => {

    return (
        <StyledContainer ctheme={ctheme?1:0} ltheme={lightTheme} dtheme={darkTheme}>
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
            <Part_Header>
                <Box display="flex" flex="1" flexDirection="column" marginTop="120px" marginLeft="100px">
                    <Box display="flex" flex="4" flexDirection="column" width="100%">
                        <Box display="flex" flex="1"></Box>
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" fontSize="72px" fontWeight="bold" lineHeight="80px" fontFamily="Work Sans" color={ctheme? lightTheme.font_color1: darkTheme.font_color1}>Collect </Box>
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" fontSize="72px" fontWeight="bold" lineHeight="80px" fontFamily="Work Sans" color={ctheme? lightTheme.font_color1: darkTheme.font_color1}>digital art</Box>
                    </Box>
                    <Box display="flex" flex="1" width="100%">
                        <Box display="flex" justifyContent="flex-start" alignItems="center" fontSize="20px" fontFamily="Work Sans" color={ctheme? lightTheme.font_color_grey: darkTheme.font_color_grey}>Buy and Sell NFTs on Binance Smart Chain</Box>
                    </Box>
                    <Box display="flex" flex="4" justifyContent="flex-start" alignItems="flex-start" paddingTop="50px" width="100%">
                        <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'164px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore'} borderRadius={'8px'} />
                        <Btn_Customize display="flex" color={'#2BA55D'} back={'white'} width={'164px'} height={'56px'} border={'1px solid #2BA55D'} str={'Create'} borderRadius={'8px'} marginL={'24px'} />
                    </Box>
                </Box>
                <Box display="flex" flex="1" flexDirection="column" marginTop="120px" marginLeft="50px" width="100%">
                    <Box display="flex" flex="3" alignItems="center" marginBottom="20px" width="100%">
                        <Box width="16px" height="16px" borderRadius="100%" bgcolor="#2BA55D"></Box>
                        <Box marginLeft="10px" font="Work Sans" fontSize="18px" fontWeight="bold" color={ctheme? lightTheme.font_color1: darkTheme.font_color1}>Auction in progress</Box>
                    </Box>
                    <Box display="flex" flex="9" alignItems="center" width="100%">
                        <img src={cover_big1} width="80%" height="100%" />
                    </Box>
                    <Box display="flex" flex="3" flexDirection="column" marginTop="15px" width="80%">
                        <Box display="flex" flex="1" flexDirection="column">
                            <Box display="flex" flex="1">
                                <Box display="flex" flex="5" justifyContent="flex-start" alignItems="center" color={ctheme? lightTheme.font_color_grey: darkTheme.font_color_grey} fontFamily="Work Sans" fontSize="12px">Artist</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme? lightTheme.font_color_grey: darkTheme.font_color_grey}fontFamily="Work Sans" fontSize="12px">Current</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme? lightTheme.font_color_grey: darkTheme.font_color_grey} fontFamily="Work Sans" fontSize="12px">Action Ends in</Box>
                            </Box>
                            <Box display="flex" flex="2" marginTop="10px">
                                <Box display="flex" flex="5" justifyContent="flex-start" alignItems="center" color={ctheme? lightTheme.font_color1: darkTheme.font_color1} fontFamily="Work Sans" fontSize="18px">
                                    <img src={small_ellipse} width="24px" height="24px" ></img>{`\u00a0`}{`\u00a0`}creator name
                                </Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme? lightTheme.font_color1: darkTheme.font_color1} fontFamily="Work Sans" fontSize="18px">$22.2K</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme? lightTheme.font_color1: darkTheme.font_color1} fontFamily="Work Sans" fontSize="18px">hh:mm:ss</Box>
                            </Box>
                        </Box>
                        <Box display="flex" flex="1"></Box>

                    </Box>

                </Box>
            </Part_Header>
            <Part_Collection>
                <Box display="flex" flexDirection="column" marginLeft="100px" marginRight="100px">
                    <Img_Letter letter={'Hot collections 🔥'} ctheme={ctheme}/>
                    <Box display="flex" marginTop="30px" justifyContent="space-between">
                        <Hot_Collection img={cover} simg={small_ellipse} title={'Kingkoog'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1"></Hot_Collection>
                        <Hot_Collection img={cover1} simg={small_ellipse} title={'Sunny Showers'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1"></Hot_Collection>
                        <Hot_Collection img={cover2} simg={small_ellipse} title={'The future'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1"></Hot_Collection>
                        <Hot_Collection img={cover3} simg={small_ellipse} title={'Joe Home'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1"></Hot_Collection>
                    </Box>
                </Box>
            </Part_Collection>
            <Part_Drop>
                <Box display="flex" flexDirection="column" marginLeft="100px" marginRight="100px">
                    <Img_Letter letter={'Latest drops 🚀'} ctheme={ctheme}/>
                    <Box display="flex" flexDirection="column" marginTop="30px">
                        <Box display="flex" flex="1" justifyContent="space-between" marginBottom="30px">
                            <Last_Drop img={cover4} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover6} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover7} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                        </Box>
                        <Box display="flex" flex="1" justifyContent="space-between" marginBottom="30px">
                            <Last_Drop img={cover8} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover9} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover10} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover11} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                        </Box>
                        <Box display="flex" flex="1" justifyContent="space-between" marginBottom="13px">
                            <Last_Drop img={cover12} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover13} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover14} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            <Last_Drop img={cover15} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                        </Box>
                    </Box>
                    <Box marginTop="150px" display="flex" justifyContent="center">
                        <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'230px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore more'} borderRadius={'8px'} />

                    </Box>
                </Box>
            </Part_Drop>
            <Part_Foot>

            </Part_Foot>
        </StyledContainer>
    );
};

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

const Header1 = styled(Box)`
    display: flex;
    width:100%;
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: ${({ctheme, ltheme, dtheme})=> ctheme? ltheme.bgcolor_main: dtheme.bgcolor_main};
`

const Part_Header = styled(Box)`
    display: flex;
    width: 100%;
`

const Part_Collection = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:100px;
    flex-direction: column;
`

const Part_Drop = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:100px;
    flex-direction: column;

`

const Part_Foot = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:100px;
    flex-direction: column;

`

export default Mainpage;