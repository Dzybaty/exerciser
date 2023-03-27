import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import moment from 'moment';

export default function Timer() {
  const [time, setTime] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleStart = () => {
    const startTimer = () => {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    };

    timer.current = setTimeout(startTimer);
  };

  useEffect(() => {
    handleStart();

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  });

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="button">
        {moment().startOf('day').seconds(time).format('HH:mm:ss')}
      </Typography>
    </Box>
  );
}
