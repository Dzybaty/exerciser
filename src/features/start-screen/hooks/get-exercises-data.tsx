// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

import type { ExerciseT } from '../../../types';

const useGetExercises = (url?: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ExerciseT[]>();
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (!url) {
      setLoading(false);
      setData(undefined);
      setError(null);
      return;
    }

    setLoading(true);

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useGetExercises;
