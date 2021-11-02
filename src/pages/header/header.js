import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';
import { MdMenuOpen} from "react-icons/md";
import {
    injected,
    walletConnect,
    trustWallet,
    binance_wallet,
} from "../../utils/connectors";
import _ from "lodash";
import { useWeb3React } from '@web3-react/core'
import metamask from '../../images/MetaMask.png'
import walletconnect from '../../images/WalletConnect.png'
import binance from '../../images/BinanceWallet.png'
import trust from '../../images/TrustWallet.png'
import img_logo from '../../images/logo_mark.png';
import vector from "../../images/Vector.png";

const Header = ({ flag_sidebar, set_sidebar }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 468,
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        backgroundColor: '#2BA55D',
        display: "flex",
        flexDirection: 'column',
    };
    const DESKTOP_CONNECTORS = {
        MetaMask: injected,
        WalletConnect: walletConnect,
        BinanceWallet: binance_wallet,
        TrustWallet: trustWallet,
    };

    const MOBILE_CONNECTORS = {
        MetaMask: injected,
        TrustWallet: trustWallet,
        BinanceWallet: binance_wallet,
    };
    const walletConnectors = DESKTOP_CONNECTORS;
    const { connector, activate } = useWeb3React();
    const handleConnect = (currentConnector) => {
        setOpen(false);
        activate(currentConnector);
    }
    const getShortTxHash = (txHash, margin = 4) => {
        if (_.isEmpty(txHash)) {
            return "";
        }
        return txHash.replace(
            txHash.substring(margin + 2, txHash.length - margin),
            "....",
        );
    }

    return (
        <StyledContainer>
            <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start" paddingLeft="50px">
                <MdMenuOpen onClick={() => set_sidebar(!flag_sidebar)} fontSize="30px" color="#2BA55D"/>
                <img src={img_logo} width="120px" height="40px" style={{ marginLeft: "30px" }}></img>
            </Box>
            <Box display="flex" flex="1" alignItems="center" justifyContent="flex-end" paddingRight="50px">
                <Btn_connect onClick={handleOpen}>Connect</Btn_connect>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style1}>
                    <Box sx={{
                        height: '68px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        lineHeight: 'initial',
                    }}>
                        <Box fontSize='28px' fontWeight='bold' color='white'>Select a Wallet</Box>
                    </Box>
                    <Box display='flex' flexDirection='column' height="100%" width='100%'>
                        <Box display='flex' alignItems="center" height="100%" flex='1' >
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['MetaMask']) }}>
                                <img src={metamask} width="40px" height="40px"></img><Box fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>MetaMask</Box>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['WalletConnect']) }}>
                                <img src={walletconnect} width="40px" height="40px"></img><Box fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>WalletConnect</Box>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['BinanceWallet']) }}>
                                <img src={binance} width="40px" height="40px"></img><Box fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>BinanceWallet</Box>
                            </Box>
                        </Box>
                        <Box display='flex' alignItems="center" height="100%" flex='1'>
                            <Box sx={{
                                width: '100%',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '16px',
                                transition: 'ease-out 0.4s',
                                alignItems: 'center',
                                borderRadius: '12px',
                                flexDirection: 'row',
                                backgroundColor: '#FCFCFC',
                                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                                height: '50%',
                            }} onClick={() => { handleConnect(walletConnectors['TrustWallet']) }}>
                                <img src={trust} width="40px" height="40px"></img><Box fontWeight='bold' margin='20px' color='#337ab7' fontSize='1.25rem'>TrustWallet</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </StyledContainer>
    );
};

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    height: 64px;
    background: white;
    border-bottom: 2px solid #F0F0F0;
    box-shadow: 0px 4px 3px -4px rgba(0, 0, 0, 0.08);
`

const Btn_connect = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 32px;
    background: #2BA55D;
    border-radius: 8px;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    &:hover{
        background: black;
    }
`


export default Header;