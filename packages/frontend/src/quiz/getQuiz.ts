import { Quiz, useQuizStore } from '../store';
import { quiz } from '../store/fakeData';

export default function getQuiz(quizId: string): Promise<Quiz> {
  const store = useQuizStore.getState();

  return new Promise((resolve, reject) => {
    if (store.id === quizId) return resolve(store as Quiz);

    // TODO: fetch quiz from server

    store.setQuiz(quiz);
    resolve(quiz);
  });
}
