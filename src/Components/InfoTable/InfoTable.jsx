import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const columns = [
  { id: "AWB NUMBER", label: "AWB NUMBER", minWidth: 100 },
  { id: "TRANSPORTER", label: "TRANSPORTER", minWidth: 100 },
  {
    id: "SOURCE",
    label: "SOURCE",
    minWidth: 100,
  },
  {
    id: "DESTINATION",
    label: "DESTINATION",
    minWidth: 10,
  },
  {
    id: "BRAND",
    label: "BRAND",
    minWidth: 20,
  },
  {
    id: "START DATE",
    label: "START DATE",
    minWidth: 100,
  },
  {
    id: "ETD",
    label: "ETD",
    minWidth: 100,
  },
  {
    id: "STATUS",
    label: "STATUS",
    minWidth: 10,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();

  const [tempData, setTempData] = useState([]);
  const handlePass = (awbno) => {
    let filterData = props.data.filter((data) => {
      return data.awbno === awbno;
    });
    setTempData(filterData);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.data &&
              props.data.map((data, i) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={i}
                  onClick={() => {
                    handlePass(data.awbno);
                  }}
                >
                  <TableCell>#{data.awbno}</TableCell>
                  <TableCell>{data.carrier}</TableCell>
                  <TableCell>{data.from}</TableCell>
                  <TableCell>{data.to}</TableCell>
                  <TableCell>{data.carrier}</TableCell>
                  <TableCell>
                    {data.pickup_date && data.pickup_date.substring(0, 10)}
                  </TableCell>
                  <TableCell>
                    {data.extra_fields &&
                      data.extra_fields.expected_delivery_date.substring(0, 10)}
                  </TableCell>
                  <TableCell>{data.current_status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}