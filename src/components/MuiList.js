import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#ffffff" }} mt={4}>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="List Item 1" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="List Item 2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="List Item 2" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
