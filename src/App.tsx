import React, { useState } from 'react';
import Box from '@mui/material/Box';
import StartScreen from './features/exercise-page/components/start-screen';
import HorizontalStepper from './features/exercise-page/components/stepper';
import Timer from './features/exercise-page/components/timer';
import ExitButton from './features/exercise-page/components/exit-button';

import exercises from './data/exercises.json';

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <StartScreen handleStart={() => setStarted(true)} />;
  }

  return (
    <Box>
      <Timer />
      <HorizontalStepper exercises={exercises} />
      <ExitButton onClick={() => setStarted(false)} />
    </Box>
  );
}

export default App;
