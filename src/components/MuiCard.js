import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px" marginTop={5}>
      <Card>
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1670667021752-1f0b262148e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
          alt="Paella dish"
        />

        <CardContent>
          <Typography gutterBottom varient="h5" component="div">
            React
          </Typography>
          <Typography varient="body2" color="text-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
            optio reiciendis explicabo iure nesciunt nihil magnam.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
