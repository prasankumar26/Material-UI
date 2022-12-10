import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRatings = () => {
  const [rating, setRating] = useState(null);

  const handleChange = (_, number) => {
    setRating(number);
  };

  console.log(rating, "rating");

  return (
    <>
      <Stack spacing={2} marginTop={2}>
        <Rating
          value={rating}
          onChange={handleChange}
          precision={0.5}
          size="large"
        />
      </Stack>
      <Stack spacing={2} marginTop={2}>
        <Rating
          value={rating}
          onChange={handleChange}
          precision={0.5}
          size="medium"
          icon={<FavoriteIcon fontSize="inherit" color="secondary" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Stack>
    </>
  );
};

export default MuiRatings;
