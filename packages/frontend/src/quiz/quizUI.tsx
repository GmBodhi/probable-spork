import { Button, LinearProgress, Box, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { Quiz, useTimerStore } from '../store';
import BackDrop from './BackDrop';
import Question from './question';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default function QuizUI({
  quiz,
  isVisible,
  setIsVisible,
}: {
  quiz: Quiz | null;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { timer, setTimer, isPaused } = useTimerStore(state => state);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [fakeQuestion, setFakeQuestion] = useState(0);

  //
  // Timer
  //

  function refreshTimer(timerID: number) {
    if (!timer) {
      clearInterval(timerID);
      return setTimer(0);
    } else if (isPaused) return clearInterval(timerID);
    setTimer(timer - 1);
  }

  useEffect(() => {
    const timerID = setInterval(() => refreshTimer(timerID), 1000) as unknown as number;
    return function cleanup() {
      clearInterval(timerID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, isPaused]);

  // Keyboad interaction
  useEffect(
    () => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' && activeQuestion > 0) {

          setActiveQuestion(activeQuestion - 1);
        } else if (e.key === 'ArrowRight' && activeQuestion < (quiz?.questions.length ?? 0) - 1) {
          setActiveQuestion(activeQuestion + 1);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeQuestion]
  );

  //
  // Questions
  //

  function getQuestion(index: number) {
    if (!quiz) return null;
    return quiz.questions[index];
  }

  const [loading, setLoading] = useState({ next: true, loading: true });

  useEffect(() => {
    if (!quiz) return;
    setLoading(i => ({ ...i, loading: !i.loading }));
    setTimeout(() => {
      setLoading(i => ({ ...i, loading: !i.loading }));
      setFakeQuestion(i => activeQuestion);
    }, 500);
  }, [activeQuestion, quiz]);

  return (
    <BackDrop open={isVisible}>
      {/* Close Button */}
      <CloseIcon
        className='buttonlike'
        onClick={() => setIsVisible(false)}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '2rem',
          zIndex: 3,
        }}
      />

      <Box
        sx={{
          width: '60%',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}>
        {/* Back Button */}
        <Button
          onClick={() => {
            setActiveQuestion(activeQuestion - 1);
            setLoading(i => ({ ...i, next: false }));
          }}
          disabled={!activeQuestion}
          color='secondary'
          variant='contained'
          sx={{
            position: 'absolute',
            borderRadius: '.2rem',
            top: '14px',
            left: '0',
          }}>
          Back
        </Button>

        {/* Progress Bar */}
        <LinearProgress
          variant='determinate'
          value={((fakeQuestion + 1) * 100) / ( quiz?.questions.length ?? 1000)}
          sx={{
            height: '.3rem',
            borderRadius: '.5rem',
            '.MuiLinearProgress-bar1Determinate': {
              borderRadius: '.5rem',
            },
          }}
        />

        {/* Timer */}
        <Box>
          <Paper
            elevation={0}
            sx={{
              padding: '.5rem 1rem',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderBottom: '1px solid primary',
            }}>
            {formatTime(timer)}
          </Paper>
        </Box>

        {/* Next Button */}
        <Button
          onClick={() => {
            setLoading(i => ({ ...i, next: true }));
            activeQuestion + 1 === quiz?.questions.length
              ? setActiveQuestion(0)
              : setActiveQuestion(activeQuestion + 1);
          }}
          variant='contained'
          sx={{
            position: 'absolute',
            top: '14px',
            right: '0',
            borderRadius: '.2rem',
          }}>
          {activeQuestion + 1 === quiz?.questions.length ? 'Finish' : 'Next'}
        </Button>
      </Box>

      {/* Question */}
      <Question
        question={getQuestion(fakeQuestion)}
        index={fakeQuestion}
        className={
          loading.next
            ? loading.loading
              ? 'QuestionMountAnimationLeft'
              : 'QuestionUnMountAnimationLeft'
            : loading.loading
            ? 'QuestionMountAnimationRight'
            : 'QuestionUnMountAnimationRight'
        }
      />
    </BackDrop>
  );
}
