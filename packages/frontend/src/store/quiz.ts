import create, { UseBoundStore, StoreApi } from "zustand";

export const useQuizStore = create((set) => ({
  id: null,
  name: null,
  description: null,
  questions: [],
  setQuiz: (quiz: Quiz) => set((state) => ({ ...state, ...quiz })),
  resetQuiz: () =>
    set((state) => ({
      ...state,
      ...{
        id: null,
        name: null,
        description: null,
        questions: [],
      },
    })),
})) as UseBoundStore<StoreApi<QuizStore>>;

export interface Quiz {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export interface QuizStore {
  id: string | null;
  name: string | null;
  description: string | null;
  questions: Question[];
  setQuiz: (quiz: Quiz) => void;
  resetQuiz: () => void;
}

export interface Question {
  id: string | null;
  question: string | null;
  mediaType: "image" | "video" | "audio" | null;
  mediaUrl: string | null;
  choices: Choice[];
}

export interface Choice {
  id: string | null;
  type: "text" | "image" | "video" | "audio";
  content: string | null;
  url: string | null;
  correct: boolean;
}
