import Link from "next/link";
import HeadersTop from "../dashboard/common/HeadersTop";
import SideMenu from "../dashboard/component/SideMenu";
function ProjectManagerUpcomings() {
  return (
    <>
      <HeadersTop />
      <section className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>
          <div className="col-lg-7 mx-auto">
            <div className="shadow p-3">
              <div className="flex justify-between items-center border-bottom pb-3">
                <h2 className="text-[22px] Poppins-Medium">Upcoming’ s</h2>
                <Link
                  href="/"
                  className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]"
                >
                  {" "}
                  <i className="fa fa-close"></i>
                </Link>
              </div>

              <div className="row border mx-0 p-3 mt-3 align-items-center ">
                <div className="col-lg-6 col-md-6 md:border-r border-gray-200">
                  <ul className="text-[#3E3E3E]">
                    <li className="py-2">Interview Via: Google Meet</li>
                    <li className="py-2">Interview Time: 10 - 11 A.M</li>
                    <li className="py-2">Interview Date: 6th Mar 2024</li>
                    <li className="py-2">Created By: HR Manager</li>
                    <li className="py-2">Position: Python Developer</li>
                    <li className="py-2">Interview With: John Smith</li>
                  </ul>
                  <div className="mt-4">
                    <button className="btn btnOutlineblue">
                      Resume.docx
                      {/* <i className="fa fa-eye mx-2"></i> */}
                      <img src="image/eye.png" alt="" className="mx-2"  />

                      <i className="fa fa-download"></i>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0 col-md-6">
                  <div className="p-3 w-[180px] m-auto d-flex justify-center align-items-center border">
                    <img
                      className="w-[150px]"
                      src="image/google-meet-logo.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <button className="btn btn-blue px-4">JOIN</button>
                  </div>
                </div>
              </div>
              <div className="row border mx-0 p-3 mt-4 align-items-center">
                <div className="col-lg-6 col-md-6 md:border-r border-gray-200">
                  <div className="">
                    <ul className="text-[#3E3E3E]">
                      <li className="py-2">Interview Via: Google Meet</li>
                      <li className="py-2">Interview Time: 10 - 11 A.M</li>
                      <li className="py-2">Interview Date: 6th Mar 2024</li>
                      <li className="py-2">Created By: HR Manager</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0 col-md-6">
                  <div className="p-3 w-[180px] m-auto d-flex justify-center align-items-center border">
                    <img
                      className="w-[150px]"
                      src="image/google-meet-logo.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectManagerUpcomings;
