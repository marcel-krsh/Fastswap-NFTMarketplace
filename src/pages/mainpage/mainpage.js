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

const Mainpage = () => {

    return (
        <StyledContainer>
            <Part_Header>
                <Box display="flex" flex="1" flexDirection="column" marginTop="150px">
                    <Box display="flex" flex="1" flexDirection="column">
                        <Box display="flex" flex="9" justifyContent="flex-start" alignItems="flex-end" fontSize="82px" fontWeight="bold" lineHeight="80px" fontFamily="Work Sans, sans-serif" color="black">Collect </Box>
                        <Box display="flex" flex="4" justifyContent="flex-start" alignItems="center" fontSize="82px" fontWeight="bold" lineHeight="80px" fontFamily="Work Sans, sans-serif" color="black">digital art</Box>
                        <Box display="flex" flex="2" justifyContent="flex-start" alignItems="flex-end" fontSize="20px" fontFamily="Work Sans, sans-serif" color="#363936">Buy and Sell NFTs on Binance Smart Chain</Box>
                    </Box>
                    <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-start" paddingTop="50px">
                        <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'164px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore'} borderRadius={'8px'} />
                        <Btn_Customize display="flex" color={'#2BA55D'} back={'color'} width={'164px'} height={'56px'} border={'1px solid #2BA55D'} str={'Create'} borderRadius={'8px'} marginL={'30px'} />
                    </Box>
                </Box>
                <Box display="flex" flex="1" flexDirection="column" marginLeft="100px" marginTop="150px">
                    <Box display="flex" flex="3" alignItems="flex-end" marginBottom="20px">
                        <Box width="16px" height="16px" borderRadius="100%" bgcolor="#2BA55D"></Box>
                        <Box marginLeft="10px" color="black" font="Work Sans, sans-serif" fontSize="18px" fontWeight="bold">Auction in progress</Box>
                    </Box>
                    <Box display="flex" flex="6" alignItems="center">
                        <img src={cover_big1} width="400px" height="400px" />

                    </Box>
                    <Box display="flex" flex="2" alignItems="flex-start" marginTop="20px">
                        <Box display="flex" flex="3" flexDirection="column">
                            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontFamily="Work Sans, sans-serif" fontSize="12px">Artist</Box>
                            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontFamily="Work Sans, sans-serif" fontSize="18px" marginTop="10px">
                                <img src={small_ellipse} width="24px" height="24px" ></img>Creator Name
                            </Box>
                        </Box>
                        <Box display="flex" flex="2" flexDirection="column">
                            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontFamily="Work Sans, sans-serif" fontSize="12px">Current Bid</Box>
                            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontFamily="Work Sans, sans-serif" fontSize="18px" marginTop="10px">$22.2K</Box>
                        </Box>
                        <Box display="flex" flex="5" flexDirection="column">
                            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontFamily="Work Sans, sans-serif" fontSize="12px">Action Ends in</Box>
                            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" color="black" fontFamily="Work Sans, sans-serif" fontSize="18px" marginTop="10px">hh:mm:ss</Box>
                        </Box>
                    </Box>

                </Box>
            </Part_Header>
            <Part_Collection>
                <Img_Letter letter={'Hot collections 🔥'} />
                <Box display="flex" justifyContent="space-between" marginTop="30px">
                    <Hot_Collection img={cover} simg={small_ellipse} title={'Kingkoog'} price={'$13.369'}></Hot_Collection>
                    <Hot_Collection img={cover1} simg={small_ellipse} title={'Sunny Showers'} price={'$13.369'}></Hot_Collection>
                    <Hot_Collection img={cover2} simg={small_ellipse} title={'The future'} price={'$13.369'}></Hot_Collection>
                    <Hot_Collection img={cover3} simg={small_ellipse} title={'Joe Home'} price={'$13.369'}></Hot_Collection>
                </Box>

            </Part_Collection>
            <Part_Drop>
                <Img_Letter letter={'Latest drops 🚀'} />
                <Box display="flex" flexDirection="column" marginTop="30px">
                    <Box display="flex" flex="1" justifyContent="space-between" marginBottom="30px">
                        <Last_Drop img={cover4} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover6} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover7} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                    </Box>
                    <Box display="flex" flex="1" justifyContent="space-between" marginBottom="30px">
                        <Last_Drop img={cover8} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover9} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover10} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover11} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                    </Box>
                    <Box display="flex" flex="1" justifyContent="space-between" marginBottom="13px">
                        <Last_Drop img={cover12} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover13} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover14} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                        <Last_Drop img={cover15} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'}></Last_Drop>
                    </Box>
                </Box>
                <Box marginTop="150px" display="flex" justifyContent="center">
                    <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'230px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore more'} borderRadius={'8px'} />

                </Box>

            </Part_Drop>
            <Part_Foot>

            </Part_Foot>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

const Part_Header = styled(Box)`
    display: flex;
    width: 80%;
`

const Part_Collection = styled(Box)`
    display: flex;
    width: 80%;
    margin-top:100px;
    flex-direction: column;
`

const Part_Drop = styled(Box)`
    display: flex;
    width: 80%;
    margin-top:100px;
    flex-direction: column;

`

const Part_Foot = styled(Box)`
    display: flex;
    width: 80%;
    margin-top:100px;
    flex-direction: column;
`

export default Mainpage;