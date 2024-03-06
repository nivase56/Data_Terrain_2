"use client"
import { useEffect } from 'react';
import Logo from '../assets/image/logo.png'
import React from 'react';

const HeaderTop = () => {
    return (
        <header id="header" className="navbarscroll shadow w-100 headerNav headerTop">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-5">
                        <a className="p-0 d-flex align-items-center" href="index.html">
                            <img className="logo-top" src="image/logo.png" alt="Logo" />
                        </a>
                    </div>

                    <div className='col-lg-4 col-md-5 col-6'>
                        <div className="position-relative headerInput">
                            <input className='form-control border-0 rouned-2' type="text" />
                          <button className="headerSearch p-0 btn"> 
                           <img src="image/search.png"  alt="" /></button>
                        </div>
                    </div>

                    <div className="main-nav d-none col-md-3 d-lg-flex justify-content-end col-lg-5">
                        <div className="text-end">
                            <button className="navbar-toggler mobileMenuDrop d-lg-none mobile-nav-toggle border-0 px-3 d-lg-none"
                                type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i
                                    className="fa fa-bars text-dark" aria-hidden="true"></i> </button>
                        </div>

                        <ul className="d-flex align-items-center headerIcon">
                            <li className=""><a className="scrollLink active" href="#homeTop">
                                <img src="image/day-mode1.png" alt="" />
                            </a></li>
                            <li className=""><a className="scrollLink" href="#">
                                <img src="image/Component1.png" alt="" />
                            </a></li>
                            <li className="">
                                <a className="scrollLink" href="">
                                    <img src="image/notification1.png" alt="" />
                                </a>
                            </li>
                            <li className="">
                                <a className="" href="">
                                    <img src="image/settings-gear-icon1.png" alt="" />
                                </a>
                            </li>

                            <li className="">
                                <img className="HeaderProfile" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                            </li>
                        </ul>
                    </div>


                    <div className="col-1 text-end">
                        <button className="navbar-toggler mobile-nav-toggle border-0 p-0 d-lg-none" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"> <i className="fa fa-bars text-dark"
                                aria-hidden="true"></i> </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default HeaderTop;