
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
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MailOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HeaderSearch from "./HeaderSearch";


function HeadersTop() {


  // modal end code

  const [profileMenu, setProfileMenu] = React.useState<null | HTMLElement>(null);
  const [mobileMore, setMobileMore] =
    React.useState<null | HTMLElement>(null);

  const [notificationMenu, setNotification] = React.useState<null | HTMLElement>(null);

  const handleNotification = (event: React.MouseEvent<HTMLElement>) => {
    setNotification(event.currentTarget);
  };


  const isprofileMenu = Boolean(profileMenu);
  const isNotificationMenu = Boolean(notificationMenu);
  const isMobileMenuOpen = Boolean(mobileMore);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenu(event.currentTarget);
  };

  const handleMobileOneMenuClose = () => {
    setMobileMore(null);
  };

  const handleOneMenuClose = () => {
    setProfileMenu(null);
    handleMobileOneMenuClose();
  };

  const handleMenuTwoClose = () => {
    setNotification(null);
    handleMobileOneMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMore(event.currentTarget);
  };




  const menuId = "primary-search-account-menu";
  const menu_IdTwo = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className="headerDropdwon"
      anchorEl={profileMenu}
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
      open={isprofileMenu}
      onClose={handleOneMenuClose}
    >
      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_Profile">Profile</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/">Sign Out</Link>
      </MenuItem>
    </Menu>
  );


  const render_MenuTwo = (
    <Menu
      className="headerDropdwon"
      anchorEl={notificationMenu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menu_IdTwo}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isNotificationMenu}
      onClose={handleMenuTwoClose}
    >

      <MenuItem className="w-auto" onClick={handleOneMenuClose}>

        <div>
          <h5 className="text-center">Notifications</h5>
          <p className="text-center text-[10px]">You have Received in 20 notifications</p>
          <hr className="my-1" />
          <Link href="/P_M_Notifications">
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
                  <div className="px-2 py-1 rounded bg-blue d-inline-block">
                    <h6 className="text-[8px] text-white">2</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/P_M_Notifications">
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
                  <div className=" px-2 py-1 rounded bg-blue d-inline-block">
                    <h6 className="text-[8px] text-white">2</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </MenuItem>


      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_JobDescriptions2">P_M_JobDescrp2...</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_JobDescriptions4">P_M_JobDescrp4...</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_JobDescriptions5">P_M_JobDescrp5...</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_JobDescriptions6">P_M_JobDescrp6...</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_JobDescriptions9">P_M_JobDescrp9..</Link>
      </MenuItem>

      <MenuItem onClick={handleMenuTwoClose}>
        <Link className="text-[14px]" href="/P_M_JobDescriptions10">P_M_JobDescrp10..</Link>
      </MenuItem>
      <MenuItem onClick={handleOneMenuClose}>
        <Link className="text-[14px]" href="/P_M_SendHistory1">P_M_SendHistory1...</Link>
      </MenuItem>
      <MenuItem onClick={handleOneMenuClose}>
        <Link className="text-[14px]" href="/P_M_RequestStatus1">P_M_RequestStatus1...</Link>
      </MenuItem>
      <MenuItem onClick={handleOneMenuClose}>
        <Link className="text-[14px]" href="/InterviewStatusForm1">InterviewStatusForm1...</Link>
      </MenuItem>


    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      className="headerDropdwon mobileMenu"
      anchorEl={mobileMore}
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
      onClose={handleMobileOneMenuClose}
    >


      <MenuItem>
        <Link href="/P_M_Messages">
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <LightModeOutlinedIcon className="w-[30px] text-[20px] me-1" />
            <p className="text-[12px]">Dark</p>
          </IconButton>
        </Link>

      </MenuItem>

      <MenuItem>
        <Link href="/P_M_Messages">
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon className="w-[30px] text-[20px] me-1" />
            </Badge>
            <p className="text-[12px]">Messages</p>
          </IconButton>
        </Link>

      </MenuItem>
      <MenuItem onClick={handleNotification}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon className="w-[30px] text-[20px] me-1" />
          </Badge>
          <p className="text-[12px]">Notifications</p>
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <SettingsOutlinedIcon className="w-[30px] text-[20px] me-1" />
          <p className="text-[12px]">Setting</p>
        </IconButton>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle className="w-[30px] text-[20px] me-1" />
          <p className="text-[12px]">Profile</p>
        </IconButton>
      </MenuItem>


    </Menu>
  );

  return (
    <>
      <Box className="navbarTop bg-white" sx={{ flexGrow: 1 }}>
        <AppBar top={0} position="fixed">
          <Toolbar>

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

            <HeaderSearch />

            <Box sx={{ flexGrow: 1 }} />
            <Box className="headerTopIcon" sx={{ display: { xs: "none", md: "flex" } }}>
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

                <Link href="/P_M_Messages">
                  <Badge badgeContent={17} color="error">
                    <MailOutlinedIcon />
                  </Badge>
                </Link>

              </IconButton>

              <IconButton
                className="mx-lg-3"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menu_IdTwo}
                aria-haspopup="true"
                onClick={handleNotification}
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
        {render_MenuTwo}
      </Box>

    </>
  );
}

export default HeadersTop;
