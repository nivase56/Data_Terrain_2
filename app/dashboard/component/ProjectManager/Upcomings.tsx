import React from 'react';
import Link from 'next/link';

function AppointmentItem({ date, title, creator, time }) {
    return (
        <div className="row mt-4 align-items-center ">
            <div className="col-3 pe-0">
                <div className="bg-[#ddd] text-center rounded-2 py-3 px-2">
                    <h6 className="text-[12px] text-blue">{date}</h6>
                    <h6 className="text-[12px] text-blue">Feb</h6>
                </div>
            </div>

            <div className="col-6 pe-0">
                <h6 className="text-[12px] Poppins-Medium">{title}</h6>
                <h6 className="text-[11px] mt-1">Created by <Link className='text-blue' href="/">{creator}</Link></h6>
                <h6 className="text-[9px] text-muted mt-1">{time}</h6>
            </div>

            <div className="col-3 text-end">
                <button className=" btn btn-blue btn-sm text-[13px!important]">Details</button>
            </div>
        </div>
    );
}

export default function AppointmentsPage() {
    const appointments = [
        {
            date: '07',
            title: 'Interview with Designer',
            creator: 'Stella',
            time: '10 A.M to 11 A.M',
            colorName:'#d6e2e8'
        },
        {
            date: '07',
            title: 'Interview with Designer',
            creator: 'Stella',
            time: '10 A.M to 11 A.M',
            colorName:'#d6e2e8'
        },
        {
            date: '07',
            title: 'Interview with Designer',
            creator: 'Stella',
            time: '10 A.M to 11 A.M',
            colorName:'#d6e2e8'
        },
        // Add more appointments as needed
    ];

    return (
        <div>

            <div className="flex justify-between align-items-center ">
                <h5>Upcomings</h5>
                <Link className='text-blue text-[14px]' href="/P_M_Upcomings">
                    <u>View All</u>
                </Link>
            </div>

            {appointments.map((appointment, index) => (
                <AppointmentItem key={index} {...appointment} />
            ))}
        </div>
    );
}
