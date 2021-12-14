import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router";
import cover_big1 from "../../images/cover/cover_big1.png";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/small_duke1.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";
import Btn_Customize from "../buttons/btn_container";
import Last_Drop from "../carts/cart_drop";
import Img_Letter from "../letters/img_letter";
import { lightTheme, darkTheme } from "../../theme/theme";

export const PageHeader1_space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
`;

export const PageHLetter = styled(Box)`
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #2ba55d;
  border-top: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    border-top: 4px solid #2ba55d;
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
`;

export const PageHeader1 = styled(Box)`
  display: flex;
  width: 100%;
`;

export const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({ ctheme, ltheme, dtheme }) => (ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main)};
`;
