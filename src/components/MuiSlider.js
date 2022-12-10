import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";

const MuiSlider = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked, "Checked");
  return (
    <Box>
      <FormControlLabel
        label="Dark MOde"
        control={
          <Switch
            checked={checked}
            color="secondary"
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
      />
    </Box>
  );
};

export default MuiSlider;
