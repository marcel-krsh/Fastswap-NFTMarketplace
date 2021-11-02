import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Box } from '@material-ui/core'
import { FaGem, FaHeart } from "react-icons/fa";
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
    const onClickMenuIcon = () => {
        setCollapsed(!collapsed);
    };
    return (
        <ProSidebar style={styles.sideBarHeight} collapsed={flag_sidebar}>
            {/* <SidebarHeader style={styles.color_back}>
                <div style={styles.menuIcon} onClick={onClickMenuIcon}>
                    <AiOutlineMenu />
                </div>
            </SidebarHeader> */}
            <Menu iconShape="square" style={styles.color_back}>
                <MenuItem icon={<FaGem />}>Home</MenuItem>
                <MenuItem icon={<FaGem />}>Trade</MenuItem>
                <MenuItem icon={<FaGem />}>NFT Marketplace</MenuItem>
                <MenuItem icon={<FaGem />}>Farms</MenuItem>
                <MenuItem icon={<FaGem />}>New Farms</MenuItem>
                <MenuItem icon={<FaGem />}>New Farms V3</MenuItem>
                <SubMenu title="Info" icon={<FaHeart />}>
                    <MenuItem>Notification</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
};


export default Sidebar;