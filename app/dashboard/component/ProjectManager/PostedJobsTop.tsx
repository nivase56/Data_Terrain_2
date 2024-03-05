import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"

function PostedJobsTop(props: { titleName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) {
    return(
        <>
           <div className="row justify-between align-items-center p-3 mt-4">
                <div className="col-md-5 col-12 col-lg-4 d-flex mb-3 mb-md-0 justify-between align-items-center ">
                    <h4 className='Poppins-Bold'>{props.titleName}</h4>
                    <h6><Link className="text-blue text-[14px]" href="/"><u>View All</u></Link></h6>
                </div>

                <div className="col-md-5 col-8 col-lg-5 ms-auto ps-lg-5">
                    <div className="position-relative PostedInput">
                        <input className="form-control border-0 rouned-2" type="text" />
                       <button className="PostedSearch p-0"> <img src="image/search.png" alt="" /></button>
                    </div>
                </div>


                <div className="col-lg-2 col-4 col-md-2 text-end">
                    <button className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto">
                        <img src="image/filterBtn.png" className="h-[10px]" alt="" /> Filters
                    </button>
                </div>
            </div>
        </>
    )
}

export default PostedJobsTop