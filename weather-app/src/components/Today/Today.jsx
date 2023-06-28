import React from "react";



import Typography from "@mui/material/Typography";
import pressure from "../../assets/images/pressure.svg";
import wind_speed from "../../assets/images/wind_speed.svg";
import humidity from "../../assets/images/humidity.svg";
import sunrise from "../../assets/images/sunrise.svg";
import sunset from "../../assets/images/sunset.svg";
import CardContent from "@mui/material/CardContent";

import "../../assets/styles/components/today.scss";


function Today({ today }) {

  return (
    <CardContent>
      <div className="main">
        <div className="text__left">
          <img
            src={`https://openweathermap.org/img/w/${today.icon}.png`}
            alt={today.icon}
            className="weather__icon"
          />
          <Typography variant="h3" gutterBottom>
            {today.temp}°C
          </Typography>
          <Typography variant="h6" gutterBottom>
            {today.main}, {today.desc}
          </Typography>
        </div>
        <div className="text__right">
          <Typography variant="h6" gutterBottom>
            <img src={sunrise} alt="Logo" className="unit__icon" />{" "}
            {today.sunrise} A.M.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <img src={sunset} alt="Logo" className="unit__icon" />{" "}
            {today.sunset} P.M.
          </Typography>
        </div>
      </div>
      <div>
        <img src={pressure} alt="Logo" className="unit__icon1" />
        <span className="span">{today.pressure} hPa</span>
        <img src={humidity} alt="Logo" className="unit__icon" />
        <span className="span">{today.humidity} %</span>
        <img src={wind_speed} alt="Logo" className="unit__icon" />
        <span className="span">{today.wind} m/s N</span>
      </div>
    </CardContent>
  );
}

export default Today;
