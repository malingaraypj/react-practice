import { useEffect, useState, type ReactNode } from "react";
import { QuestionContext, type questionContextType } from "./questionContext";
import { getData } from "../data/questions";
import type { questionType } from "../module/questionModule";

interface Props {
  children: ReactNode;
}

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<questionType[]>([]);

  useEffect(() => {
    async function fetchQuestions() {
      const newQuestions = await getData();
      setQuestions(newQuestions);
      console.log(newQuestions);
    }

    fetchQuestions();
  }, []);

  const context: questionContextType = {
    items: questions,
    answer: (idx: number) => {
      console.log("Answer question", idx);
    },
    unAnswer: (idx: number) => {
      console.log("Unanswer question", idx);
    },
    markReview: (idx: number) => {
      console.log("Mark question for review", idx);
    },
  };

  return (
    <QuestionContext.Provider value={context}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
