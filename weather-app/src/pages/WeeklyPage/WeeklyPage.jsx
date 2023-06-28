import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import "../../assets/styles/pages/weekly-page.scss";
import Weekly from "../../components/Weekly";

import { WEATHER_FORECAST } from "../../Api";

const WeeklyPage = () => {
  const [weekly, setWeekly] = useState([]);

  useEffect(() => {
    const fetchWeekly = async () => {
      try {
        const response = await axios.get(WEATHER_FORECAST);
        const weeklyData = response.data;
       
        setWeekly(weeklyData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeekly();
  }, []);
  

  return (
    <div className="container-page">
      <h2 className="container-page__title">Weekly forecast</h2>
      <Grid item xs={12}>
        <Card className="section">
          <Weekly weekData={weekly} />
        </Card>
      </Grid>
    </div>
  );
};

export default WeeklyPage;
