import React, { useEffect, useState } from 'react';
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
import LastDrop from "../../components/carts/cart_item_drop"
import CartAuction from "../../components/carts/cart_auction"
import ImgLetter from "../../components/letters/img_letter"
import { lightTheme, darkTheme } from "../../theme/theme"

const Items = ({ ctheme }) => {
    // const dispatch = useDispatch();
    const history = useHistory();
    const { nfts } = useSelector(state => state.product);
    const { auctions } = useSelector(state => state.product1);
    const [cur_account, set_cur_account] = useState('');
    useEffect(() => {
        let temp_account = window.localStorage.getItem("CurrentAccount");
        set_cur_account(temp_account);
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
            <PartDrop>
                <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
                    <ImgLetter letter={'Items 🚀'} ctheme={ctheme} />
                    <Box display="flex" marginTop="2%" marginBottom="2%">
                        <GridShow display="grid" gridTemplateColumns="auto auto auto auto auto" gridGap="20px">
                            {
                                nfts.length > 0 && nfts.map((item, index) => {
                                    if (item.owner === cur_account) {
                                        return (
                                            <Box key={index} maxWidth="240px" display="flex" flex="1" borderRadius="10px" marginBottom="2%">
                                                <LastDrop index={index} img={item.img} simg={small_ellipse} title={item.title} simg1={item.payment_method === 'DUKE' ? small_duke : item.payment_method === 'FAST' ? icon_logo : item.payment_method === 'BNB' ? bnb1 : ''} name={item.owner} price={`${item.price} `} ctheme={ctheme} payment={item.payment_method}></LastDrop>
                                            </Box>
                                        )
                                    }

                                })
                            }
                        </GridShow>
                    </Box>
                    <Box marginTop="5%" display="flex" justifyContent="center" marginBottom="5%">
                        <BtnCustomize display="flex" color={'white'} back={'#2BA55D'} width={'230px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore more'} borderRadius={'8px'} />
                    </Box>
                </Box>
            </PartDrop>
        </StyledContainer>
    );
};

const GridShow = styled(Box)`
    @media (max-width: 1800px) {
        grid-template-columns:auto auto auto auto !important;
    }
    @media (max-width: 1410px) {
        grid-template-columns: auto auto auto !important;
    }
    @media (max-width: 1200px) {
        grid-template-columns: auto auto !important;
    }
    @media (max-width: 850px) {
        grid-template-columns: auto !important;
    }
    /* @media (max-width: 1600px) {
        grid-template-columns:auto auto auto auto;

    }
    @media (max-width: 1600px) {
        grid-template-columns:auto auto auto auto;

    }
    @media (max-width: 1600px) {
        grid-template-columns:auto auto auto auto;
    } */
`

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

export default Items;