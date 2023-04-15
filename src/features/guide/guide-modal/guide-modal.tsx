import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const modalStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'justify',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: '600px' },
  p: 2,
};

type GuideModalPropsT = {
  open: boolean;
  handleClose: () => void;
};

export default function GuideModal({ open, handleClose }: GuideModalPropsT) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={modalStyle}>
        <Typography variant="h6" component="h2">
          Как пользоваться приложением
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Прежде, чем использовать приложение, нужно создать или получить ссылку на тренировку. Если
          у вас уже есть ссылка, просто вставьте ее и нажмите кнопку &quot;Начать&quot;.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Для того, чтобы создать новую тренировку, перейдите на{' '}
          <a href="https://www.npoint.io/" target="blank">
            npoint.io
          </a>{' '}
          и создайте документ. В качестве примера, можно использовать{' '}
          <a href="https://www.npoint.io/docs/71270dea1f3e6b8c0b48" target="blank">
            данную тренировку
          </a>
          .
        </Typography>
        <Typography sx={{ mt: 2 }}>
          После создания тренировки, вставьте ссылку на нее в поле на начальном экране. Последняя
          использованная ссылка будет автоматически сохранена.
        </Typography>
        <Button sx={{ alignSelf: 'center' }} onClick={handleClose}>
          Понятно
        </Button>
      </Paper>
    </Modal>
  );
}
