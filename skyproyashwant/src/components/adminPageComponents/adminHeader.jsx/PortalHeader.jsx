import React, { useContext, useEffect, useState } from "react";
import Skyprologo from "../../../assets/images/skypro/Skypro_New_Logo.png"
import smallSkyprologo from "../../../assets/images/skypro/skypro-logo-icon.png"
// import UserProfile from '../dashboard/userProfile';
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ListSubheader from '@mui/material/ListSubheader';
import CellTowerIcon from '@mui/icons-material/CellTower';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { 
    ExpandMore, 
    ExpandLess, 
    MenuOpenOutlined, 
    MenuOutlined, 
    CategoryOutlined, 
    AccountBalanceWalletOutlined,
    GroupOutlined
} from "@mui/icons-material";
// import { AccountContext } from "../../App";

const PortalHeader = ({ children }) => {
    const [isActive, setIsActive] = useState(true);
    const [open, setOpen] = useState(false);
    // const { userData } = useContext(AccountContext);
    const pathname = useLocation().pathname;

    const handleClick = event => {
        setIsActive(current => !current);
    };
    // const initialLetter = userData?.full_name && userData.full_name.charAt(0).toUpperCase();

    const filteredLinks =  sideBarLinks.filter(index => {
        return index.role==="both"
    })

    useEffect(() => {
        if (pathname.includes("settings")){
            setOpen(true);
        }
    },[pathname])

    return (
        <div className='dashboard'>
            <div className={!isActive ? 'is_active dashboard_left' : 'dashboard_left'}>
                <div className='w-[200px] h-[100vh]'>
                    <List
                        sx={{ width: '100%', maxWidth: 360 }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" sx={{...isActive && {padding: 0}}}>
                                <Link className='logo' to='/' alt="logo">
                                    {isActive ? (
                                        <img src={Skyprologo} alt="fullLogo" />
                                    ):(
                                        <img src={smallSkyprologo} alt="logo" />
                                    )}
                                </Link>
                            </ListSubheader>
                        }
                    >
                        {filteredLinks?.length > 0 && filteredLinks.map((link, index) => (
                            <Link to={link.handle} key={index}>
                                <ListItemButton sx={{...pathname === link.handle && {backgroundColor: "#708090", color: "#fff", fontWeight: 600}}}>
                                    <ListItemIcon sx={{...pathname === link.handle && {color: "#fff"}}}>
                                        {link.icon}
                                    </ListItemIcon>
                                    {isActive && (
                                        <ListItemText primary={link.title}/>
                                    )}
                                </ListItemButton>
                            </Link>
                        ))}
                        <ListItemButton onClick={() => {setOpen(prev => !prev); setIsActive(true)}}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            {isActive && (
                                <>
                                <ListItemText primary="Settings" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                                </>
                            )}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {settingsLinks.map((link, i) => (
                                    <Link to={link.handle} key={i}>
                                        <ListItemButton sx={{pl: 4,...pathname === link.handle && {backgroundColor: "#708090", color: "#fff", fontWeight: 600}}}>
                                            <ListItemIcon sx={{...pathname === link.handle && {color: "#fff"}}}>
                                            {link.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={link.title} />
                                        </ListItemButton>
                                    </Link>
                                ))}
                            </List>
                        </Collapse>
                    </List>
                </div>
            </div>
            <div className={!isActive ? "dashboard_right is_active" : "dashboard_right"}>
                <div className='header'>
                    <div className='cursor-pointer' onClick={handleClick}>
                        {isActive ? (
                            <MenuOpenOutlined fontSize="large"/>
                        ):(
                            <MenuOutlined fontSize="large"/>
                        )}
                    </div>
                    {/* <div className='header_right'>
                        <UserProfile initialLetter={initialLetter} userData={userData}/>
                    </div> */}
                </div>
                <div className="px-[50px] py-[30px] mt-[70px] overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}

const sideBarLinks = [
    {
        icon: <DashboardIcon fontSize="medium"/>,
        title: "Dashboard",
        handle: "/account/dashboard",
        role: "customer"
    },
    {
        icon: <GroupAddIcon fontSize="medium"/>,
        title: "Referral",
        handle: "/account/referral",
        role: "customer"
    },
    {
        icon: <CategoryOutlined fontSize="medium"/>,
        title: "Products",
        handle: "/account/products",
        role: "both"
    },
    {
        icon: <GroupOutlined fontSize="medium"/>,
        title: "Users",
        handle: "/admin/users",
        role: "admin"
    }
]

const settingsLinks = [
    {
        icon: <AccountBalanceWalletOutlined fontSize="medium"/>,
        title: "Profile",
        handle: "/account/settings/profile",
    },
    {
        icon: <GroupAddIcon fontSize="medium" />,
        title: "Security",
        handle: "/account/settings/security",
    },
    {
        icon: <CellTowerIcon fontSize="medium"/>,
        title: "Broadcaster",
        handle: "/admin/settings/broadcasters"
    },
    {
        icon: <GroupAddIcon fontSize="medium"/>,
        title: "Bouquet",
        handle: "/admin/settings/bouquets"
    },
    {
        icon: <GroupAddIcon fontSize="medium"/>,
        title: "Channels",
        handle: "/admin/settings/channels"
    },
    {
        icon: <GroupAddIcon fontSize="medium"/>,
        title: "Language",
        handle: "/admin/settings/languages"
    }
]

export default PortalHeader;