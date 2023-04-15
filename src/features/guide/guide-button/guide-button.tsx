import React from 'react';
import Fab from '@mui/material/Fab';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const fabStyles = {
  position: 'fixed',
  bottom: 24,
  right: 24,
};

type GuideButtonPropsT = {
  handleClick: () => void;
};

export default function GuideButton({ handleClick }: GuideButtonPropsT) {
  return (
    <Fab sx={fabStyles} aria-label="faq" color="primary" onClick={handleClick}>
      <QuestionMarkIcon />
    </Fab>
  );
}
