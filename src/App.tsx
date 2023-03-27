import React from 'react';
import Box from '@mui/material/Box';
import HorizontalStepper from './features/exercise-page/components/stepper';
import Timer from './features/exercise-page/components/timer';

import exercises from './data/exercises.json';

function App() {
  return (
    <Box>
      <Timer />
      <HorizontalStepper exercises={exercises} />
    </Box>
  );
}

export default App;
