import React from 'react';
import Typography from '@mui/material/Typography';

type ExerciseTitlePropsT = {
  title: string;
};

export default function ExerciseTitle({ title }: ExerciseTitlePropsT) {
  return (
    <Typography variant="h5" sx={{ textAlign: 'center' }}>
      {title}
    </Typography>
  );
}
