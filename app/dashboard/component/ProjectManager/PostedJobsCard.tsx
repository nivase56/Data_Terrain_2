
// function PostedJobsCard() {
//     return (
//         <div className="shadow bg-white p-3 mt-3">

//             <div className="d-flex pb-2 align-items-center ">
//                 <img className="h-[15px]" src="image/python.png" alt="" />
//                 <h4 className="text-[13px] md:text-[14px] ms-2">Python Developer</h4>
//             </div>

//             <hr />

//             <h6 className="text-[16px] Poppins-Regular text-center mt-3">Senior Developers</h6>

//             <div className="bg-[#0A66C2] p-1 w-[55px] h-[55px] my-3 mx-auto align-items-center flex justify-center">
//                 <h6 className="Poppins-Bold text-white text-[20px]">303</h6>
//             </div>

//             <h6 className="text-[16px] Poppins-Regular text-center">Senior Developers</h6>

//             <hr />

//             <div className="flex justify-between align-items-center ">
//                 <div className="flex align-items-center ">
//                     <img className="h-3 mr-2" src="image/arrowiocn.png" alt="" />
//                     <p className="text-[8px] md:text-[10px]"><span className="text-blue">22%</span> vs Last Week</p>
//                 </div>
//                 <p className="text-[8px] md:text-[10px]">6 mins ago</p>
//             </div>


//         </div>
//     )
// }


// export default PostedJobsCard;


// PostedJobsCard.js
import React from 'react';

function PostedJobsCard(props) {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="shadow bg-white p-3 mt-3">
                <div className="d-flex pb-2 align-items-center ">
                    <img className="h-[15px]" src={props.imageSrc} alt="" />
                    <h4 className="text-[16px] Poppins-Regular ms-2 text-[#091316]">{props.title}</h4>
                </div>
                <hr />
                <h6 className="text-[14px] Poppins-Regular text-[#091316] text-center mt-3">{props.category}</h6>
                <div className="bg-[#0A66C2] p-1 w-[55px] h-[55px] my-3 mx-auto align-items-center flex justify-center">
                    <h6 className="Poppins-Bold text-white text-[20px]">{props.number}</h6>
                </div>
                <h6 className="text-[14px] Poppins-Regular text-[#091316] text-center">{props.category}</h6>
                <hr />
                <div className="flex justify-between align-items-center ">
                    <div className="flex align-items-center ">
                        <img className="h-3 mr-2" src="image/arrowiocn.png" alt="" />
                        <p className="text-[8px] md:text-[10px]"><span className="text-blue">{props.percentage}</span> vs Last Week</p>
                    </div>
                    <p className="text-[8px] md:text-[10px]">{props.time}</p>
                </div>
            </div>
        </div>
    );
}

export default PostedJobsCard;