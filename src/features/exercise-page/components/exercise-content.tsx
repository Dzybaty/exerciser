import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ExerciseContentPropsT = {
  image?: string;
  description: any;
};

export default function ExerciseContent({ image, description }: ExerciseContentPropsT) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        component="img"
        sx={{
          alignSelf: 'center',
          width: '100%',
          height: 'auto',
          maxWidth: { md: 800 },
          mb: { xs: 2, md: 4 },
        }}
        alt="The house from the offer."
        src={image || ''}
      />
      <Typography>{description}</Typography>
    </Box>
  );
}
