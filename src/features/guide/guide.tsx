import React, { useState } from 'react';

import GuideButton from './guide-button/guide-button';
import GuideModal from './guide-modal/guide-modal';

export default function Guide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GuideModal open={open} handleClose={() => setOpen(false)} />
      <GuideButton handleClick={() => setOpen(true)} />
    </>
  );
}
