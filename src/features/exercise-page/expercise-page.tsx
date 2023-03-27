import React from 'react';
import ExerciseTitle from './components/exercise-title';
import ExerciseContent from './components/exercise-content';

import type { ExerciseT } from '../../types';

type ExercisePagePropsT = {
  exercise: ExerciseT;
};

export default function ExercisePage({ exercise }: ExercisePagePropsT) {
  return (
    <div>
      <ExerciseTitle title={exercise.title} />
      <ExerciseContent image={exercise.image} description={exercise.description} />
    </div>
  );
}
