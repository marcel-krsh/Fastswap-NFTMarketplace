import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@material-ui/core";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const DropDown = ({ text, children }) => {
  const [show, setShow] = useState(false);
  const dropPannel = useRef();
  useEffect(() => {
    console.log(dropPannel.current.childNodes);
    const handle = (e) => {
      if (dropPannel?.current && !dropPannel.current.contains(e.target)) {
        setShow(false);
      }
      //   else if (dropPannel.current.children.children.contains(e.target))
      // setShow(false);
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  return (
    <Box position="relative">
      <Box
        onClick={() => {
          setShow(!show);
        }}
      >
        <Box
          ref={dropPannel}
          padding="8px 13px"
          paddingRight="5px"
          border="1px solid #2BA55D"
          borderRadius="8px"
          fontSize="16px"
          lineHeight="16px"
          textAlign="center"
          color="#2BA55D"
          display="flex"
          gridColumnGap="5px"
          css={{ cursor: "pointer" }}
        >
          {text + "  "}
          {show ? (
            <BiChevronUp fontSize="20px" lineHeight="16px" />
          ) : (
            <BiChevronDown fontSize="20px" lineHeight="16px" />
          )}
        </Box>
      </Box>
      <Box
        minWidth="162px"
        position="absolute"
        top="calc(100% + 5px)"
        zIndex="1"
        left="50%"
        bgcolor="white"
        padding="24px"
        border="1px solid #cecece"
        boxShadow="0px 4px 22px 5px rgba(0, 0, 0, 0.08)"
        borderRadius="8px"
        display={show ? "flex" : "none"}
        flexDirection="column"
        gridRowGap="16px"
        justifyContent="center"
        alignItems="stretch"
        css={{ cursor: "pointer", transform: "translateX(-50%)" }}
      >
        {children}
      </Box>
    </Box>
  );
};

export const DropDownItem = ({ onClick, children }) => {
  const Item = styled(Box)`
    &:hover {
      background: red;
    }
  `;
  return (
    <Item
      fontSize="14px"
      lineHeight="20px"
      color="#757B75"
      textAlign="left"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      gridColumnGap="5px"
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </Item>
  );
};
