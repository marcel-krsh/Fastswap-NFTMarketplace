import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';

const Hot_Collection = ({ img, simg, title, price }) => {
    return (
        <HCollection>
            <Box display="flex" flex="120">
                <img src={img} width="250px" height="120px"></img>
            </Box>
            <Box display="flex" flex="100" flexDirection="column">
                <Box display="flex" flex="1" justifyContent="center" alignItems="flex-end" fontFamily="Work Sans, sans-serif" fontSize="18px" color="#363936">{title}</Box>
                <Box display="flex" flex="1" justifyContent="center" alignItems="flex-start" fontFamily="Work Sans, sans-serif" fontSize="12px" color="#757B75">{price}</Box>
            </Box>
            <Box position="absolute" left="100px" top="90px">
                <img src={simg} width="48px" height="48px"></img>
            </Box>
        </HCollection>
    );
};

const HCollection = styled(Box)`
    display:flex;
    position: relative;
    width:250px;
    height: 220px;
    flex-direction: column;
    background: #FCFCFC;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 8px;
`


export default Hot_Collection;