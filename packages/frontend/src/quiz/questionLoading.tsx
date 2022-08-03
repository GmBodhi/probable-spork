import { Grid, Skeleton } from '@mui/material';

export default function LoadingQuestion() {
  return (
    <>
      <Skeleton
        variant='rectangular'
        sx={{
          width: { xs: '80%', md: '90%' },
          height: { xs: '30vh', md: '35vh' },
          position: 'relative',
          marginTop: '1rem',
          marginLeft: { md: '1rem', xs: '0' },
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '1rem',
        }}
      ></Skeleton>
      <Grid
        container
        spacing={1}
        sx={{
          marginBottom: '1rem',
        }}
      >
        {/* create a skeleton for each answer*/}
      </Grid>
    </>
  );
}
