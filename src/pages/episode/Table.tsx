import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStore } from "../../utils/useStore";

type PropsType = {
  table: {
    city: string;
    downloads: number;
    listeningTime: string;
  }[];
};

function createData(city: string, downloads: number, listeningTime: string) {
  return { city, downloads, listeningTime };
}

export default function EpisodeTable({ table }: PropsType) {
  const { isThemeChange } = useStore();
  const rows = table.map((data) =>
    createData(data.city, data.downloads, data.listeningTime)
  );

  return (
    <TableContainer component={Paper}>
      <Table
        sx={
          isThemeChange
            ? { maxWidth: "410px", height: "326px" }
            : {
                maxWidth: "410px",
                height: "326px",
                backgroundColor: "#1e1e1e",
                color: "#fff",
                border: "1px solid #343434",
              }
        }
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={
              isThemeChange
                ? { maxHeight: "26px", width: "100%" }
                : {
                    maxHeight: "26px",
                    width: "100%",
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                  }
            }
          >
            <TableCell
              align="left"
              sx={{
                width: "203px",
                fontSize: "12px",
                color: "#909090",
                fontWeight: "400",
                paddingRight: "10px",
              }}
            >
              City
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontSize: "12px",
                color: "#909090",
                fontWeight: "400",
                padding: "0px",
              }}
            >
              Downloads
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontSize: "12px",
                color: "#909090",
                fontWeight: "400",
                padding: "0px",
              }}
            >
              Tot lis time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                align="left"
                sx={
                  isThemeChange
                    ? {
                        width: "203px",
                        fontSize: "14px",
                        color: "#121111",
                        fontWeight: "400",
                        paddingRight: "16px",
                      }
                    : {
                        width: "203px",
                        fontSize: "14px",
                        color: "#fff",
                        fontWeight: "400",
                        paddingRight: "16px",
                      }
                }
              >
                {row.city}
              </TableCell>
              <TableCell
                align="left"
                sx={
                  isThemeChange
                    ? {
                        width: "103px",
                        fontSize: "14px",
                        color: "#121111",
                        fontWeight: "400",
                        padding: "0px",
                      }
                    : {
                        width: "103px",
                        fontSize: "14px",
                        color: "#fff",
                        fontWeight: "400",
                        padding: "0px",
                      }
                }
              >
                {row.downloads}
              </TableCell>
              <TableCell
                align="left"
                sx={
                  isThemeChange
                    ? {
                        width: "103px",
                        fontSize: "14px",
                        color: "#121111",
                        fontWeight: "400",
                        padding: "0px",
                      }
                    : {
                        width: "103px",
                        fontSize: "14px",
                        color: "#fff",
                        fontWeight: "400",
                        padding: "0px",
                      }
                }
              >
                {row.listeningTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
