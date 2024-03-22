"use client";
import HeadersTop from "../dashboard/common/HeadersTop";
import SideMenu from "../dashboard/component/SideMenu";
import Link from "next/link";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles

import React, { useState } from "react";

// Import DnD addon styles if using drag and drop functionality
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const localizer = momentLocalizer(moment);

export default function P_M_Todo0() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Define months and years
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const years = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    // Add more years as needed
  ];

  // Handle month and year changes
  const handleMonthChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedYear(e.target.value);
  };

  const myEventsList = [
    {
      id: 1,
      title: "Testing Event",
      start: new Date(2024, 3, 22, 10, 0), // Date and time for start
      end: new Date(2024, 3, 22, 12, 0), // Date and time for end
    },
    {
      id: 2,
      title: "Testing Event 2",
      start: new Date(2024, 3, 23, 10, 0), // Date and time for start
      end: new Date(2024, 3, 23, 12, 0), // Date and time for end
    },
    {
      id: 3,
      title: "Testing Event 3",
      start: new Date(2024, 3, 24, 10, 0), // Date and time for start
      end: new Date(2024, 3, 24, 12, 0), // Date and time for end
    },
    {
      id: 4,
      title: "Testing Event 4",
      start: new Date(2024, 3, 25, 10, 0), // Date and time for start
      end: new Date(2024, 3, 25, 12, 0), // Date and time for end
    },
    // Add more events as needed
  ];

  return (
    <section className="">
      <HeadersTop />

      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Calendar</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
                <Link
                  href="/P_M_JobDescriptions1"
                  className="btn btn-light me-3 mx-lg-2"
                >
                  JD Assets
                </Link>
                <Link
                  href="P_M_JobDescriptions4"
                  className="btn btn-blue bg-[#0a66c2!important]"
                >
                  Create New JD
                </Link>
              </div>
            </div>

            <div className="TotalEmployees shadow bg-white rounded-3 p-3 w-100">
              <div className="md:flex align-items-center">
                <h3 className="projectManHeading">Your Todo’s</h3>
                <div className="ml-auto d-flex">
                  <div className="month-year-picker">
                    <select value={selectedMonth} onChange={handleMonthChange}>
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <select value={selectedYear} onChange={handleYearChange}>
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year.value} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <hr className="my-2" />
              <div className="d-none d-lg-block " style={{ width: "100%" }}>
                <Calendar
                  localizer={localizer}
                  events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  views={{ month: true, week: true, day: true }} // Show only month, week, and day views
                  //   toolbar={false} // Hide the default toolbar
                   components={{
                     event: CustomEvent,
                  //   toolbar: CustomToolbar,
                   }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom Event Component
const CustomEvent = ({ event }: any) => {
  return (
    <div className="custom-event shadow bg-white">
      <strong>{event.title}</strong>
      <p>{event.start.toLocaleString()}</p>
    </div>
  );
};

// Custom Toolbar Component
const CustomToolbar = ({ label }: any) => {
  return (
    <div className="custom-toolbar ">
      <strong>{label}</strong>
      {/* Add custom buttons or components here */}
    </div>
  );
};