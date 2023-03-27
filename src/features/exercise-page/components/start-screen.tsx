import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type StartScreenPropsT = {
  handleStart: () => void;
};

function StartScreen({ handleStart }: StartScreenPropsT) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Добро пожаловать! Приступим?
      </Typography>
      <Button variant="contained" size="large" onClick={handleStart} sx={{ mt: 2 }}>
        Начать
      </Button>
    </Box>
  );
}

export default StartScreen;
