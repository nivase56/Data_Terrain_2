"use client"
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import HeadersTop from "../dashboard/common/HeadersTop"
import Activity from "../dashboard/component/ProjectManager/Activity"
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject"
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates"
import SideMenu from "../dashboard/component/SideMenu"

import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';

import Link from 'next/link';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CandidatesStatus3(_params: type) {


    return (
        <section className="">
            <HeadersTop />
            {/* ... rest of your component code */}

            <div className="container-fluid my-md-5 my-4">
                <div className="row">
                    <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
                        <SideMenu />
                    </div>

                    <div className="col-lg-11 pe-lg-4 ps-lg-0">
                        <div className="row justify-content-between  align-items-center">
                            <div className="col-lg-8 projectText">
                                <h1>Teams</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                                <Link href="/P_M_JobDescriptions1" className="btn btn-light me-3 mx-lg-2">
                                    JD Assets
                                </Link>
                                <Link href="P_M_JobDescriptions4" className="btn btn-blue">Create New JD</Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="shadow bg-white mt-4 rounded-3 p-3">
                                    <div className="flex justify-between items-center border-bottom pb-3">
                                        <h2 className="text-[22px] Poppins-Medium">Interview Candidate Status</h2>
                                        <a className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]" href="/">
                                            <i className="fa fa-close"></i>
                                        </a>
                                    </div>

                                    <div className="border-t border-l border-b border-r border-[#0B74AD] rounded mt-4">
                                        <div className="row mx-0">
                                            <div className="col-lg-7 px-0  lg:border-r  border-[#0B74AD]">
                                                <table className="table">
                                                    <tr>
                                                        <th className='px-3 py-2 text-[#0A66C2]  border-b border-r border-[#0B74AD] text-center'>Details #1</th>
                                                        <th className='px-3 py-2 text-[#0A66C2] border-b border-[#0B74AD] text-center'>Details #2</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>Candidate Name:</td>
                                                        <td className='px-3 py-2'>John Smith</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>Applied Position:</td>
                                                        <td className='px-3 py-2'>Senior Python Developer</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>Interviewer Name:</td>
                                                        <td className='px-3 py-2'>Stella</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>Applied Portal:</td>
                                                        <td className='px-3 py-2'>LinkedIn</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>Application Received Date:</td>
                                                        <td className='px-3 py-2'>05 Jul 2023</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>1st Level:</td>
                                                        <td className='px-3 py-2'><span className="text-blue p-0 border-bottom-0">7/10</span>, Time: 20 Mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>2nd Level:</td>
                                                        <td className='px-3 py-2'><span className="text-blue p-0 border-bottom-0">6/10</span>, Time: 20 Mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>3rd Level:</td>
                                                        <td className='px-3 py-2'><span className="text-blue p-0  border-bottom-0">3/10</span>, Time: 25 Mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>Status:</td>
                                                        <td className='px-3 py-2 text-[#F5C961]'>Active</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='px-3 py-2'>....</td>
                                                        <td className='px-3 py-2'>....</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div className="col-lg-5 px-0 text-center Details ">

                                                <table className='table'>
                                                    <tr>
                                                        <th className='px-3 py-2 text-[#0A66C2] border-b border-[#0B74AD] text-center'>Details #3</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='py-4 px-3'>
                                                            <img src="image/InterviewPerformance.png" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='py-4 px-3 border-t border-[#0B74AD] '>
                                                            <img src="image/InterviewPerformance.png" alt="" />
                                                        </td>
                                                    </tr>
                                                    
                                                    <td>

                                                    </td>
                                                </table>


                                            </div>
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

export default CandidatesStatus3