import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import Calendar from "../../../public/icons/Calendar_Days.svg";
import { start } from "repl";
const DatePicker = () => {
  const today = dayjs();
  const tomorrow = today.add(1, "day");

  const todayFormatted = today.format("D MMM YYYY");
  const tomorrowFormatted = tomorrow.format("D MMM YYYY");

  const defaultValue = {
    start: today.toDate(),
    end: tomorrow.toDate(),
  };
  console.log(defaultValue);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["SingleInputDateRangeField"]}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{
            textField: {
              InputProps: {
                startAdornment: (
                  <>
                    <img src={Calendar} alt="" />
                  </>
                ),
              },
            },
            fieldSeparator: { children: "to" },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
