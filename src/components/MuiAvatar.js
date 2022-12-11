import React from "react";
import { Avatar, Stack, AvatarGroup } from "@mui/material";

const MuiAvatar = () => {
  return (
    <>
      <Stack direction="row" spacing={2} mt={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
      </Stack>
      <Stack direction="row" mt={4} spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      <Stack direction="row" spacing={2} mt={4} max={3}>
        <AvatarGroup>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </AvatarGroup>
      </Stack>
    </>
  );
};

export default MuiAvatar;
