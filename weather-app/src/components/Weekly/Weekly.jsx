import React from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

import "../../assets/styles/components/weekly.scss";

function Weekly({ weekData }) {
  return (
    <CardMedia className="container-weekly">
      <ImageList sx={{ width: 700, height: 450 }} cols={3} rowHeight={164}>
        {weekData.map((data) => (
          <ImageListItem key={data.key} cols={0.5} className="day">
            {data.key === 0 ? (
              <Typography className="info" gutterBottom color="error">
                Today
              </Typography>
            ) : (
              <Typography className="info" gutterBottom color="error">
                {data.day}
              </Typography>
            )}

            <img
              src={`https://openweathermap.org/img/w/${data.icon}.png`}
              alt={data.icon}
              className="weather__icon"
              loading="lazy"
            />
            <Typography gutterBottom className="info">
              {data.lTemp}°C - {data.hTemp}°C
            </Typography>
            <Typography variant="h6" gutterBottom>
              {data.main},
            </Typography>
            <h4 style={{ fontWeight: "bold", paddingBottom: "10px" }}>
              {data.desc}
            </h4>
          </ImageListItem>
        ))}
      </ImageList>
    </CardMedia>
  );
}

export default Weekly;
