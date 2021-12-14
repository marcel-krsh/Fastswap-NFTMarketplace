import styled from "styled-components";
import { Switch } from "@material-ui/core";

export const SimpleSwitch = styled(Switch)`
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
