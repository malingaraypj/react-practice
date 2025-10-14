import { createContext } from "react";
import type { questionType } from "../module/questionModule";

export interface questionContextType {
  active: number;
  items: questionType[];
  answered: { idx: number; val: string }[];
  marked: number[];
  answer: (idx: number, val: string) => void;
  unAnswer: (idx: number) => void;
  markReview: (idx: number) => void;
  isMarked: (idx: number) => boolean;
  isAnswered: (idx: number) => boolean;
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
  isMarked: () => false,
  isAnswered: () => false,
  selectItem: () => {},
});
