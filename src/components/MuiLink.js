import React from "react";
import { Stack, Link, Typography } from "@mui/material";
import { Box, Breadcrumbs } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MuiLink = () => {
  return (
    <Box>
      {/* link  */}
      <Stack spacing={2} direction="row" m={4}>
        <Link href="#" underline="none">
          Link
        </Link>

        <Link href="#" color="secondary" underline="hover">
          Secondary
        </Link>
        <Typography variant="h6">
          <Link href="#" color="secondary" underline="hover">
            Secondary
          </Link>
        </Typography>
      </Stack>
      {/* bread crumbs  */}
      <Stack>
        <Breadcrumbs area-label="breadcrumb" separator="-">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catelog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoees</Typography>
        </Breadcrumbs>
      </Stack>
      {/* bread crumbs  */}
      <Stack mt={4}>
        <Breadcrumbs
          area-label="breadcrumb"
          separator={<ChevronRightIcon fontSize="small" />}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catelog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoees</Typography>
        </Breadcrumbs>
      </Stack>
      {/* bread crumbs  */}
      <Stack mt={4}>
        <Breadcrumbs
          area-label="breadcrumb"
          separator={<ChevronRightIcon fontSize="small" />}
          maxItems={3}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catelog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoees</Typography>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default MuiLink;

// https://www.youtube.com/watch?v=MDUH9FEvb64&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=24
