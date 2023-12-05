/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarSide() {
  const [date, setDate] = useState<any>(new Date());

  const onChange = (newDate: Date | Date[]) => {
    if (Array.isArray(newDate)) {
      // Handle date range
      console.log("Start:", newDate[0].toDateString());
      console.log("End:", newDate[1].toDateString());
    } else {
      // Handle single date
      console.log("Selected date:", newDate.toDateString());
    }

    setDate(newDate);
  };

  return (
    <Box>
      <Calendar onChange={()=>onChange} value={date} selectRange={true} />
      {Array.isArray(date) ? (
        <p>
          <span>Start:</span> {date[0].toDateString()} &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Selected date:</span> {date.toDateString()}
        </p>
      )}
    </Box>
  );
}

export default CalendarSide;
