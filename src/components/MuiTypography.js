import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
        quisquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Neque illum, soluta itaque pariatur obcaecati quisquam aspernatur ex.
        Placeat, eius consectetur.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, enim!
      </Typography>
    </div>
  );
};

export default MuiTypography;

// align = "center"; |"inherit" | "justify" | "left" | "right";

// noWrap; it will truncate and add ...

// using => variant="h1"
// "body1" |
//   "body2" |
//   "button" |
//   "caption" |
//   "h1" |
//   "h2" |
//   "h3" |
//   "h4" |
//   "h5" |
//   "h6" |
//   "inherit" |
//   "overline" |
//   "subtitle1" |
//   "subtitle2" |
//   string;
