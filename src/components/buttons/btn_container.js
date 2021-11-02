import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';

const Btn_Customize = ({ color, back, width, height, border, str, borderRadius, marginL }) => {
    return (
        <Btn_Cus display="flex" justifyContent="center" alignItems="center" width={width} height={height} color={color}
            bgcolor={back} border={border} borderRadius={borderRadius} marginLeft={marginL}
            sx={{
                fontFamily: 'Work Sans',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '24px',
            }}
        > {str}</Btn_Cus >
    );
};

const Btn_Cus = styled(Box)`
    &:hover{
        background: black;
        border: none;
    }
`


export default Btn_Customize;