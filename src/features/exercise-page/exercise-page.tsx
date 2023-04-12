import React from 'react';
import Box from '@mui/material/Box';
import HorizontalStepper from './components/stepper';
import Timer from './components/timer';
import ExitButton from './components/exit-button';

import type { ExerciseT } from '../../types';

type ExercisePagePropsT = {
  exercises: ExerciseT[];
  onFinish: () => void;
};

function ExercisePage({ exercises, onFinish }: ExercisePagePropsT) {
  return (
    <Box>
      <Timer />
      <HorizontalStepper exercises={exercises} />
      <ExitButton onClick={onFinish} />
    </Box>
  );
}

export default ExercisePage;
