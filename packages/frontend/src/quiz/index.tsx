import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Quiz as QuizType } from '../store';
import getQuiz from './getQuiz';
import QuizUI from './quizUI';

export default function Quiz() {
  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const id = useParams().id as string;

  useEffect(() => {
    getQuiz(id)
      .then(quiz => setQuiz(quiz))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Start</Button>
      <QuizUI quiz={quiz} isVisible={visible} setIsVisible={setVisible} />
    </>
  );
}
