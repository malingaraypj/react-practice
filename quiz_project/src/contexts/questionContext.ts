import { createContext } from "react";
import type { questionType } from "../module/questionModule";

export interface questionContextType {
  items: questionType[];
  answer: (idx: number) => void;
  unAnswer: (idx: number) => void;
  markReview: (idx: number) => void;
}

export const QuestionContext = createContext<questionContextType>({
  items: [],
  answer: () => {},
  unAnswer: () => {},
  markReview: () => {},
});
