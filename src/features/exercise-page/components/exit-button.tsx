import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type ExitButtonPropsT = {
  onClick: () => void;
};

function ExitButton({ onClick }: ExitButtonPropsT) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
      }}
    >
      <Button size="small" onClick={onClick} sx={{ mt: 2, mb: 2 }}>
        Закончить тренировку
      </Button>
    </Box>
  );
}

export default ExitButton;
