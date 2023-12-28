import React, { useContext, useEffect, useState } from "react";
import Skyprologo from "../../../assets/images/skypro/Skypro_New_Logo.png";
import smallSkyprologo from "../../../assets/images/skypro/skypro-logo-icon.png";
// import UserProfile from '../dashboard/userProfile';
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import CellTowerIcon from "@mui/icons-material/CellTower";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import LanguageIcon from '@mui/icons-material/Language';
import CategoryIcon from '@mui/icons-material/Category';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CollectionsIcon from '@mui/icons-material/Collections';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PreviewIcon from '@mui/icons-material/Preview';
import {
  ExpandMore,
  ExpandLess,
  MenuOpenOutlined,
  MenuOutlined,
  CategoryOutlined,
  AccountBalanceWalletOutlined,
  GroupOutlined,
} from "@mui/icons-material";
import AccountContext from "../../../utils/AccountContext";
// import { AccountContext } from "../../App";

const PortalHeader = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = useState(true);
  // const { userData } = useContext(AccountContext);
  const pathname = useLocation().pathname;
  const { login, setLogin, setUserData } = useContext(AccountContext);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  // const initialLetter = userData?.full_name && userData.full_name.charAt(0).toUpperCase();

  const filteredLinks = sideBarLinks.filter((index) => {
    return index.role === "both";
  });

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    setLogin(false);
    setUserData(null);
    navigate("/webadmin");
  };

  useEffect(() => {
    if (pathname.includes("settings")) {
      setOpen(true);
    }
  }, [pathname]);

  return (
    <div className="dashboard">
      <div
        className={!isActive ? "is_active dashboard_left" : "dashboard_left"}
      >
        <div className="form-style-div01">
          {/* <div>logout</div> */}
          <List
            sx={{ width: "100%", maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ ...(isActive && { padding: 0 }) }}
              >
                <Link className="logo" to="/" alt="logo">
                  {isActive ? (
                    <img src={Skyprologo} alt="fullLogo" />
                  ) : (
                    <img src={smallSkyprologo} alt="logo" />
                  )}
                </Link>
                {/* <Link>logout</Link> */}
              </ListSubheader>
            }
          >
            {filteredLinks?.length > 0 &&
              filteredLinks.map((link, index) => (
                <Link to={link.handle} key={index}>
                  <ListItemButton
                    sx={{
                      ...(pathname === link.handle && {
                        backgroundColor: "#708090",
                        color: "#fff",
                        fontWeight: 600,
                      }),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ...(pathname === link.handle && { color: "#fff" }),
                      }}
                    >
                      {link.icon}
                    </ListItemIcon>
                    {isActive && <ListItemText primary={link.title} />}
                  </ListItemButton>
                </Link>
              ))}
            <ListItemButton
              onClick={() => {
                setOpen((prev) => !prev);
                setIsActive(true);
              }}
            >
              <ListItemIcon>
              <SettingsIcon style={{ color: "#fd5901" }} />
              </ListItemIcon>
              {isActive && (
                <>
                  <ListItemText primary="Make Your Package" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </>
              )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {settingsLinks.map((link, i) => (
                  <Link to={link.handle} key={i}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        ...(pathname === link.handle && {
                          backgroundColor: "#708090",
                          color: "#fff",
                          fontWeight: 600,
                        }),
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ...(pathname === link.handle && { color: "#fff" }),
                        }}
                      >
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
      <div
        className={!isActive ? "dashboard_right is_active" : "dashboard_right"}
      >
        <div className="header">
        <div className="cursor-pointer" onClick={handleClick} style={{ color: "#fff" }}>
            {isActive ? (
              <MenuOpenOutlined fontSize="large" />
            ) : (
              <MenuOutlined fontSize="large" />
            )}
          </div>
          <div className="header_right">
            <button
              onClick={logoutHandler}
              style={{ backgroundColor: "#071e43", color: "#fd5901",borderRadius:"5px",width:"80px",height:"30px" }}
            >
              logout
            </button>
            {/* <UserProfile initialLetter={initialLetter} userData={userData}/> */}
          </div>
        </div>
        <div className="form-style-div02">{children}</div>
      </div>
    </div>
  );
};

const sideBarLinks = [
  {
    icon: <DashboardIcon fontSize="medium" />,
    title: "Dashboard",
    handle: "/account/dashboard",
    role: "customer",
  },
  {
    icon: <GroupAddIcon fontSize="medium" />,
    title: "Referral",
    handle: "/account/referral",
    role: "customer",
  },
  // {
  //   icon: <CategoryOutlined fontSize="medium" />,
  //   title: "Products",
  //   handle: "/account/products",
  //   role: "both",
  // },
  {
    icon: <GroupOutlined fontSize="medium" />,
    title: "Users",
    handle: "/admin/users",
    role: "admin",
  },
];

const settingsLinks = [
  // {
  //   icon: <AccountBalanceWalletOutlined fontSize="medium" />,
  //   title: "Profile",
  //   // handle: "/account/settings/profile",
  //   handle: "/profile",
  // },
  // {
  //   icon: <GroupAddIcon fontSize="medium" />,
  //   title: "Security",
  //   // handle: "/account/settings/security",
  //   handle: "/security",
  // },
  {
    icon: <LanguageIcon fontSize="medium" />,
    title: "Language",
    // handle: "/admin/settings/languages",
    handle: "/languages",
  },
  {
    icon: <CategoryIcon fontSize="medium" />,
    title: "Category",
    // handle: "/admin/settings/category",
    handle: "/category",
  },
  {
    icon: <TypeSpecimenIcon fontSize="medium" />,
    title: "Types",
    // handle: "/admin/settings/types",
    handle: "/types",
  },
  {
    icon: <LiveTvIcon fontSize="medium" />,
    title: "Channels",
    // handle: "/admin/settings/channels",
    handle: "/channels",
  },
  {
    icon: <CellTowerIcon fontSize="medium" />,
    title: "Broadcaster",
    // handle: "/admin/settings/broadcasters",
    handle: "/broadcasters",
  },
  {
    icon: <CollectionsIcon fontSize="medium" />,
    title: "Bouquet",
    // handle: "/admin/settings/bouquets",
    handle: "/bouquets",
  },
  // {
  //   icon: <GroupAddIcon fontSize="medium" />,
  //   title: "BouqueChannel",
  //   handle: "/admin/settings/bouque-channel",
  // },
  // {
  //   icon: <GroupAddIcon fontSize="medium" />,
  //   title: "parentBouque",
  //   handle: "/admin/settings/parent-bouque",
  // },

  // {
  //   icon: <GroupAddIcon fontSize="medium" />,
  //   title: "Packages",
  //   handle: "/admin/settings/packages",
  // },
  {
    icon: <DesktopWindowsIcon fontSize="medium" />,
    title: "Package",
    handle: "/package",
  },
  {
    icon: <PreviewIcon fontSize="medium" />,
    title: "view All",
    handle: "/view",
  },
  {
    icon: <PreviewIcon fontSize="medium" />,
    title: "Subscribed User",
    handle: "/subscriber",
  },
];

export default PortalHeader;
