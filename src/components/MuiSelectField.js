import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelectField = () => {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  console.log(country, "country");

  return (
    <Box width="250px" marginTop={4}>
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        helperText="select country"
      >
        <MenuItem value="IND">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelectField;
