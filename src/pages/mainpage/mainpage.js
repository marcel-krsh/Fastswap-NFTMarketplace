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


const Mainpage = ({ ctheme }) => {

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
            <Part_Header>
                <Box display="flex" flex="1" flexDirection="column" marginTop="5%" marginLeft="5%" marginRight="5%">
                    <Left_img_letter display="flex" flex="4" flexDirection="column" width="100%" fontSize="72px">
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" fontWeight="bold" lineHeight="80px" fontFamily="Work Sans" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>Collect </Box>
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" fontWeight="bold" lineHeight="80px" fontFamily="Work Sans" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>digital art</Box>
                    </Left_img_letter>
                    <Left_img_letter1 display="flex" flex="1" width="100%" fontSize="20px">
                        <Box display="flex" justifyContent="flex-start" alignItems="center" fontFamily="Work Sans" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey}>Buy and Sell NFTs on Binance Smart Chain</Box>
                    </Left_img_letter1>
                    <Box display="flex" flex="4" justifyContent="flex-start" alignItems="flex-start" marginTop="5%" width="100%">
                        <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'40%'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore'} borderRadius={'8px'} />
                        <Btn_Customize display="flex" color={'#2BA55D'} back={'white'} width={'40%'} height={'56px'} border={'1px solid #2BA55D'} str={'Create'} borderRadius={'8px'} marginL={'24px'} />
                    </Box>
                </Box>
                <Box display="flex" flex="1" flexDirection="column" marginTop="5%" marginLeft="5%" marginRight="5%">
                    <Box display="flex" flex="3" alignItems="center" marginBottom="20px" width="100%">
                        <Box width="16px" height="16px" borderRadius="100%" bgcolor="#2BA55D"></Box>
                        <Box marginLeft="10px" font="Work Sans" fontSize="18px" fontWeight="bold" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>Auction in progress</Box>
                    </Box>
                    <Box display="flex" flex="9" alignItems="center" width="100%">
                        <img src={cover_big1} width="100%" height="100%" />
                    </Box>
                    <Box display="flex" flex="3" flexDirection="column" marginTop="15px" width="100%">
                        <Box display="flex" flex="1" flexDirection="column">
                            <Img_down_letter display="flex" flex="1" fontSize="12px">
                                <Box display="flex" flex="5" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey} fontFamily="Work Sans" >Artist</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey} fontFamily="Work Sans" >Current</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey} fontFamily="Work Sans" >Action Ends in</Box>
                            </Img_down_letter>
                            <Img_down_letter1 display="flex" flex="2" marginTop="10px" fontSize="18px">
                                <Box display="flex" flex="5" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1} fontFamily="Work Sans">
                                    <img src={small_ellipse} width="24px" height="24px" ></img>{`\u00a0`}{`\u00a0`}creator name
                                </Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1} fontFamily="Work Sans" >$22.2K</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1} fontFamily="Work Sans">hh:mm:ss</Box>
                            </Img_down_letter1>
                        </Box>
                        <Box display="flex" flex="1"></Box>

                    </Box>

                </Box>
            </Part_Header>
            <Part_Collection>
                <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%">
                    <Img_Letter letter={'Hot collections 🔥'} ctheme={ctheme} />
                    <Collection_Image display="flex" marginTop="2%">
                        <Box display="flex" flex="1" marginRight="2%">
                            <Hot_Collection img={cover} simg={small_ellipse} title={'Kingkoog'} price={'$13.369'} ctheme={ctheme} ></Hot_Collection>
                        </Box>
                        <Box display="flex" flex="1" marginRight="2%">
                            <Hot_Collection img={cover1} simg={small_ellipse} title={'Sunny Showers'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1" ></Hot_Collection>

                        </Box>
                        <Box display="flex" flex="1" marginRight="2%">
                            <Hot_Collection img={cover2} simg={small_ellipse} title={'The future'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1" ></Hot_Collection>

                        </Box>
                        <Box display="flex" flex="1">
                            <Hot_Collection img={cover3} simg={small_ellipse} title={'Joe Home'} price={'$13.369'} ctheme={ctheme} display="flex" flex="1"></Hot_Collection>

                        </Box>
                    </Collection_Image>
                </Box>
            </Part_Collection>

            <Part_Drop>
                <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%">
                    <Img_Letter letter={'Latest drops 🚀'} ctheme={ctheme} />
                    <Box display="flex" flexDirection="column" marginTop="2%">
                        <Collection_Image display="flex" flex="1" marginBottom="2%">
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover4} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover6} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1">                            <Last_Drop img={cover7} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                        </Collection_Image>
                        <Collection_Image display="flex" flex="1" marginBottom="2%">
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover8} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover9} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover10} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1">                            <Last_Drop img={cover11} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                        </Collection_Image>
                        <Collection_Image display="flex" flex="1" marginBottom="2%">
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover12} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover13} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">                            <Last_Drop img={cover14} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" >                            <Last_Drop img={cover15} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                        </Collection_Image>
                    </Box>
                    <Box marginTop="150px" display="flex" justifyContent="center">
                        <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'230px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore more'} borderRadius={'8px'} />

                    </Box>
                </Box>
            </Part_Drop>
            {/* 
            <Part_Foot> 

            </Part_Foot>*/}
        </StyledContainer>
    );
};


const Collection_Image = styled(Box)`
    flex-direction: row;

    @media (max-width: 600px) {
        flex-direction: column;
    }


`

const Header1_space = styled(Box)`
@media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
}
    @media (max-width: 800px) {
        margin-left: 5% !important;
        margin-right: 5% !important;
    }
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
    @media (max-width: 1000px) {
        font-size: 12px;
    }
    @media (max-width: 800px) {
        font-size: 12px;
    }
    @media (max-width: 600px) {
        font-size: 8px;
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
    background: ${({ ctheme, ltheme, dtheme }) => ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
`

const Left_img_letter = styled(Box)`
@media (max-width: 1200px) {
    font-size: 60px !important;
}
@media (max-width: 1000px) {
    font-size: 72px !important;
}
@media (max-width: 600px) {
    font-size: 50px !important;
}
`

const Left_img_letter1 = styled(Box)`
@media (max-width: 1200px) {
    font-size: 14px !important;
}
@media (max-width: 1000px) {
    font-size: 20px !important;
}
@media (max-width: 600px) {
    font-size: 14px !important;
}
`

const Img_down_letter = styled(Box)`

    @media (max-width: 1200px) {
        font-size: 7px !important;
    }
    @media (max-width: 800px) {
        font-size: 12px !important;
    }
    @media (max-width: 600px) {
        font-size: 9px !important;
    }
`

const Img_down_letter1 = styled(Box)`

    @media (max-width: 1200px) {
        font-size: 10px !important;
    }
    @media (max-width: 800px) {
        font-size: 18px !important;
    }
    @media (max-width: 600px) {
        font-size: 12px !important;
    }
`
const Part_Header = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: row;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const Part_Collection = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:5%;
    flex-direction: column;
`

const Part_Drop = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:5%;
    flex-direction: column;

`

const Part_Foot = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:5%;
    flex-direction: column;

`

export default Mainpage;