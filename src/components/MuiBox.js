import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Paper elevation={4}>
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

        {/* Grid  */}
        <Grid container my={4} spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>

        {/* Grid  */}
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box bgcolor="success.light" p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MuiBox;
