import * as React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "../../assets/styles/elements/button.scss";

export default function TextButton() {
  return (
    <Link to="/weekly">
      <Stack direction="row" spacing={2}>
        <Button className="btn" size="large">
          Weekly
        </Button>
      </Stack>
    </Link>
  );
}

