import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Error404() {
  let navigate = useNavigate();
  return (
    <Box className='blackout'>
      <Box id='main404'>
        <Box className='message404'>
          <h1>404</h1>
          <Typography variant='h3' gutterBottom>
            This page doesn't exist.{' '}
            <Typography
              component='a'
              className='buttonlike'
              sx={{
                textDecoration: 'underline',
              }}
              // TODO: Make an error reporting component
              onClick={() => void 0}>
              Report an Error
            </Typography>
          </Typography>
        </Box>
        <Box className='footer404'>
          <Typography component='a' className='buttonlike' onClick={() => navigate('/')}>
            Go to Home<span></span>
          </Typography>
          <Typography component='a' className='buttonlike' onClick={() => window.history.back()}>
            Go Back<span></span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
