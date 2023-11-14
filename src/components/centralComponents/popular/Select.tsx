import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useStore } from "../../../utils/useStore";

export default function BasicSelect() {
  const { isThemeChange } = useStore();
  const [timeFilter, setTimeFilter] = React.useState("Daily");

  const handleChange = (event: SelectChangeEvent) => {
    setTimeFilter(event.target.value as string);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timeFilter}
          label="timeFilter"
          onChange={handleChange}
          sx={
            isThemeChange
              ? {
                  padding: "0px",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#121111",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }
              : {
                  padding: "0px",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                }
          }
        >
          <MenuItem value={"Daily"}>Daily</MenuItem>
          <MenuItem value={"Monthly"}>Monthly</MenuItem>
          <MenuItem value={"Annual"}>Annual</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
