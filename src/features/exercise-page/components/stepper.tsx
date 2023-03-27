import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import ExercisePage from '../expercise-page';

import type { ExerciseT } from '../../../types';

type HorizontalStepperPropsT = {
  exercises: ExerciseT[];
};

export default function HorizontalStepper({ exercises }: HorizontalStepperPropsT) {
  const steps = exercises.map((exercise) => exercise.title);
  const stepsCount = steps.length;
  const stepperVariant = steps.length <= 14 ? 'dots' : 'text';
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <MobileStepper
        variant={stepperVariant}
        steps={stepsCount}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === stepsCount - 1}>
            Далее
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Назад
          </Button>
        }
      />
      <SwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {exercises.map((exercise, index) => (
          <div key={exercise.title}>
            {Math.abs(activeStep - index) <= 2 ? <ExercisePage exercise={exercise} /> : null}
          </div>
        ))}
      </SwipeableViews>
    </Box>
  );
}
