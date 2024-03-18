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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




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
                                <h1>Project Manager</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">

                                <button className="btn btn-blue bg-[#0a66c2!important]">Assign Tasks</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                                    <div className="row justify-between align-items-center p-3 ">
                                        <div className="col-md-5 col-12 col-lg-8 d-flex align-items-center  mb-3 mb-md-0 ">
                                            <h4 className="small_historyText">Python Developer 1st Level Interview Form</h4>
                                        </div>

                                        <div className='col-lg-2 col-4 col-md-2 text-end'>
                                            <Button className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex" >
                                                Later
                                            </Button>
                                        </div>

                                        <div className='mt-5'>
                                            <div className='row'>
                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="Candidate Name"
                                                        defaultValue="John Smith"
                                                    />
                                                </div>



                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="Position"
                                                        defaultValue="Python Developer"
                                                    />
                                                </div>

                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="HR Manager Name"
                                                        defaultValue="Jasmine"
                                                    />
                                                </div>

                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="Interviewer Name"
                                                        defaultValue="Stella"
                                                    />
                                                </div>



                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        type='date'
                                                        defaultValue="09/02/2024r"
                                                    />
                                                </div>

                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="Start Time"
                                                        defaultValue="10:15 A.M"
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-8'>
                                                    <div className='row'>
                                                        <div className='col-lg-6 col-md-4 mb-4'>
                                                            <TextField
                                                                className='w-100'
                                                                required
                                                                id="CandidateName"
                                                                label="End Time"
                                                                defaultValue="10:15 A.M"
                                                            />
                                                        </div>

                                                        <div className='col-lg-6 col-md-4 mb-4'>
                                                            <TextField
                                                                className='w-100'
                                                                required
                                                                id="CandidateName"
                                                                label="Enter your Mark 1"
                                                            />
                                                        </div>

                                                        <div className='col-lg-6 col-md-4 mb-4'>
                                                            <TextField
                                                                className='w-100'
                                                                required
                                                                id=""
                                                                label="Enter your Mark 2 (Optional)"
                                                            />
                                                        </div>

                                                        <div className='col-lg-6 col-md-4 mb-4'>
                                                            <TextField
                                                                className='w-100'
                                                                required
                                                                id=""
                                                                label="Enter your Mark 3 (Optional)"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        id="outlined-multiline-flexible"
                                                        label="Multiline"
                                                        multiline
                                                        className='w-100'
                                                        maxRows={8}
                                                        rows={4.4}
                                                    />
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="Enter your Mark 4 (Optional)"
                                                    />
                                                </div>



                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                    <TextField
                                                        className='w-100'
                                                        required
                                                        id="CandidateName"
                                                        label="Enter your Mark 5 (Optional)"
                                                    />
                                                </div>

                                                <div className='col-lg-4 col-md-4 mb-4'>
                                                <button className="btn btn-blue w-100 h-100">SUBMIT YOUR INPUTS</button>
                                                </div>

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

