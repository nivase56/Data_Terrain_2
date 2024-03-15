"use client"
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import HeadersTop from "../dashboard/common/HeadersTop"
import Activity from "../dashboard/component/ProjectManager/Activity"
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject"
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates"
import SideMenu from "../dashboard/component/SideMenu"
import Link from 'next/link';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RequestBoard from '../dashboard/component/ProjectManager/RequestBoardTable';






// tabs code start

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


export default function P_M_RequestStatus1() {

    // filter btn
    const [filterBtn, setfilterBtn] = React.useState<null | HTMLElement>(null);
    const open = Boolean(filterBtn);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setfilterBtn(event.currentTarget);
    };
    const handleClose = () => {
        setfilterBtn(null);
    };
    // filter btn end


    // tabls code start
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    //tabs end


    return (
        <section className="">
            <HeadersTop />

            <div className="container-fluid my-md-5 my-4">
                <div className="row">
                    <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
                        <SideMenu />
                    </div>

                    <div className="col-lg-11 pe-lg-4 ps-lg-0">
                        <div className="row justify-content-between  align-items-center">
                            <div className="col-lg-8 projectText">
                                <h1>Team Expansion Request Board</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">

                                <button className="btn btn-blue bg-[#0a66c2!important]">Assign Tasks</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                                    <div className="row justify-between align-items-center p-3">
                                        <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                                            <h4 className="text-[22px] text-[#091316] font-family: Poppins-Medium">TL Requests</h4>
                                            <Link href='/' className='mx-3'>
                                                <img src="image/edit.png" alt="" />
                                            </Link>

                                            <Link href='/' className='mx-3'>
                                                <img src="image/calendar.png" alt="" />
                                            </Link>
                                        </div>

                                        <div className="col-md-5 col-8 col-lg-5 ms-auto ps-lg-5">
                                            <div className="position-relative PostedInput">
                                                <input className="form-control border-0 rouned-2" type="text" placeholder='Search.......' />
                                                <button className="PostedSearch p-0"> <img src="image/search.png" alt="" /></button>
                                            </div>
                                        </div>

                                        <div className='col-lg-2 col-4 col-md-2 text-end'>
                                            <Button
                                                className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex"
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <FilterListIcon /> Filters
                                            </Button>

                                            <Menu
                                                className="filterBtns"
                                                id="basic-menu"
                                                anchorEl={filterBtn}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                            </Menu>
                                        </div>

                                        <div className='mt-5'>
                                            <Box className="requesttableTabs" sx={{ width: '100%' }}>
                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                        <Tab label="All [360]" {...a11yProps(0)} />
                                                        <Tab label="Processing [178]" {...a11yProps(1)} />
                                                        <Tab label="Completed [108]" {...a11yProps(2)} />
                                                        <Tab label="Rejected [28]]" {...a11yProps(3)} />
                                                    </Tabs>
                                                </Box>
                                                <CustomTabPanel className="" value={value} index={0}>
                                                    <RequestBoard/>
                                                </CustomTabPanel>
                                                <CustomTabPanel value={value} index={1}>
                                                    Item Two
                                                </CustomTabPanel>
                                                <CustomTabPanel value={value} index={2}>
                                                    Item Three
                                                </CustomTabPanel>

                                                <CustomTabPanel value={value} index={3}>
                                                    Item four
                                                </CustomTabPanel>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12 mt-4">
                                <div className="overflow-hidden d-flex justify-center">
                                    <CalendarProject />
                                </div>
                                <div className="mt-5">
                                    <Upcomings />
                                </div>

                                <div className="mt-5">
                                    <Activity />
                                </div>

                                <div className="mt-5">
                                    <HiringCandidates />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

