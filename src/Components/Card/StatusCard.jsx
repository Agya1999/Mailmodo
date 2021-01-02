import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import "./StatusCard.css";
import InfoTable from '../InfoTable/InfoTable';

class StatusCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OOD: 0,
      DEX: 0,
      DEL: 0,
      INT: 0,
      NFI: 0,
      data: [],
      filteredData: [],
    };
  }
  componentDidMount() {
    const body = {
      email: "naweliverma7@gmail.com",
    };
    const config = {
      headers: { Authorization: `Bearer tTU3gFVUdP` },
    };
    axios
      .post(
        "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
        body,
        config
      )
      .then((res) => {
        this.setState({ data: res.data }, () => this.handleFilter("DEL"));
        for (let i = 0; i < res.data.length; i++) {
          switch (res.data[i].current_status_code) {
            case "OOD":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  OOD: prevState.OOD + 1,
                };
              });
              break;
            case "DEL":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  DEL: prevState.DEL + 1,
                };
              });
              break;
            case "INT":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  INT: prevState.INT + 1,
                };
              });
              break;
            case "DEX":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  DEX: prevState.DEX + 1,
                };
              });
              break;
            case "NFI":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  NFI: prevState.NFI + 1,
                };
              });
              break;
            default:
              console.log("gh", i);
              break;
          }
        }
      });
  }
  handleFilter = (param) => {
    let tempData = [];
    tempData = this.state.data.filter((x) => {
      return x.current_status_code === param;
    });
    // console.log(tempData);
    // console.log("card clicked")
    this.setState({ filteredData: tempData });
  };

  render() {
    const { OOD, DEL, INT, DEX, NFI } = this.state;
    return (
      <React.Fragment>
      <div className="StatusCards">
        <Card className="StatusList" onClick={() => this.handleFilter("DEL")}>
          <CardContent >
            <Typography className="Status_TYPE">DEL</Typography>
            <Typography className="Status_COUNT">{DEL}</Typography>
          </CardContent>
        </Card>
        <Card className="StatusList"onClick={() => this.handleFilter("INT")}>
          <CardContent >
            <Typography className="Status_TYPE">INT</Typography>
            <Typography className="Status_COUNT">{INT}</Typography>
          </CardContent>
        </Card>
        <Card className="StatusList"onClick={() => this.handleFilter("OOD")}>
          <CardContent >
            <Typography className="Status_TYPE">OOD</Typography>
            <Typography className="Status_COUNT">{OOD}</Typography>
          </CardContent>
        </Card>
        <Card className="StatusList"onClick={() => this.handleFilter("DEX")}>
          <CardContent >
            <Typography className="Status_TYPE">DEX</Typography>
            <Typography className="Status_COUNT">{DEX}</Typography>
          </CardContent>
        </Card>
        <Card className="StatusList"onClick={() => this.handleFilter("NFI")}>
          <CardContent >
            <Typography className="Status_TYPE">NFI</Typography>
            <Typography className="Status_COUNT">{NFI}</Typography>
          </CardContent>
        </Card>
      </div>
      <InfoTable data={this.state.filteredData}/>
     
      </React.Fragment>

    );
  }
}
export default StatusCard;
