import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

type StartScreenPropsT = {
  setExreciseUrl: (url: string) => void;
};

function StartScreen({ setExreciseUrl }: StartScreenPropsT) {
  const [validationError, setValidationError] = useState('');
  const [url, setUrl] = useState('');

  const validateUrl = (value: string) => {
    return /https:\/\/api.npoint.io\/(\d\w+)/.test(value);
  };

  const handleChange = (value: string) => {
    setValidationError('');
    setUrl(value);
  };

  const handleSubmit = () => {
    if (!validateUrl(url)) {
      setValidationError('Неправильная ссылка');
      return;
    }

    setExreciseUrl(url);
  };

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
      <TextField
        error={!!validationError}
        helperText={validationError || ''}
        label="Ссылка на тренировку"
        variant="standard"
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleSubmit} sx={{ mt: 2 }}>
        Начать
      </Button>
    </Box>
  );
}

export default StartScreen;
