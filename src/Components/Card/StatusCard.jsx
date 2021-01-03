import React, { Component } from "react";
import { Card, CardContent, Typography, Grid, Paper } from "@material-ui/core";
import axios from "axios";
import "./StatusCard.css";
import InfoTable from "../InfoTable/InfoTable";
import Destination from "../../Images/destination.svg";
import Warehouse from "../../Images/warehouse.svg";
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
      headers: { Authorization: "Bearer tTU3gFVUdP" },
    };
    axios.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch", body, config).then(({ data }) => {
      console.log(data);
      data.map((orders) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            [orders.current_status_code]:
              prevState[orders.current_status_code] + 1,
          };
        });
      });
      this.setState({ data }, () => this.handleFilter("DEL"));
    });
  }
  handleFilter = (param) => {
    let tempData = [];
    tempData = this.state.data.filter((x) => {
      return x.current_status_code === param;
    });
    this.setState({ filteredData: tempData });
  };
  render() {
    return (
      <React.Fragment>
        <div className="StatusCards">
          {[ "DEL", "INT","OOD", "DEX", "NFI"].map((val) => {
            return (
              <Card
                className="StatusList"
                onClick={() => this.handleFilter(val)}
              >
                <CardContent>
                  <Typography className="Status_TYPE">{val}</Typography>
                  <Typography className="Status_COUNT">
                    {this.state[val]}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Grid container>
          <Grid item xs={3}>
            <Paper>
              <img src={Destination} alt="FliprBrand" className="DestinationLogo"/>
              <div ClassName="clearfix pb10">
  <section className="timeline__item timeline__item--first">
    <div className="row">
      <div className="medium-6 columns"></div>
      <div className="medium-6 columns"></div>
    </div>
  </section>
  <section className="timeline__item">
    <div className="row">
      <div className="medium-6 columns"></div>
      <div className="medium-6 columns"></div>
    </div>
  </section>
  <section className="timeline__item">
    <div className="row">
      <div className="medium-6 columns"></div>
      <div className="medium-6 columns"></div>
    </div>
  </section>
  <section className="timeline__item">
    <div className="row">
      <div className="medium-6 columns"></div>
      <div className="medium-6 columns"></div>
    </div>
  </section>
  <section className="timeline__item timeline__item--last">
    <div className="row">
      <div className="medium-6 columns"></div>
      <div className="medium-6 columns"></div>
    </div>
  </section>
</div>

                
              <img src={Warehouse} alt="FliprBrand" className="Warehouse" />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            {" "}
            <InfoTable data={this.state.filteredData} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default StatusCard;
