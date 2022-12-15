import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const MonthlyDataTable = ({ rows }) => {
  return (
    <TableContainer
      sx={{
        border: "2px solid black",
        width: "max-content",
        height: "max-content",
      }}
    >
      <Table
        aria-label="simple table"
        borderCollapse="separate"
        borderSpacing="0px 0px"
        sx={{
          width: "max-content",
          height: "max-content",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#1565c0",
              borderBottom: "2px solid black",
              "& th": {
                fontSize: "1.25rem",
                color: "black",
              },
            }}
          >
            <TableCell
              sx={{
                borderRight: "2px solid black",
              }}
            >
              Month
            </TableCell>
            <TableCell
              sx={{
                borderRight: "2px solid black",
              }}
              align="left"
            >
              Solar Radiation ( kWh / m2 / day )
            </TableCell>
            <TableCell align="left">AC Energy ( kWh )</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((datum, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  padding: "10px 10px",
                  borderRight: "2px solid black",
                  backgroundColor: "lightblue",
                  fontSize: "1.1rem",
                }}
              >
                {datum.month}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  borderRight: "2px solid black",
                }}
              >
                {datum.solarRad}
              </TableCell>

              <TableCell align="left">{datum.AcEnergy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MonthlyDataTable;
