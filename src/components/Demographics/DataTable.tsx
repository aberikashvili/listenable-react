import {  TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from "@mui/material";
import { FC } from "react";

type StatesInfo = {
  id: string,
  name: string,
  val: string,
  downloads: string,
  tot_listen_time: string
}

interface DataTableProps  {
states:StatesInfo[]
}

const DataTable:FC<DataTableProps> = ({states}) => {
  return (
    <>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell>Downloads</TableCell>
              <TableCell>Tot lis time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {states.map((state) => {
              return (
                <TableRow
                  hover
                  key={state.id}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>
                   
                    {state.name}
                  </TableCell>
                  <TableCell>
                   
                    {state.downloads}
                  </TableCell>
                  <TableCell>
                   
                    {state.tot_listen_time}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
