
import React from 'react';

function PostedJobsCard(props: { imageSrc: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; bgColor: any; number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; percentage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
    textColor:any }) {
    return (
        <div className="col-lg-3 col-md-4 px-2">
            <div className="shadow bg-white p-3 mt-3">
                <div className="d-flex pb-2 align-items-center ">
                    <img className="h-[15px]" src={props.imageSrc} alt="" />
                    <h4 className="text-[16px] Poppins-Regular ms-2 text-[#091316]">{props.title}</h4>
                </div>
                <hr className="my-1" />
                <h6 className="text-[14px] Poppins-Regular text-[#091316] text-center mt-3">{props.category}</h6>
                <div className="p-1 w-[55px] h-[55px] my-3 mx-auto align-items-center flex justify-center" style={{backgroundColor:props.bgColor}}>
                    <h6 style={{color:props.textColor}} className={`Poppins-Bold  text-[20px]`}>{props.number}</h6>
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