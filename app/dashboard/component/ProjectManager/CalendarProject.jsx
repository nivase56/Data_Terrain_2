"use client";
import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";

function CalendarProject() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
          defaultValue={[dayjs("2024-03-17"), dayjs("2024-03-21")]}
          sx={{
            [`.${pickersLayoutClasses.contentWrapper}`]: {
              alignItems: "center",
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
}

export default CalendarProject;
