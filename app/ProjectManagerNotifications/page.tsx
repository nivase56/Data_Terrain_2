
"use client"

import React, { useState } from 'react';
import HeadersTop from '../dashboard/common/HeadersTop';
import SideMenu from '../dashboard/component/SideMenu';
import CalendarProject from '../dashboard/component/ProjectManager/CalendarProject';
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import Activity from '../dashboard/component/ProjectManager/Activity';
import HiringCandidates from '../dashboard/component/ProjectManager/HiringCandidates';
import Link from 'next/link';


function Message(props) {
    return (
        <div className={props.className}>
            <div className="row mx-0 py-2 mb-2 border-bottom align-items-center">
                <div className="col-lg-2 col-3 ps-2 pe-0">
                    <img className="w-[50px] rounded-full h-[50px]" src={props.imageSrc} alt="" />
                </div>
                <div className="col-lg-7 col-6">
                    <h6 className='text-[15px]'>{props.name}</h6>
                    <p className='text-[12px] line-clamp-1'>{props.message}</p>
                </div>
                <div className="col-lg-3 col-3 pe-2 ps-0 text-end">
                    <p className='text-[10px]'>{props.time}</p>
                    {props.count &&
                        <div className=" text-white px-2 py-1 text-[10px] rounded bg-blue d-inline-block">
                            <h6 className="text-[10px]">{props.count}</h6>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default function ProjectManagerMessages() {
    //tab end
    return (

        <section className="demo">
            <HeadersTop />

            <div className="container-fluid my-md-5 my-4">
                <div className="row">
                    <div className="col-lg-1 ps-0 position-relative">
                        <SideMenu />
                    </div>

                    <div className="col-lg-11 pe-lg-4">
                        <div className="row justify-content-between  align-items-center">
                            <div className="col-lg-8 ps-lg-0 projectText">
                                <h1>Notifications</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                                <button className="btn btn-light me-3 mx-lg-2">
                                    JD Assets
                                </button>
                                <button className="btn btn-blue">Create New JD</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9 ps-lg-0">
                               <div className="shadow mt-4 rounded-3 p-3">
table-primary
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


    );
}
