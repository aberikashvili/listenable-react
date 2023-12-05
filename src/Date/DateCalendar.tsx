/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import { DateRange } from "react-date-range";
import {DateRange} from "react-date-range"
import format from "date-fns/format";
// import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "../Css/date.scss";

const DateCalendar = () => {
    const refOne = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const [range, setRange] = useState([
      {
        startDate: new Date(2022, 0, 1), 
        endDate: new Date(2022, 8, 16), 
        key: "selection",
      },
    ]);
    useEffect(() => {
      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", handleDocumentClick, true);
      return () => {
        document.removeEventListener("keydown", hideOnEscape, true);
        document.removeEventListener("click", handleDocumentClick, true);
      };
    }, []);
    const hideOnEscape = (e: any) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    const handleDocumentClick = (e: any) => {
      if (refOne.current && !refOne.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const toggleCalendar = () => {
      setIsOpen((prev) => !prev);
    };
    return (
      <Box sx={{ position: "relative" }}>
        <Box className="input-box" onClick={toggleCalendar}>
          {`${format(range[0].startDate, "d MMM yyyy")} to ${format(
            range[0].endDate,
            "d MMM yyyy"
          )}`}
          <CalendarMonthOutlinedIcon
            className="calendarIcon"
            onClick={(e: { stopPropagation: () => void; }) => {
              e.stopPropagation();
              toggleCalendar();
            }}
            sx={{
              cursor: "pointer",
              position: "absolute",
              width: "18px",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </Box>
        {isOpen && (
          <Box
            ref={refOne}
            sx={{ position: "absolute", top: "100%", left: 0, zIndex: 999 }}
          >
            <DateRange 
              onChange={(item: any) => setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction="horizontal"
              className="calendarElement"
            />
          </Box>
        )}
      </Box>
    );
  };
  export default DateCalendar;
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  