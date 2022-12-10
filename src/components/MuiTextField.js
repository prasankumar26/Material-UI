import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import PasswordIcon from "@mui/icons-material/Password";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Stack spacing={4} mt={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Small Secondary" size="small" color="secondary" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Form Input" required error />
          <TextField
            label="Password"
            type="password"
            helperText="Do not show your password to anyone"
          />
          <TextField
            label="Password Disabled"
            type="password"
            helperText="Do not show your password to anyone"
            disabled
          />
          <TextField label="Read Only" InputProps={{ readOnly: true }} />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row">
          <TextField
            label="Form Input"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={
              value ? "Required" : "Do not share your password with anyone"
            }
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default MuiTextField;
