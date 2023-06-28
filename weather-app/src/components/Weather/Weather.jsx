import React from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import LocalInfo from "../LocalInfo";
import Today from "../Today";
import TextButton from "../../elements/Button";

import "../../assets/styles/components/weather.scss";

function Weather({ today }) {
  return (
    <div className="container">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card className="section">
            <LocalInfo today={today} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="section">
            <Today today={today} />
          </Card>
        </Grid>
      </Grid>
      <TextButton/>
    </div>
  );
}
export default Weather;
