import React from "react";
import { Box } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Box
        marginTop={4}
        sx={{
          width: 300,
          height: 300,
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
      <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>

      </Box>
    </>
  );
};

export default MuiBox;
