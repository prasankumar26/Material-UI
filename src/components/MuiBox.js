import React from "react";
import { Box, Stack, Divider } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid" }}
        marginTop={4}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            color: "white",
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          MuiBox
        </Box>
        <Box height="100px" width="100px" bgcolor="success.light"></Box>
        <Box height="100px" width="100px" bgcolor="secondary.light"></Box>
      </Stack>
    </>
  );
};

export default MuiBox;
