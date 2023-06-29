import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import "../../assets/styles/pages/weekly-page.scss";
import Weekly from "../../components/Weekly";

import { WEATHER_FORECAST } from "../../Api";

const WeeklyPage = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeeklyForecast = async () => {
      try {
       
        const response = await axios.get(WEATHER_FORECAST);
        const { data } = response;

        setWeatherData(data.list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeeklyForecast();
  }, []);

  return (
    <div className="container-page">
      <h2 className="container-page__title">Weekly forecast</h2>
      <Grid item xs={12}>
        <Card className="section">
          <Weekly weekData={weatherData} />
        </Card>
      </Grid>
    </div>
  );
};

export default WeeklyPage;
