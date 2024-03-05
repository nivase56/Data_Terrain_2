"use client"
import Link from "next/link";
import React from 'react';

const SideMenu = () => {
    return (
        <ul className="d-none d-lg-block deshboard_Menu shadow">
             <li>
                
                <Link href="/user">
                    <img src="image/Vector.png" alt="" />
                </Link>
            </li>
            <li>
                <img src="image/user1.png" alt="" />
            </li>

            <li >
                <img src="image/shoping.png" alt="" />
            </li>


            <li >
                <img src="image/filter.png" alt="" />
            </li>


            <li>
                <img src="image/noteIcon.png" alt="" />
            </li>

            <li>
                <img src="image/Frame.png" alt="" />
            </li>


            <li>
                <img src="image/help.png" alt="" />
            </li>

            <li>
                <img src="image/menuSElect.png" alt="" />
            </li>


            <li>
                <img src="image/menuData.png" alt="" />
            </li>

            <li>
                <img src="image/help.png" alt="" />
            </li>

            <li>
                <img src="image/menuSElect.png" alt="" />
            </li>


            <li>
                <img src="image/menuData.png" alt="" />
            </li>

           
        </ul>
    );
};

export default SideMenu