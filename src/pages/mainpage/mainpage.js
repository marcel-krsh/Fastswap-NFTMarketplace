import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from "react-router";
import cover_big1 from '../../images/cover/cover_big1.png';
import small_ellipse from "../../images/small_ellipse2.png"
import small_duke from "../../images/small_duke1.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";
import BtnCustomize from "../../components/buttons/btn_container"
import LastDrop from "../../components/carts/cart_drop"
import ImgLetter from "../../components/letters/img_letter"
import { lightTheme, darkTheme } from "../../theme/theme"

const Mainpage = ({ ctheme }) => {
    // const dispatch = useDispatch();
    const history = useHistory();
    // const [rerender, setRerender] = useState('Hello');
    const { nfts } = useSelector(state => state.product);
    useEffect(() => {
        // console.log("123:",nfts);
        // setRerender('Hello World');
    })

    return (
        <StyledContainer ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme}>
            <Header1>
                <Header1space display="flex" flex="1" justifyContent="space-between" marginLeft="20%" marginRight="20%">
                    <HLetter>Overview</HLetter>
                    <HLetter>Explore</HLetter>
                    <HLetter>Rankings</HLetter>
                    <HLetter>Activities</HLetter>
                    <HLetter>Manage</HLetter>
                </Header1space>
            </Header1>
            <PartHeader>
                <Box display="flex" flex="1" flexDirection="column" marginTop="5%" marginLeft="5%" marginRight="5%">
                    <Leftimgletter display="flex" flex="4" flexDirection="column" width="100%" fontSize="72px">
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" fontWeight="bold" lineheight="80px" fontFamily="Poppins" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>Collect </Box>
                        <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center" fontWeight="bold" lineheight="80px" fontFamily="Poppins" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>digital art</Box>
                    </Leftimgletter>
                    <Leftimgletter1 display="flex" flex="1" width="100%" fontSize="20px">
                        <Box display="flex" justifyContent="flex-start" alignItems="center" fontFamily="Poppins" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey}>Buy and Sell NFTs on Binance Smart Chain</Box>
                    </Leftimgletter1>
                    <Box display="flex" flex="4" justifyContent="flex-start" alignItems="flex-start" marginTop="5%" width="100%">
                        <Box display="flex" width="40%">
                            <BtnCustomize display="flex" color={'white'} back={'#2BA55D'} width={'100%'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore'} borderRadius={'8px'} />
                        </Box>
                        <Box display="flex" width="40%" onClick={() => {
                            history.push({ pathname: "/Create_NFT" });
                        }} >
                            <BtnCustomize display="flex" color={'#2BA55D'} back={'white'} width={'100%'} height={'56px'} border={'1px solid #2BA55D'} str={'Create'} borderRadius={'8px'} marginL={'24px'} />
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" flex="1" flexDirection="column" marginTop="5%" marginLeft="5%" marginRight="5%">
                    <Box display="flex" flex="3" alignItems="center" marginBottom="20px" width="100%">
                        <Box width="16px" height="16px" borderRadius="100%" bgcolor="#2BA55D"></Box>
                        <Box marginLeft="10px" fontFamily="Poppins" fontSize="18px" fontWeight="bold" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>Auction in progress</Box>
                    </Box>
                    <Box display="flex" flex="9" alignItems="center" width="100%">
                        <img src={cover_big1} width="100%" height="100%" alt=''/>
                    </Box>
                    <Box display="flex" flex="3" flexDirection="column" marginTop="15px" width="100%">
                        <Box display="flex" flex="1" flexDirection="column">
                            <Imgdownletter display="flex" flex="1" fontSize="12px">
                                <Box display="flex" flex="5" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey} fontFamily="Poppins" >Artist</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey} fontFamily="Poppins" >Current</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey} fontFamily="Poppins" >Action Ends in</Box>
                            </Imgdownletter>
                            <Imgdownletter1 display="flex" flex="2" marginTop="10px" fontSize="18px">
                                <Box display="flex" flex="5" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1} fontFamily="Poppins">
                                    <img src={small_ellipse} width="24px" height="24px" alt=''></img>{`\u00a0`}{`\u00a0`}creator name
                                </Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1} fontFamily="Poppins" >$22.2K</Box>
                                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1} fontFamily="Poppins">hh:mm:ss</Box>
                            </Imgdownletter1>
                        </Box>
                        <Box display="flex" flex="1"></Box>

                    </Box>

                </Box>
            </PartHeader>

            <PartDrop>
                <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
                    <ImgLetter letter={'Latest drops 🚀'} ctheme={ctheme} />
                    <Box display="flex" marginTop="2%" width="100%" flexWrap="wrap">
                        {
                            nfts.length > 0 && nfts.map((item, index) => {
                                return (
                                    <Box key={index} maxWidth="240px" display="flex" flex="1" marginRight="2%" borderRadius="10px" marginBottom="2%">
                                        <LastDrop index={index} img={item.img} simg={small_ellipse} title={item.title} simg1={item.payment_method === 'DUKE'? small_duke: item.payment_method === 'FAST' ?icon_logo : item.payment_method === 'BNB'? bnb1: ''} name={'Creator Name'} price={`${item.price} `} ctheme={ctheme} payment = {item.payment_method}></LastDrop>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    <Box marginTop="5%" display="flex" justifyContent="center" marginBottom="5%">
                        <BtnCustomize display="flex" color={'white'} back={'#2BA55D'} width={'230px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore more'} borderRadius={'8px'} />
                    </Box>
                </Box>
            </PartDrop>
        </StyledContainer>
    );
};

const Header1space = styled(Box)`
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
    font-family: Poppins;
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

const Leftimgletter = styled(Box)`
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

const Leftimgletter1 = styled(Box)`
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

const Imgdownletter = styled(Box)`

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

const Imgdownletter1 = styled(Box)`

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
const PartHeader = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: row;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
const PartDrop = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:5%;
    flex-direction: column;

`

export default Mainpage;