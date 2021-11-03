import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';

const Hot_Collection = ({ img, simg, title, price }) => {
    return (
        <HCollection>
            <Box display="flex" flex="120">
                <img src={img} width="100%" height="100%"></img>
            </Box>
            <Box display="flex" flex="92" flexDirection="column">
                <Box display="flex" flex="1" justifyContent="center" alignItems="flex-end" fontFamily="Work Sans" fontSize="18px" color="#363936" >{title}</Box>
                <Box display="flex" flex="1" justifyContent="center" alignItems="flex-start" fontFamily="Work Sans" fontSize="12px" color="#757B75">{price}</Box>
            </Box>
            <Box position="absolute" left="40%" top="45%">
                <img src={simg} width="100%" height="100%"></img>
            </Box>
        </HCollection>
    );
};

const HCollection = styled(Box)`
    display:flex;
    position: relative;
    width:231px;
    height: 220px;
    flex-direction: column;
    background: #FCFCFC;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 8px;
`


export default Hot_Collection;