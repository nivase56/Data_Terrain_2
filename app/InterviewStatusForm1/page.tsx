"use client"
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import HeadersTop from "../dashboard/common/HeadersTop"
import Activity from "../dashboard/component/ProjectManager/Activity"
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject"
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates"
import SideMenu from "../dashboard/component/SideMenu"

import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// modal start
import Modal from '@mui/material/Modal';
// modal end
// tabs code start



export default function P_M_RequestStatus1() {
   

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
                                        

                                        </div>

                                     

                                        <div className='col-lg-2 col-4 col-md-2 text-end'>
                                            <Button
                                                className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex" >
                                             filter
                                            </Button>

                                        </div>

                                        <div className='mt-5'>
                                          
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

