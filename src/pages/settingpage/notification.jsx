import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { MdSave } from "react-icons/md";
import { Switch } from "@material-ui/core";
import AvatarImage from "../../images/small_ellipse2.png";
import { BsFillCaretDownFill } from "react-icons/bs";

const Notification = () => {
  return (
    <>
      <Header>
        <Box fontSize="18px" lineHeight="20px" my="40px">
          Select which notifications you would like to receive for 0x2ce5...c081
        </Box>
      </Header>
      <NotificationMain pb="80px">
        <Box p="63px" borderRadius="16px" border="1px solid #cecece">
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="39px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box mb="20px" display="flex" flexDirection="column">
            <Box
              fontSize="20px"
              lineHeight="20px"
              fontWeight="600"
              letterSpacing="0.5px"
            >
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineHeight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </Box>
          <Box border="1px solid #CECECE" borderRadius="8px" display="flex">
            <Box
              height="40px"
              px="20px"
              fontSize="18px"
              lineHeight="20px"
              textAlign="center"
              color="#757B75"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gridColumnGap="10px"
              style={{ textTransform: "uppercase" }}
            >
              <img
                src={AvatarImage}
                alt=""
                style={{ width: "24px", height: "24px", borderRadius: "100%" }}
              />
              <span>duke</span>
              <BsFillCaretDownFill />
            </Box>
            <Box
              flexGrow="1"
              width="150px"
              height="40px"
              borderLeft="1px solid #cecece"
              pl="20px"
              fontSize="12px"
              lineHeight="12px"
              textAlign="center"
              color="#757B75"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              1000
            </Box>
          </Box>
        </Box>
        <Box
          marginTop="42px"
          bgcolor="#2BA55D"
          borderRadius="8px"
          fontSize="18px"
          lineHeight="18px"
          textAlign="center"
          paddingY="19px"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumnGap="11px"
          css={{ cursor: "pointer" }}
        >
          <MdSave fontSize="20px" />
          Save
        </Box>
      </NotificationMain>
    </>
  );
};

const SimpleSwitch = styled(Switch)`
  width: 40px !important;
  height: 20px !important;
  padding: 0px !important;
  border-radius: 100px;
  .MuiButtonBase-root {
    padding: 0;
    background: transparent;
    .MuiSwitch-thumb {
      background: white;
      margin: 4px;
      width: 12px;
      height: 12px;
      box-shadow: none;
    }
  }
  .Mui-checked {
    & + .MuiSwitch-track {
      background: #2ba55d !important;
      opacity: 1 !important;
    }
  }
`;

const Header = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const NotificationMain = styled(Box)`
  max-width: 617px;
  display: flex;
  flex-direction: column;
  gap: 39px;
`;
export default Notification;
