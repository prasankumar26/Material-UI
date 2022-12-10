import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

const MuiCheckbox = () => {
  const [check, setCheck] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);

    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }

    console.log(index, "index");
  };

  console.log(skills, "skills");
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            color="secondary"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
        }
        label="Label"
      />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
              label="JAVASCRIPT"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;

// https://mui.com/material-ui/react-checkbox/#main-content
