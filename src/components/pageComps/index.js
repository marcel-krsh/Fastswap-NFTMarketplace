import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PageHeader = () => {
  const history = useHistory();
  return (
    <PageHeader1>
      <PageHeader1Space display={"flex"} flex={"1"} justifyContent={"space-between"} marginLeft={"20%"} marginRight={"20%"}>
        <PageHLetter active={history.location.pathname.slice(1) === "overview"} onClick={() => (window.location.href = "overview")}>
          Overview
        </PageHLetter>
        <PageHLetter active={history.location.pathname.slice(1) === "explore"} onClick={() => (window.location.href = "explore")}>
          Explore
        </PageHLetter>
        <PageHLetter active={history.location.pathname.slice(1) === "rankings"} onClick={() => (window.location.href = "rankings")}>
          Rankings
        </PageHLetter>
        <PageHLetter active={history.location.pathname.slice(1) === "activities"} onClick={() => (window.location.href = "activities")}>
          Activities
        </PageHLetter>
        <PageHLetter active={history.location.pathname.slice(1) === "manage"} onClick={() => (window.location.href = "manage")}>
          Manage
        </PageHLetter>
      </PageHeader1Space>
    </PageHeader1>
  );
};

const PageHeader1Space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
`;

const PageHLetter = styled(Box)`
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
  border-top: 4px solid transparent;
  border-top-color: ${(p) => (p.active ? "#2ba55d" : "transparent")};
  &:hover {
    border-top-color: #2ba55d;
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

const PageHeader1 = styled(Box)`
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

export default PageHeader;
