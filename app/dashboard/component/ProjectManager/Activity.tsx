import React from 'react';
import Link from 'next/link';

function ActivityItem(props) {
    return (
        <div className="row mt-4 align-items-center ">
            <div className="col-3 pe-0">
               <img className='h-[60px] w-[60px] rounded-full object-cover' src={props.profileImg} alt="" />
            </div>

            <div className="col-9 pe-0">
                <h6 className="text-[12px] Poppins-Medium">{props.title}<span className='text-blue'> [Python Developer]</span></h6>
                <h6 className="text-[11px] mt-1">Created by <Link href="/">{props.creator}</Link></h6>
                <h6 className="text-[9px] text-muted mt-1">{props.time}</h6>
            </div>
        </div>
    );
}

export default function Activity() {
    const appointments = [
        {
            time: '15 mins ago',
            title: 'John Doe',
            creator: 'Stella',
           profileImg: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
            
        },
        {
            time: '17 mins ago',
            title: 'John Doe',
            creator: 'Stella',
            profileImg: 'https://www.shutterstock.com/shutterstock/videos/1086926591/thumb/12.jpg?ip=x480'

        },
        {
            time: '15 mins ago',
            title: 'John Doe',
            creator: 'Stella',
            profileImg: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'

            
        },
        // Add more appointments as needed
    ];

    return (
        <div>

            <div className="flex justify-between align-items-center ">
                <h5>Activity</h5>
                <Link className='text-blue text-[14px]' href="#">
                    <u>View All</u>
                </Link>
            </div>

            {appointments.map((appointment, index) => (
                <ActivityItem key={index} {...appointment} />
            ))}
        </div>
    );
}
