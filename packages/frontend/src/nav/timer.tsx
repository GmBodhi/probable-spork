import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTimerStore } from '../store';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default function Timer() {
  const { timer } = useTimerStore(state => state);

  // const [time, setTime] = useState(timer);

  // const refreshTimer = (timerID: number) => {
  //   if (time === 0) {
  //     clearInterval(timerID);
  //     return setTimer(0);
  //   }
  //   setTime(time - 1);
  // };

  // console.log(time);

  // useEffect(() => {
  //   const timerID = setInterval(
  //     () => refreshTimer(timerID),
  //     1000
  //   ) as unknown as number;
  //   return function cleanup() {
  //     clearInterval(timerID);
  //   }
  // }, []);

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          padding: '.5rem 1rem',
          position: 'absolute',
          left: { xs: '60%', sm: '50%' },
          transform: 'translateX(-50%)',
          display: timer ? 'flex' : 'none',
          opacity: 0.4,
        }}
      >
        {formatTime(timer)}
      </Paper>
    </>
  );
}
