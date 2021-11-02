import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Box, Button } from '@material-ui/core'
import styled from 'styled-components';
import img_logo from '../../images/logo_mark.png';
import vector from "../../images/Vector.png";
import { FaGem, FaHeart } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";

const Header = ({flag_sidebar, set_sidebar}) => {
    return (
        <StyledContainer>
            <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start" paddingLeft="50px">
                {/* <MdMenuOpen width="24px" height="30px" color="#2BA55D"/> */}
                <img src={vector} width="20px" height="12px" onClick={()=>set_sidebar(!flag_sidebar)}></img>
                <img src={img_logo} width="120px" height="40px" style={{marginLeft:"30px"}}></img>
            </Box>
            <Box display="flex" flex="1" alignItems="center" justifyContent="flex-end" paddingRight="50px">
                <Btn_connect>Connect</Btn_connect>
            </Box>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    height: 64px;
    background: #FCFCFC;
    box-shadow: 0px 4px 3px -4px rgba(0, 0, 0, 0.08);
`

const Btn_connect = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 32px;
    background: #2BA55D;
    border-radius: 8px;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    &:hover{
        background: black;
    }
`


export default Header;