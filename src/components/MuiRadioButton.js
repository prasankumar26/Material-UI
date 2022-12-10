import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  console.log(value, "value");

  return (
    <Box marginTop={5}>
      <FormControl error>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel
            value="female"
            control={<Radio size="medium" color="secondary" />}
            label="Female"
          />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;

// https://mui.com/material-ui/react-radio-button/#main-content
