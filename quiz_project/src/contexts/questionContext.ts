import { createContext } from "react";
import type { questionType } from "../module/questionModule";

export interface questionContextType {
  active: number;
  items: questionType[];
  answered: number[];
  marked: number[];
  answer: (idx: number) => void;
  unAnswer: (idx: number) => void;
  markReview: (idx: number) => void;
  isMarked: (idx: number) => void;
  isAnswered: (idx: number) => void;
  selectItem: (idx: number) => void;
}

export const QuestionContext = createContext<questionContextType>({
  active: 0,
  items: [],
  answered: [],
  marked: [],
  answer: () => {},
  unAnswer: () => {},
  markReview: () => {},
  isMarked: () => {},
  isAnswered: () => {},
  selectItem: () => {},
});
