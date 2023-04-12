import React from 'react';
import ExerciseTitle from './exercise-title';
import ExerciseContent from './exercise-content';

import type { ExerciseT } from '../../../types';

type ExercisePropsT = {
  exercise: ExerciseT;
};

export default function Exercise({ exercise }: ExercisePropsT) {
  return (
    <div>
      <ExerciseTitle title={exercise.title} />
      <ExerciseContent image={exercise.image} description={exercise.description} />
    </div>
  );
}
