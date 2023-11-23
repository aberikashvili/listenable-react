import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import Calendar from "../../../public/icons/calendar_day.svg";

const DatePicker = () => {
  const today = dayjs();
  const tomorrow = today.add(1, "day");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["SingleInputDateRangeField"]}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{
            textField: {
              InputProps: {
                sx: {
                  fontSize: "12px",
                  width: "200px",
                  height: "26px",
                  border: "1px solid  #F0F0F0",
                  color: "#808080",
                  cursor: "pointer",
                },
                startAdornment: (
                  <>
                    <img src={Calendar} alt="calendar logo" />
                  </>
                ),
              },
            },
          }}
          value={[today, tomorrow]}
          format="D MMM YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
