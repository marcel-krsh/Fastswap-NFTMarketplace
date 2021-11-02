import { VscColorMode } from "react-icons/vsc";
import { FaTractor } from "react-icons/fa";
import { MdHome, MdOutlineMonetizationOn, MdOutlineImage, MdOutlineBarChart, MdNotificationsActive } from "react-icons/md";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarFooter,
    SidebarContent,
    SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import './sidebar.scss';
import 'react-pro-sidebar/dist/css/styles.css';

import { useDarkMode } from '../../contexts/ui-context';



const Sidebar = ({ flag_sidebar }) => {
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

    return (
        <ProSidebar style={styles.sideBarHeight} collapsed={flag_sidebar} >
            <SidebarContent>
                <Menu style={styles.color_back}>
                    <MenuItem icon={<MdHome fontSize="30px" />}>Home</MenuItem>
                    <MenuItem icon={<MdOutlineMonetizationOn fontSize="30px" />}>Trade</MenuItem>
                    <MenuItem icon={<MdOutlineImage fontSize="30px" />}>NFT Marketplace</MenuItem>
                    <MenuItem icon={<FaTractor fontSize="30px" />}>Farms</MenuItem>
                    <MenuItem icon={<FaTractor fontSize="30px" />}>New Farms</MenuItem>
                    <MenuItem icon={<FaTractor fontSize="30px" />}>New Farms V3</MenuItem>
                    <SubMenu title="Info" icon={<MdOutlineBarChart fontSize="30px" />}>
                        <MenuItem icon={<MdNotificationsActive fontSize="30px" />}>Notification</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu>
                    <MenuItem icon={<VscColorMode fontSize="30px" />} >Light/Dark</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>

    );
};


export default Sidebar;