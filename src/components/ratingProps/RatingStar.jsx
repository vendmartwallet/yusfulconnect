import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const RatingStar = () => {
    return (
        <Stack data-aos="fade-right" spacing={1}>
          <Rating data-aos="fade-right" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        </Stack>
      );
}

export default RatingStar