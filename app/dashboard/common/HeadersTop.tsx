// "use client";
// import { useState } from "react";
// import { Button, Modal, List, ListItem, ListItemText } from "@mui/material";

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import MailOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
// import LightMode from "@mui/icons-material/LightMode";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
// import AodRoundedIcon from "@mui/icons-material/AodRounded";
// import MenuIcon from "@mui/icons-material/Menu";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import Link from "next/link";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function HeadersTop() {
//   const [open, setOpen] = useState(false);
//   const [filterText, setFilterText] = useState("");

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setFilterText(event.target.value);
//   };

//   const mockData = [
//     "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//     // "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//     // "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//     // "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//     // "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//     // "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//     // "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
//   ];

//   const headingMockData = [
//     "Junior Python Developer",
//     "Junior Python Developer",
//     "Senior Python Developer",
//     // "Senior Python Developer",
//     // "Mango",
//     // "Grapes",
//   ];

//   const combinedData = [...headingMockData, ...mockData];

//   const filteredData = combinedData.filter((item) =>
//     item.toLowerCase().includes(filterText.toLowerCase())
//   );

//   // modal end code

//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       className="headerDropdwon"
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       className="headerDropdwon"
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       {/* <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={41} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem> */}
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//             <MenuItem onClick={handleMenuClose}>
//                 <Link href="/">Home</Link>
//             </MenuItem>
//             <MenuItem onClick={handleMenuClose}>
//                 <Link href="/ProjectManagerUpcomings">Upcoming</Link>
//             </MenuItem>
//             <MenuItem onClick={handleProfileMenuOpen}>
//                 <IconButton
//                     size="large"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="inherit"
//                 >
//                     <AccountCircle />
//                 </IconButton>
//                 <p>All Page </p>
//             </MenuItem>
//         </Menu>
//     );

//   return (
//       <>
//         {/* web view */}
//         <Box className="navbarTop bg-white" sx={{ flexGrow: 1 }}>
//           <AppBar position="fixed">
//             <Toolbar>
//               {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="div"
//                 sx={{ display: { xs: "block", sm: "block" } }}
//               >
//                 <img className="logo-top" src="image/logo.png" alt="Logo" />
//               </Typography>
//               <Search
//                 onClick={handleOpen}
//                 className="ms-5 text-gray md:w-[400px]"
//               >
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   className="md:w-[400px]"
//                   placeholder="Search…"
//                   inputProps={{ "aria-label": "search" }}
//                 />
//               </Search>
//               <Box sx={{ flexGrow: 1 }} />
//               <Box sx={{ display: { xs: "none", md: "flex" } }}>
//                 <IconButton
//                   className="mx-lg-3"
//                   size="large"
//                   aria-label="show 4 new mails"
//                   color="inherit"
//                 >
//                   <LightModeOutlinedIcon />
//                 </IconButton>
//                 <IconButton
//                   className="mx-lg-3"
//                   size="large"
//                   aria-label="show 17 new notifications"
//                   color="inherit"
//                 >
//                   <Badge badgeContent={17} color="error">
//                     <MailOutlinedIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   className="mx-lg-3"
//                   size="large"
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-controls={menuId}
//                   aria-haspopup="true"
//                   onClick={handleProfileMenuOpen}
//                   color="inherit"
//                 >
//                   <Badge badgeContent={4} color="error">
//                     <NotificationsIcon />
//                   </Badge>
//                 </IconButton>
//                 <IconButton
//                   className="mx-lg-3"
//                   size="large"
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-controls={menuId}
//                   aria-haspopup="true"
//                   onClick={handleProfileMenuOpen}
//                   color="inherit"
//                 >
//                   <SettingsOutlinedIcon />
//                 </IconButton>
//                 {/* <IconButton
//                 className="mx-lg-3"
//                 size="large"
//                 edge="end"
//                 aria-label="account of current user"
//                 aria-controls={menuId}
//                 aria-haspopup="true"
//                 onClick={handleProfileMenuOpen}
//                 color="inherit"
//               >
//                 <AodRoundedIcon />
//               </IconButton> */}
//                 <IconButton
//                   className="mx-lg-3"
//                   size="large"
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-controls={menuId}
//                   aria-haspopup="true"
//                   onClick={handleProfileMenuOpen}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//               </Box>
//               <Box sx={{ display: { xs: "flex", md: "none" } }}>
//                 <IconButton
//                   size="large"
//                   aria-label="show more"
//                   aria-controls={mobileMenuId}
//                   aria-haspopup="true"
//                   onClick={handleMobileMenuOpen}
//                   color="inherit"
//                 >
//                   <MenuIcon />
//                 </IconButton>
//               </Box>
//             </Toolbar>
//           </AppBar>
//           {renderMobileMenu}
//           {renderMenu}
//         </Box>

//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//         >
//           <div className="col-lg-7 col-12 modalHeader">
//             <div className="d-flex justify-between align-items-center px-3 pb-2 pt-3">
//               <h5 className="" id="simple-modal-title">
//                 Recent Search
//               </h5>
//               <Button
//                 onClick={handleClose}
//                 className="btn-blue py-1 px-0"
//                 variant="contained"
//               >
//                 <i className="fa fa-close" aria-hidden="true"></i>
//               </Button>
//             </div>
//             <hr className="mt-0" />
//             <div className="lg:flex px-3">
//               <button
//                 className="btn btn-blue bg-[#DAEBFC!important] text-blue-500 btn-sm rounded-0 mr-3 mb-3"
//                 style={{ color: "blue" }}
//               >
//                 Python Developer
//               </button>

//               <button className="btn btn-blue bg-[#9BC0E5!important] btn-sm rounded-0 mr-3 mb-3">
//                 Python Developer
//               </button>

//               <button className="btn btn-blue bg-[#5896D4!important] btn-sm rounded-0 mr-3 mb-3">
//                 Python Developer
//               </button>

//               <button className="btn btn-blue bg-[#2B78C6!important] btn-sm rounded-0 mr-3 mb-3">
//                 Python Developer
//               </button>
//             </div>
//             <h5 className="px-3 pb-2" id="simple-modal-title">
//               Suggestion
//             </h5>
//             <hr className="mt-0" />
//             <div className="position-relative headerInput px-3">
//               <input
//                 onChange={handleChange}
//                 variant="outlined"
//                 className="form-control border-2 rouned-2 shadow"
//                 type="text"
//                 placeholder="Search your Data"
//               />
//             </div>
//             {/* <TextField
//                                     label="Filter Text"
//                                     variant="outlined"
//                                     onChange={handleChange}
//                                 /> */}
//             <List className="overflow-y-scroll h-[300px]">
//               {filteredData.map((item, index) => (
//                 <ListItem
//                   className="border px-3 py-1 d-inline-block TopDataList"
//                   key={index}
//                 >
//                   <ListItemText
//                     className="col-lg-12 TopDataListHeading Poppins-Medium"
//                     primary={item}
//                   />
//                   <ListItemText
//                     className="col-lg-12 TopDataListSmall"
//                     primary={item}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//             <Button
//               onClick={handleClose}
//               className="btn-blue m-3 px-4 py-1"
//               variant="contained"
//             >
//               Close
//             </Button>
//           </div>
//         </Modal>
//       </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Button,
  Modal,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MailOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import AodRoundedIcon from "@mui/icons-material/AodRounded";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function HeadersTop() {
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFilterText(event.target.value);
  };

  const mockData = [
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.",
  ];

  const headingMockData = [
    "Junior Python Developer",
    "Junior Python Developer",
    "Senior Python Developer",
    "Senior Python Developer",
    "Mango",
    "Grapes",
  ];

  const combinedData = [...headingMockData, ...mockData];

  const filteredData = combinedData.filter((item) =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  // modal end code

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className="headerDropdwon"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      <MenuItem className="px-1 w-auto" onClick={handleMenuClose}>
        <div>
          <div className="notification_Menu">
            <div className="row mx-0 py-2 mb-2 border-bottom align-items-center">
              <div className="col-lg-3 col-3 ps-2 pe-0">
                <img className="w-[35px] rounded-full h-[35px]" src="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png" alt="" />
              </div>
              <div className="col-lg-6 pe-0 ps-1 col-6">
                <h6 className="text-[10px]">Johan</h6>
                <p className="text-[9px] line-clamp-1">Hi, Angela, What......</p>
              </div>
              <div className="col-lg-3 col-3 pe-2 ps-0 text-end">
                <p className="text-[10px]">2.00 A.M</p>
                <div className="text-white px-2 py-1 rounded bg-blue d-inline-block">
                  <h6 className="text-[8px]">2</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="notification_Menu">
            <div className="row mx-0 py-2 mb-2 border-bottom align-items-center">
              <div className="col-lg-3 col-3 ps-2 pe-0">
                <img className="w-[35px] rounded-full h-[35px]" src="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png" alt="" />
              </div>
              <div className="col-lg-6 pe-0 ps-1 col-6">
                <h6 className="text-[10px]">Johan</h6>
                <p className="text-[9px] line-clamp-1">Hi, Angela, What......</p>
              </div>
              <div className="col-lg-3 col-3 pe-2 ps-0 text-end">
                <p className="text-[10px]">2.00 A.M</p>
                <div className="text-white px-2 py-1 rounded bg-blue d-inline-block">
                  <h6 className="text-[8px]">2</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MenuItem>

      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/">Home</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className="text-[14px]"  href="/P_M_Upcomings">P_M_Upcoming</Link>
      </MenuItem>
      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_Profile">P_M_Profile</Link>
      </MenuItem>
      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_Activity">P_M_Activity</Link>
      </MenuItem>
      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_Messages">P_M_Messages</Link>
      </MenuItem>
      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_Notifications">P_M_Notifications</Link>
      </MenuItem>
      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions1">P_M_JobDescrp1...</Link>
      </MenuItem>

      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions2">P_M_JobDescrp2...</Link>
      </MenuItem>

      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions4">P_M_JobDescrp4...</Link>
      </MenuItem>
      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions5">P_M_JobDescrp5...</Link>
      </MenuItem>

      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions6">P_M_JobDescrp6...</Link>
      </MenuItem>

      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions9">P_M_JobDescrp9..</Link>
      </MenuItem>

      <MenuItem  onClick={handleMenuClose}>
        <Link  className="text-[14px]" href="/P_M_JobDescriptions10">P_M_JobDescrp10..</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      className="headerDropdwon"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>

      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>All Page </p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box className="navbarTop bg-white" sx={{ flexGrow: 1 }}>
        <AppBar top={0} position="fixed">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              <Link href="/">
                {" "}
                <img className="logo-top" src="image/logo.png" alt="Logo" />
              </Link>
            </Typography>
            <Search
              onClick={handleOpen}
              className="ms-5 text-gray md:w-[400px]"
            >
         
              <StyledInputBase
                className="md:w-[400px]  headerSearchTop"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
                   <SearchIconWrapper className="end-3 top-0 pe-0 text-blue">
               <i className="fa fa-search"></i>
              </SearchIconWrapper>
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                className="mx-lg-3"
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <LightModeOutlinedIcon />
              </IconButton>
              <IconButton
                className="mx-lg-3"
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <MailOutlinedIcon />
                </Badge>
              </IconButton>
              {/* <IconButton
                className="mx-lg-3"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
              <IconButton
                className="mx-lg-3"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className="mx-lg-3"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >

                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton
                className="mx-lg-3"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="col-lg-7 col-12 modalHeader">
          <div className="d-flex justify-between align-items-center px-3 pb-2 pt-3">
            <h5 className="" id="simple-modal-title">
              Recent Search
            </h5>
            <Button
              onClick={handleClose}
              className="btn-blue py-[5px!important] px-0 w-[20px!important]"
              variant="contained"
            >
              <i className="fa fa-close" aria-hidden="true"></i>
            </Button>
          </div>
          <hr className="mt-0" />
          <div className="lg:flex px-3">
            <button
              className="btn btn-blue bg-[#DAEBFC!important] text-blue-500 btn-sm rounded-0 mr-3 mb-3"
              style={{ color: "blue" }}
            >
              Python Developer
            </button>

            <button className="btn btn-blue bg-[#9BC0E5!important] btn-sm rounded-0 mr-3 mb-3">
              Python Developer
            </button>

            <button className="btn btn-blue bg-[#5896D4!important] btn-sm rounded-0 mr-3 mb-3">
              Python Developer
            </button>

            <button className="btn btn-blue bg-[#2B78C6!important] btn-sm rounded-0 mr-3 mb-3">
              Python Developer
            </button>
          </div>
          <h5 className="px-3 pb-2" id="simple-modal-title">
            Suggestion
          </h5>
          <hr className="mt-0" />
          <div className="position-relative headerInput px-3 my-2">
            <input
              onChange={handleChange}
              variant="outlined"
              className="form-control border-1 rouned-2 shadow-sm"
              type="text"
              placeholder="Search your Data"
            />
          </div>
          {/* <TextField
                                    label="Filter Text"
                                    variant="outlined"
                                    onChange={handleChange}
                                /> */}
          <List className="overflow-y-scroll h-[300px]">
            {filteredData.map((item, index) => (
              <ListItem
                className="border px-3 py-1 d-inline-block TopDataList"
                key={index}
              >
                <ListItemText
                  className="col-lg-12 TopDataListHeading Poppins-Medium"
                  primary={item}
                />
                <ListItemText
                  className="col-lg-12 TopDataListSmall"
                  primary={item}
                />
              </ListItem>
            ))}
          </List>
          <Button
            onClick={handleClose}
            className="btn-blue m-3 px-4 py-1"
            variant="contained"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default HeadersTop;
