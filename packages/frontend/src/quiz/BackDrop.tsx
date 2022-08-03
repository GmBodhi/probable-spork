import { Backdrop } from '@mui/material';

export default function BackDrop({ children, open }: { children: React.ReactNode; open: boolean }) {
  return (
    <Backdrop
      open={open}
      sx={{
        opacity: 1,
        backgroundColor: 'Background',
      }}>
      {children}
    </Backdrop>
  );
}
