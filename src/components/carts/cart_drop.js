import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';
import { lightTheme, darkTheme } from "../../theme/theme";

const Last_Drop = ({ img, simg, simg1, name, price, ctheme}) => {
    return (
        <HCollection ctheme={ctheme?1:0} ltheme={lightTheme} dtheme={darkTheme}>
            <Box display="flex" flex="250">
                <img src={img} width="100%" height="100%"></img>
            </Box>
            <Box display="flex" flex="75" borderBottom="1px solid #CECECE">
                <Box display="flex" flex="2" alignItems="center" justifyContent="center">
                {`\u00a0`}{`\u00a0`}<img src={simg} width="32px" height="32px"></img>
                </Box>
                <Box display="flex" flex="7" flexDirection="column">
                    <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-end" fontFamily="Work Sans" fontSize="18px" color={ctheme?lightTheme.font_color1:darkTheme.font_color1 } fontWeight="500">NFT Title</Box>
                    <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-start" fontFamily="Work Sans" fontSize="18px" color={ctheme?"#757B75":darkTheme.font_color_grey } lineHeight="22px" fontWeight="normal">{name}</Box>
                </Box>
            </Box>
            <Box display="flex" flex="75" flexDirection="column" >
                <Box marginLeft="20px"  display="flex" flex="1" justifyContent="flex-start" alignItems="flex-end" fontFamily="Work Sans" fontSize="10px" color={ctheme?"#757B75":darkTheme.font_color_grey }>Lowest price</Box>
                <Box marginLeft="20px"  display="flex" flex="2" justifyContent="flex-start" alignItems="center" fontFamily="Work Sans" fontSize="16px" color={ctheme?lightTheme.font_color1:darkTheme.font_color1 } lineHeight="22px" fontWeight="bold">
                    <img src={simg1} width="24px" height="24px"></img>{`\u00a0`}{price}
                </Box>
            </Box>

        </HCollection>
    );
};

const HCollection = styled(Box)`
    display:flex;
    position: relative;
    width:231px;
    height: 400px;
    flex-direction: column;
    background: ${({ctheme, ltheme, dtheme})=>ctheme?ltheme.bgcolor_bar:dtheme.bgcolor_bar};
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 8px;
`


export default Last_Drop;