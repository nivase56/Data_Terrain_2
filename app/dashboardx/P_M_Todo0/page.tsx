"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS, id } from "date-fns/locale";
import Link from "next/link";
import {
  getCalendarDetails,
  getIndividualCalendarDetails,
} from "@/store/reducers/dashboard";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";

import {
  startOfMonth,
  endOfMonth,
  endOfWeek,
  startOfDay,
  endOfDay,
} from "date-fns";

import "./style.css";

import SideMenu from "@/app/dashboard/component/SideMenu";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles
import { useSelector } from "react-redux";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function P_M_Todo0() {
  const dispatch = useDispatch();
  const calendarDetails = useSelector(
    (state) => state.dashboard.calendar_details
  );
  const calendarindividual = useSelector(
    (state) => state.dashboard.calendar_individual_details
  );
  console.log(calendarindividual, "calendarindividual");

  const myEventsList = [
    {
      title: "Event 1",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
    },
  ];
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [activeEvent, setActiveEvent] = useState(null);
  const [dialoguePosition, setDialoguePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [events, setEvents] = useState([]);
  const [calendarView, setCalendarView] = useState("week"); // Default view
  const [count, setCount] = useState({});
  const [multipleEvents, setMultipleEvents] = useState(null);
  const [multiplePosition, setMultiplePosition] = useState({
    x: 0,
    y: 0,
  });

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
  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setSelectedMonth(selectedMonth);
    setEvents([]); // Clear events to reset the calendar
    updateCalendar(
      selectedYear || new Date().getFullYear(),
      selectedMonth || new Date().getMonth() + 1
    );
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);
    setEvents([]); // Clear events to reset the calendar

    updateCalendar(
      selectedYear || new Date().getFullYear(),
      selectedMonth || new Date().getMonth() + 1
    );
  };

  const updateCalendar = (year, month) => {
    const startDate = new Date(year, month - 1, 1); // Month is 0-based
    const endDate = new Date(year, month, 0); // Last day of the month
    const formattedStartDate = format(startDate, "yyyy-MM-dd");
    const formattedEndDate = format(endDate, "yyyy-MM-dd");

    handleViewChange("month", formattedStartDate, formattedEndDate);
  };

  const handleSelectSlot = (event: any) => {
    if (typeof event.start === "string") {
      event.start = new Date(event.start);
    }

    if (typeof event.end === "string") {
      event.end = new Date(event.end);
    }
    setActiveEvent(null);
    setMultipleEvents(null);
  };

  const handleSelect = (event, e) => {
    console.log(event);

    const selectedDate = new Date(event.start).toDateString();

    const eventsOnSameDate = events.filter(
      (ev) => new Date(ev.start).toDateString() === selectedDate
    );

    const eventTitles = eventsOnSameDate.map((ev) => ev.title);
    const eventInterviewer = eventsOnSameDate.map((ev) => ev.interviewer);
    if (eventsOnSameDate.length > 1) {
      // alert(
      //   `Events on ${selectedDate}:\n\n${eventTitles.join(
      //     "\n"
      //   )}\n\n${eventInterviewer.join("\n")}`
      // );
      setMultipleEvents(eventsOnSameDate);
      setMultiplePosition({ x: e.clientX, y: e.clientY });
    } else {
      setActiveEvent(event);
      setDialoguePosition({ x: e.clientX, y: e.clientY });
      dispatch(getIndividualCalendarDetails({ id: event?.id }));
    }
  };

  const EventDetailModal = ({ activeEvent, position, setActiveEvent }) => {
    if (!activeEvent) return null;
    console.log(activeEvent, "modal from event");

    return (
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: position.y,
          left: position.x - 30,
          transform: "translate(-50%, -50%)",
          zIndex: 2000,
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          height: "350px",
          width: "400px",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            gap: "8px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid gray",
            padding: "10px",
            width: "55%",
          }}
        >
          <p>
            Interviewer:{" "}
            {activeEvent?.interviewer ? activeEvent?.interviewer : "N/A"}
          </p>
          <p>Position: {activeEvent?.job?.jobRequest_Title}</p>
          <p>Created By: {activeEvent?.job?.jobRequest_createdBy.firstName}</p>
          <p>Interview Date: {formatDate(activeEvent?.start)}</p>
          <p>
            Interview Time: {formatTime(activeEvent?.start)} -{" "}
            {formatTime(activeEvent?.end)}
          </p>
          <p>Interview Via: Google Meet</p>
          <button style={{ padding: "15px", border: "1px solid blue" }}>
            Resume.docx 👁️⬇️
          </button>
          <button style={{ padding: "15px", border: "1px solid blue" }}>
            Aadharcard 👁️⬇️
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            width: "45%",
            gap: "20px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <rect
              width="16"
              height="16"
              x="12"
              y="16"
              fill="#fff"
              transform="rotate(-90 20 24)"
            ></rect>
            <polygon
              fill="#1e88e5"
              points="3,17 3,31 8,32 13,31 13,17 8,16"
            ></polygon>
            <path
              fill="#4caf50"
              d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"
            ></path>
            <path
              fill="#fbc02d"
              d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"
            ></path>
            <path
              fill="#1565c0"
              d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"
            ></path>
            <polygon fill="#e53935" points="13,7 13,17 3,17"></polygon>
            <polygon
              fill="#2e7d32"
              points="38,24 37,32.45 27,24 37,15.55"
            ></polygon>
            <path
              fill="#4caf50"
              d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"
            ></path>
          </svg>
          <button
            style={{
              width: "90px",
              padding: "8px",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "5px",
            }}
            onClick={() => window.open(`${calendarindividual?.link}`, "_blank")}
          >
            Join
          </button>
        </div>
        {/* <button onClick={() => setActiveEvent(null)}>Close</button> */}
      </div>
    );
  };

  const MultipleEventModal = ({ multipleEvents, position }) => {
    console.log(multipleEvents, "Multiple Events");

    if (!multipleEvents) return null;

    return (
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: position.y,
          left: position.x - 30,
          transform: "translate(-50%, -50%)",
          zIndex: 2000,
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          height: "290px",
          width: "250px",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            gap: "22px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px",
          }}
        >
          {multipleEvents.map((event) => (
            <div
              style={{
                borderLeft: "10px solid #3174ad",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "8px",
                borderTop: "1px solid gray",
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
              }}
            >
              <p style={{ fontWeight: "500" }}>{event?.title}</p>
              <p style={{ fontWeight: "500" }}>
                Interviewer: {event?.interviewer ? event?.interviewer : "N/A"}
              </p>
              <p style={{ fontWeight: "500" }}>
                Time: {formatTo12Hour(event.start)} -{" "}
                {formatTo12Hour(event.end)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getUTCFullYear();

    const suffix = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${suffix(day)} ${month} ${year}`;
  }

  function formatTime(dateString) {
    const date = new Date(dateString);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes; // adding leading zero if needed

    return `${hours}:${minutesStr} ${ampm}`;
  }

  function formatTo12Hour(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes; // add leading zero if needed
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  // Custom Event Component
  const CustomEvent = ({ event }) => {
    const startDate = event.start;
    const dateKey = `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`;

    const eventCount = count[dateKey] ? count[dateKey] : 0;
    const showCount = eventCount > 1;

    console.log(event, "Event Count");

    return (
      <div className="calendarTopSection">
        {showCount && (
          <div className="additionalEventCount">
            <p>{`${eventCount - 1}`}</p>
          </div>
        )}

        <ul className="text-[8px] font-semibold">
          {event.title}
          <li className="py-[1px]">
            Interviewer: {event.interviewer ? event.interviewer : ""}
          </li>
          <li className="py-[1px]">
            Time : {formatTo12Hour(event.start)} - {formatTo12Hour(event.end)}
          </li>
        </ul>
      </div>
    );
  };

  const handleViewChange = (view, SelectedStartDate, SelectedEndDate) => {
    console.log(selectedMonth, selectedYear);

    setActiveEvent(null);
    setMultipleEvents(null);
    const currentDate = new Date();
    let startDate, endDate;

    // If selectedMonth and selectedYear are provided, use them to calculate startDate and endDate
    if (selectedMonth && selectedYear) {
      const month = parseInt(selectedMonth, 10) - 1; // JavaScript months are 0-based
      const year = parseInt(selectedYear, 10);
      startDate = new Date(year, month, 1);

      switch (view) {
        case "month":
          endDate = endOfMonth(startDate);
          break;
        case "week":
          startDate = startOfWeek(startDate, { weekStartsOn: 0 });
          endDate = endOfWeek(startDate, { weekStartsOn: 6 });
          break;
        case "day":
          endDate = endOfDay(startDate);
          break;
        default:
          break;
      }
    } else {
      // If selectedMonth and selectedYear are not provided, use the current date
      switch (view) {
        case "month":
          startDate = startOfMonth(currentDate);
          endDate = endOfMonth(currentDate);
          break;
        case "week":
          startDate = startOfWeek(currentDate, { weekStartsOn: 0 });
          endDate = endOfWeek(currentDate, { weekStartsOn: 6 });
          break;
        case "day":
          startDate = startOfDay(currentDate);
          endDate = endOfDay(currentDate);
          break;
        default:
          break;
      }
    }

    const formattedStartDate = format(startDate, "yyyy-MM-dd");
    const formattedEndDate = format(endDate, "yyyy-MM-dd");

    // Dispatch your action with the calculated dates
    if (SelectedStartDate && SelectedEndDate) {
      setCalendarView("month");
      dispatch(
        getCalendarDetails({ from: SelectedStartDate, to: SelectedEndDate })
      );
    } else {
      setCalendarView(view); // Update calendar view state
      dispatch(
        getCalendarDetails({ from: formattedStartDate, to: formattedEndDate })
      );
    }
  };

  const handleDropDownSelection = (value: any) => {
    console.log(value, "from selection");
  };

  useEffect(() => {
    if (calendarDetails) {
      console.log(calendarDetails, "calendarDetails");

      const formattedEvents = calendarDetails.map((detail) => ({
        id: detail.id,
        title: detail.summary,
        start: new Date(detail.start),
        end: new Date(detail.end),
        interviewer: detail.interviewer,
        time: detail.time,
        via: detail.via,
        attendees: detail.attendees,
        job: detail.job_id,
      }));

      let eventCountsMap = {};

      formattedEvents.forEach((event) => {
        const startDate = event.start;
        const dateKey = `${startDate.getFullYear()}-${
          startDate.getMonth() + 1
        }-${startDate.getDate()}`;

        eventCountsMap[dateKey] = (eventCountsMap[dateKey] || 0) + 1;
      });

      setCount({ ...eventCountsMap });
      setEvents(formattedEvents);
    }
  }, [calendarDetails, selectedMonth, selectedYear]);

  useEffect(() => {
    if (calendarindividual && Array.isArray(calendarindividual)) {
      const formattedEvents = calendarindividual.map((data: any) => ({
        id: data?.id,
      }));
    } else {
      // Handle the case when calendarindividual is not an array
      console.log("calendarindividual is not an array");
    }
  }, [calendarindividual]);

  useEffect(() => {
    // Optionally, you can fetch initial calendar details here if needed
    handleViewChange("week"); // Example: Fetch details for the current week
  }, [dispatch]);
  const currentDate = new Date();

  return (
    <section className="">
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
                  prefetch
                  href="/P_M_JobDescriptions1"
                  className="btn btn-light me-3 mx-lg-2"
                >
                  JD Assets
                </Link>
                <Link
                  prefetch
                  href="P_M_JobDescriptions4"
                  className="btn btn-blue bg-[#0a66c2!important]"
                >
                  Create New JD
                </Link>
              </div>
            </div>

            <div className="TotalEmployees shadow bg-white rounded-3 p-3 w-100 mt-4">
              <div className="md:flex align-items-center">
                <h3 className="projectManHeading">Your Todo’s</h3>
                <div className="ml-auto d-flex todoHeadingSelect">
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
              <div
                className="d-none d-lg-block "
                style={{ width: "100%", position: "relative" }}
              >
                {/* <div className="calendarTopSection top-[250px] left-[100px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[450px] left-[200px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[450px] left-[800px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>


                <div className="calendarTopSection top-[280px] left-[400px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[280px] left-[700px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div>

                <div className="calendarTopSection top-[320px] left-[1000px]">
                  <ul>
                    <li className="text-[12px] py-1">Python Developer</li>
                    <li className="text-[12px] py-1">Interviewer: Geetha</li>
                    <li className="text-[12px] py-1">Time : 10 - 11 A.M</li>
                    <li className="text-[12px] py-1">Via : Google Voice</li>
                  </ul>
                </div> */}
                <EventDetailModal
                  activeEvent={activeEvent}
                  position={dialoguePosition}
                  setActiveEvent={setActiveEvent}
                />
                <MultipleEventModal
                  multipleEvents={multipleEvents}
                  position={multiplePosition}
                />
                <Calendar
                  className="TodoDataTable"
                  selectable
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  defaultDate={new Date()}
                  defaultView={calendarView}
                  timeslots={4}
                  step={15}
                  views={{ month: true, week: true, day: true }}
                  components={{ event: CustomEvent }}
                  formats={{
                    dayFormat: "EEEE",
                  }}
                  onSelectSlot={handleSelectSlot}
                  onSelectEvent={(event, e) =>
                    handleSelect(event, e.nativeEvent)
                  }
                  onView={handleViewChange}
                  date={
                    new Date(
                      selectedYear ? selectedYear : currentDate?.getFullYear(),
                      selectedMonth
                        ? selectedMonth - 1
                        : currentDate.getMonth() + 1,
                      1
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const CustomEvent = (event:any) => {
//   console.log(event,"sadfsdfsd")
//   return (
//     <span> <strong> {event.title} </strong> </span>
//   )
// }
// Custom Toolbar Component
const CustomToolbar = ({ label }: any) => {
  return (
    <div className="custom-toolbar ">
      <strong>{label}</strong>
      {/* Add custom buttons or components here */}
    </div>
  );
};
