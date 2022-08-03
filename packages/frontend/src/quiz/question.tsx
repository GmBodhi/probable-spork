import { Button, Grid, Paper, Stack, Typography, useMediaQuery, Theme } from '@mui/material';

import { forwardRef, ReactElement, useEffect, useRef, useState } from 'react';
import { Choice, Question } from '../store';
import LoadingQuestion from './questionLoading';

export default function QuestionComponent({ question, index = 0, className }: QuestionProps) {
  const sx = useMediaQuery((theme: Theme) => theme.breakpoints.between('xs', 'sm'));
  //

  if (!question) return <LoadingQuestion />;

  return (
    <div className={className}>
      {/* Question */}
      <Paper
        elevation={0}
        sx={{
          width: { xs: '95%', sm: '80%' },
          height: '50vh',
          position: 'relative',
          marginTop: '1rem',
          marginLeft: { md: '1rem', xs: '0' },
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <Typography
          variant='h6'
          sx={{
            lineHeight: '1.3',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%,-50%)',
          }}>{`${index + 1}. ${question.question}`}</Typography>
      </Paper>

      {/* Options */}
      <Stack
        direction={sx ? 'column' : 'row'}
        justifyContent='space-evenly'
        alignItems='center'
        sx={{
          margin: '0 1rem',
        }}
        spacing={1}>
      
        {question.choices.map((answer: Choice, index: number) => (
          <Button
            key={index}
            variant='contained'
            color='primary'
            size='large'
            sx={{
              width: { sm: '80%', xs: '100%' },
              height: { xs: '10vh', sm: '40vh' },
              borderRadius: '.3rem',
              border: 'none',
              overflow: 'hidden',
              // backgroundColor: 'rgba(0, 0, 0, )',
            }}>
            <Typography
              variant='body1'
              sx={{
                padding: '1rem',
                lineHeight: '1.3',
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '1rem', sm: '1.4rem', md: '1.5rem' },
              }}>
              {answer.content}
            </Typography>
          </Button>
        ))}
      </Stack>
    </div>
  );
}

type QuestionProps = {
  question: Question | null;
  index: number;
  className: string;
};
