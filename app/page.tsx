import Image from "next/image";
import Headers from "./dashboard/common/HeadersTop";
import ApplicationsReceived from "./dashboard/component/ProjectManager/ApplicationsReceived";
import ChartGraph from "./dashboard/component/ProjectManager/ChartGraph";

import SideMenu from "./dashboard/component/SideMenu";
import TotalEmployees from "./dashboard/component/ProjectManager/TotalEmployees";
import NumberofVacancies from "./dashboard/component/ProjectManager/NumberofVacancies";
import Number_of_Interviews from "./dashboard/component/ProjectManager/Number_of_Interviews";
import TodayInterviews from "./dashboard/component/ProjectManager/TodayInterviews";

import PostedJobsCard from "./dashboard/component/ProjectManager/PostedJobsCard";
import CandidateStatus from "./dashboard/component/ProjectManager/CandidateStatus";
import PostedJobsTop from "./dashboard/component/ProjectManager/PostedJobsTop";
import Upcomings from "./dashboard/component/ProjectManager/Upcomings";
import Activity from "./dashboard/component/ProjectManager/Activity";
import HiringCandidates from "./dashboard/component/ProjectManager/HiringCandidates";
import GraphProject from "./dashboard/component/ProjectManager/GraphProject";
import CalendarProject from "./dashboard/component/ProjectManager/CalendarProject";

export default function Home() {
  

  // Define an array of data objects representing each card's content
  const jobsData = [
    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
    },

    // Add more job data objects as needed
  ];

  return (
    <main className="demo">
      <Headers />

      <section className="container-fluid my-5">
        <div className="row">
          <div className="col-lg-1 ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4">
            <div className="row justify-content-between  align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Project Manager</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-end">
                <button className="btn btn-light me-3 mx-lg-2">
                  JD Assets
                </button>
                <button className="btn btn-blue">Create New JD</button>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-8 col-md-7 mt-3 mt-md-0 projectText d-flex">
                <GraphProject />
              </div>

              <div className="col-lg-4 col-md-5 mt-3 mt-md-0 d-flex">
                <ApplicationsReceived />
              </div>
            </div>

            {/* new section */}

            <div className="row">
              <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                <TotalEmployees />
              </div>

              <div className="col-lg-4 col-md-6 mt-4 pt-md-2">
                <NumberofVacancies />
              </div>

              <div className="col-lg-4 col-md-12 mt-4 pt-md-2">
                <Number_of_Interviews />
              </div>
            </div>

            {/* new section */}

            <div className="row">
              <div className="col-lg-9 mt-4">
                <div className="shadow bg-white p-3">
                  <h3 className="projectManHeading">
                    Today Interviews Meetings Info
                  </h3>
                  <hr className="my-3" />

                  <div className="d-flex overflow-x-scroll">
                    <TodayInterviews />
                    <TodayInterviews />
                    <TodayInterviews />
                    <TodayInterviews />
                  </div>
                </div>

                {/* new section */}

                <div className="shadow bg-white">
                  <PostedJobsTop titleName="Posted Jobs" />

                  <div className="row px-3 pb-3">
                    {jobsData.map((job, index) => (
                      <PostedJobsCard key={index} {...job} />
                    ))}
                  </div>
                </div>

                {/* new sections */}
                <div className="shadow bg-white">
                  <PostedJobsTop titleName="Candidate Status" />
                  <CandidateStatus />
                </div>
              </div>

              <div className="col-lg-3 mt-4">
                <CalendarProject />
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
      </section>
    </main>
  );
}
