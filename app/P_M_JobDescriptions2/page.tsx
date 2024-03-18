"use client"
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import HeadersTop from "../dashboard/common/HeadersTop"
import Activity from "../dashboard/component/ProjectManager/Activity"
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject"
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates"
import SideMenu from "../dashboard/component/SideMenu"
import * as React from 'react';
import Link from 'next/link';
import StraightIcon from '@mui/icons-material/Straight';
import HistoryTab from '../dashboard/component/ProjectManager/HistoryTab';
import EditIcon from '@mui/icons-material/Edit';
function ProjectManagerJobDescriptionsTwo(params: type) {
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
                                <h1>Job Descriptions Chat Bot</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">

                                <button className="btn btn-blue">Create New JD</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                                    <div className="row justify-between align-items-center p-3">
                                        <div className="col-md-7 col-12 col-lg-7 d-flex align-items-center  mb-3 mb-md-0 ">
                                            <h4 className="small_historyText">Job Descriptions Chat Bot</h4>
                                            <h6 className='ms-4'><Link className="text-blue text-[14px]" href="/">History</Link></h6>
                                        </div>

                                        <div className="col-md-5 col-12 col-lg-5 ms-auto ps-lg-5">
                                            <div className="position-relative PostedInput">
                                                <input className="form-control border-0 rouned-2" type="text" placeholder='Search.......' />
                                                <button className="PostedSearch p-0"> <img src="image/search.png" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-lg-3'>
                                        <HistoryTab/>
                                        </div>

                                        <div className='col-lg-9'>
                                            <div className='bg-[#F9F9F9] p-3 mx-3'>
                                                <div className='d-flex justify-between mb-3'>
                                                    <p className='text-[16px] Poppins-Bold'>Python Developers</p>

                                                    <div>
                                                        <button className="px-2">
                                                            <i className="fa fa-reply" aria-hidden="true"></i>

                                                        </button>
                                                        <button className="px-2">
                                                            <EditIcon className="text-[#0B74AD]"/>
                                                        </button>
                                                        <button className="px-2">
                                                            <i className="fa fa-share text-blue" aria-hidden="true"></i>

                                                        </button>
                                                    </div>
                                                </div>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                                <p className='mb-3 text-[13px] Poppins-Regular'>Job descriptions for Python developers can vary depending on the specific role and responsibilities within a company. Here's a general outline of what you might find in a job description for a Python developer:</p>
                                            </div>

                                            <div className='my-3 mx-3 position-relative'>
                                                <input type="text" className='form-control rounded-0 text-[16px] Poppins-Regular' placeholder='Please enter your notes or questions or chat' />
                                                <button className='bg-[#DBEAF3] hover:bg-blue-400 px-3 py-2 position-absolute top-[1px] right-0' >
                                                    <StraightIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4">
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

export default ProjectManagerJobDescriptionsTwo