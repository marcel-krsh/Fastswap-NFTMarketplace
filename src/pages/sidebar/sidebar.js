import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Box } from '@material-ui/core'
import { FaGem, FaHeart, FaTractor } from "react-icons/fa";
import { MdHome, MdOutlineMonetizationOn, MdOutlineImage, MdOutlineBarChart} from "react-icons/md";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Sidebar = ( {flag_sidebar}) => {
    const [collapsed, setCollapsed] = useState(false);
    // added styles 
    const styles = {
        sideBarHeight: {
            height: "100vh",
            backgroundColor: '#FCFCFC',
            boxShadow: '4px 4px 3px -4px rgba(0, 0, 0, 0.08)',
            color: "#757B75",
        },
        menuIcon: {
            float: "right",
            margin: "10px",

        },
        color_back: {
            backgroundColor: '#FCFCFC',
            boxShadow: '4px 4px 3px -4px rgba(0, 0, 0, 0.08)',
            color: "#757B75",
        }
    };
    // const onClickMenuIcon = () => {
    //     setCollapsed(!collapsed);
    // };
    return (
        <ProSidebar style={styles.sideBarHeight} collapsed={flag_sidebar}>
            {/* <SidebarHeader style={styles.color_back}>
                <div style={styles.menuIcon} onClick={onClickMenuIcon}>
                    <AiOutlineMenu />
                </div>
            </SidebarHeader> */}
            <Menu  style={styles.color_back}>
                <MenuItem icon={<MdHome fontSize="30px"/>}>Home</MenuItem>
                <MenuItem icon={<MdOutlineMonetizationOn fontSize="30px"/>}>Trade</MenuItem>
                <MenuItem icon={<MdOutlineImage fontSize="30px"/>}>NFT Marketplace</MenuItem>
                <MenuItem icon={<FaTractor fontSize="30px"/>}>Farms</MenuItem>
                <MenuItem icon={<FaTractor fontSize="30px"/>}>New Farms</MenuItem>
                <MenuItem icon={<FaTractor fontSize="30px"/>}>New Farms V3</MenuItem>
                <SubMenu title="Info" icon={<MdOutlineBarChart fontSize="30px"/>}>
                    <MenuItem>Notification</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
};


export default Sidebar;