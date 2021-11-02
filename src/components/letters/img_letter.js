import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';

const Img_Letter = ({ letter }) => {
    return (
        <ILtter>
            {letter}
        </ILtter>
    );
};

const ILtter = styled(Box)`
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
color: #131413;
`


export default Img_Letter;