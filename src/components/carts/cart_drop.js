import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';

const Last_Drop = ({ img, simg, simg1, name, price }) => {
    return (
        <HCollection>
            <Box display="flex" flex="250">
                <img src={img} width="250px" height="250px"></img>
            </Box>
            <Box display="flex" flex="75" border="1px solid #CECECE">
                <Box display="flex" flex="1" alignItems="center" justifyContent="center">
                    <img src={simg} width="32px" height="32px"></img>
                </Box>
                <Box display="flex" flex="4" flexDirection="column">
                    <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-end" fontFamily="Work Sans, sans-serif" fontSize="18px" color="black">NFT Title</Box>
                    <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-start" fontFamily="Work Sans, sans-serif" fontSize="18px" color="#757B75" lineHeight="22px" fontWeight="normal">{name}</Box>
                </Box>
            </Box>
            <Box display="flex" flex="75" flexDirection="column" marginLeft="20px">
                <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-end" fontFamily="Work Sans, sans-serif" fontSize="10px" color="#757B75">Lowest price</Box>
                <Box display="flex" flex="2" justifyContent="flex-start" alignItems="center" fontFamily="Work Sans, sans-serif" fontSize="16px" color="black" lineHeight="22px" fontWeight="bold">
                    <img src={simg1} width="24px" height="24px"></img>{price}
                </Box>
            </Box>

        </HCollection>
    );
};

const HCollection = styled(Box)`
    display:flex;
    position: relative;
    width:250px;
    height: 400px;
    flex-direction: column;
    background: #FCFCFC;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 8px;
`


export default Last_Drop;