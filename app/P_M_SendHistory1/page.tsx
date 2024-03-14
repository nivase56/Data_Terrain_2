"use client"
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import HeadersTop from "../dashboard/common/HeadersTop"
import Activity from "../dashboard/component/ProjectManager/Activity"
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject"
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates"
import SideMenu from "../dashboard/component/SideMenu"
import * as React from 'react';
import Link from 'next/link';
import HistoryTab from '../dashboard/component/ProjectManager/HistoryTab';
import DateRangeIcon from '@mui/icons-material/DateRange';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function P_M_SendHistory1(params: type) {

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
                                <h1>Job Descriptions</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                                <button className="btn btn-light me-3 mx-lg-2">
                                    JD Assets
                                </button>
                                <button className="btn btn-blue bg-[#0a66c2!important]">Create New JD</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                                    <div className="row justify-between align-items-center p-3">
                                        <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                                            <h4 className="text-[22px] text-[#091316] font-family: Poppins-Medium">History</h4>
                                            <h6 className='ms-4'><Link className="text-blue text-[14px]" href="/">History</Link></h6>
                                        </div>

                                        <div className="col-md-5 col-12 col-lg-5 ms-auto ps-lg-5">
                                            <div className="position-relative PostedInput">
                                                <input className="form-control border-0 rouned-2" type="text" placeholder='Search.......' />
                                                <button className="PostedSearch p-0"> <img src="image/search.png" alt="" /></button>
                                            </div>
                                        </div>

                                        <div className='col-lg-2 col-4 col-md-2 text-end'>
                                            <button
                                                className="text-blue hover:text-white align-items-center shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex text-center justify-center"
                                                id="basic-button"
                                            >
                                                <DateRangeIcon className='' /> Date Filter
                                            </button>
                                        </div>
                                    </div>


<div className='p-3 m-3'>

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
        </section>
    )
}

export default P_M_SendHistory1