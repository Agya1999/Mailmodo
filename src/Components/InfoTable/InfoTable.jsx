import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
import TimelineCard from "../Timeline/TimelineCard";
import "./InfoTable.css";

const InfoTable = (props) => {
  const [tempData, setTempData] = useState([]);
  const handlePass = (awbno) => {
    let filterData = props.data.filter((data) => {
      return data.awbno === awbno;
    });
    setTempData(filterData);
  };
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>AWB NUMBER</th>
            <th>TRANSPORTER</th>
            <th>SOURCE</th>
            <th>DESTINATION</th>
            <th>BRAND</th>
            <th>START DATE</th>
            <th>ETD</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((data, i) => (
              <tr
                key={i}
                onClick={() => {
                  handlePass(data.awbno);
                }}
              >
                <td>{data.awbno}</td>
                <td>{data.carrier}</td>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.carrier}</td>
                <td>{data.pickup_date && data.pickup_date.substring(0, 10)}</td>
                <td>
                  {data.extra_fields &&
                    data.extra_fields.expected_delivery_date.substring(0, 10)}
                </td>
                <td>{data.current_status}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <TimelineCard tempData={tempData[0]} />
    </React.Fragment>
  );
};

export default InfoTable;
