import { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CustomDatePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const refOne = useRef<HTMLElement>(null);

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
    <Box className="calendarWrap" sx={{ position: "relative" }}>
      <TextField
        sx={{
          "& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
            height: "26px",
            width: "175px",
            fontSize: "12px",
            paddingLeft: "18px",
          },
        }}
        InputProps={{
          startAdornment: (
            <CalendarMonthOutlinedIcon
              onClick={(e) => {
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
          ),
        }}
        value={`${format(range[0].startDate, "d MMM yyyy")} to ${format(
          range[0].endDate,
          "d MMM yyyy"
        )}`}
        // readOnly
        className="inputBox"
        onClick={toggleCalendar}
      />
      {isOpen && (
        <Box
          ref={refOne}
          sx={{ position: "absolute", top: "100%", right: 0, zIndex: 999 }}
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

export default CustomDatePicker;
