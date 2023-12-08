import {
  Box,
  Typography,
  CardMedia,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import filter from "../../assets/svg/Filter.svg";
import CustomDatePicker from "../CutomeDatePicker/CutomeDatePicker";
import Map from "../Map/Map";

const createData = (state: string, downloads: number, totalTimes: number) => {
  return { state, downloads, totalTimes };
};

const rows = [
  createData("Texas", 159, 6.0),
  createData("New Mexico", 237, 9.0),
  createData("Arizona", 262, 16.0),
];

const Demographic = () => {
  return (
    <Box
      className="demographic-wrapper"
      sx={{
        border: "1px solid  #F0F0F0",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Demographics
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: "300", ml: 2, mt: 0.5 }}
          >
            See all
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              height="auto"
              alt="filter"
              src={filter}
            />
          </Box>
          <Box>
            <CustomDatePicker />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: "15px",
        }}
      >
        <Box sx={{ maxWidth: "450px", width: "100%" }}>
          <Map />
        </Box>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">state</TableCell>
                <TableCell align="right">downloads</TableCell>
                <TableCell align="right">Tot lis time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any) => (
                <TableRow
                  key={row.state}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ display: "flex", position: "relative" }}
                    component="th"
                    scope="row"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        width: "10px",
                        background: "#43A5FF",
                        height: "10px",
                        borderRadius: "50%",
                        top: "22px",
                        left: "3px",
                      }}
                    />
                    {row.state}
                  </TableCell>
                  <TableCell align="right">{row.downloads}</TableCell>
                  <TableCell align="right">{row.totalTimes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default Demographic;
