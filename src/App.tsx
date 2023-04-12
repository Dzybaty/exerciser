import React, { useState } from 'react';
import StartScreen from './features/start-screen/start-screen';
import ExercisePage from './features/exercise-page/exercise-page';
import Loader from './features/start-screen/components/loader';
import ErrorPage from './features/error-page/error-page';

import useGetExercises from './features/start-screen/hooks/get-exercises-data';

function App() {
  const [exerciseUrl, setExreciseUrl] = useState<string>();

  const { data, loading, error } = useGetExercises(exerciseUrl);

  const handleFinishButton = () => {
    setExreciseUrl('');
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (data) {
    return <ExercisePage exercises={data} onFinish={handleFinishButton} />;
  }

  return (
    <>
      <StartScreen setExreciseUrl={setExreciseUrl} />
      <Loader show={loading} />
    </>
  );
}

export default App;
