import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type LoaderPropsT = {
  show: boolean;
};

const containerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

export default function Loader({ show }: LoaderPropsT) {
  if (!show) {
    return null;
  }

  return (
    <Box sx={containerStyle}>
      <CircularProgress />
    </Box>
  );
}
