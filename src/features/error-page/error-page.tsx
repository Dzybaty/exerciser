import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import type { AxiosError } from 'axios';

type ErrorPagePropsT = {
  error: AxiosError;
};

export default function ErrorPage({ error }: ErrorPagePropsT) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">Ошибка!</Typography>
      <Typography>{error.message}</Typography>
      <Link href="/exerciser">Назад</Link>
    </Box>
  );
}
