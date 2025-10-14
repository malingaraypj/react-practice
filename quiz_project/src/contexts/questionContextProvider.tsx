import { useEffect, useState, type ReactNode } from "react";
import { QuestionContext, type questionContextType } from "./questionContext";
import { getData } from "../data/questions";
import type { questionType } from "../module/questionModule";

interface Props {
  children: ReactNode;
}

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<questionType[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [reviewQuestions, setReviewQuestions] = useState<number[]>([]);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    async function fetchQuestions() {
      const newQuestions = await getData();
      setQuestions(newQuestions);
      console.log(newQuestions);
    }

    fetchQuestions();
  }, []);

  const handleAnswerQuestion = (idx: number) => {
    // check if already answered
    const check = answeredQuestions.findIndex(
      (questionIdx) => questionIdx === idx
    );
    if (check === -1) {
      setAnsweredQuestions((prev) => [...prev, idx]);
    }
  };
  const handleReviewQuestion = (idx: number) => {
    if (!reviewQuestions.includes(idx)) {
      setReviewQuestions((prev) => [...prev, idx]);
    }
  };

  const handleUnanswerQuestion = (idx: number) => {
    // check if answered or not
    const check = answeredQuestions.findIndex(
      (questionIdx) => questionIdx === idx
    );
    if (check !== -1) {
      setAnsweredQuestions((prev) =>
        prev.filter((questionIdx) => questionIdx !== idx)
      );
    }
  };

  const handleIsMarked = (idx: number) => {
    return reviewQuestions.includes(idx);
  };

  const handleIsAnswered = (idx: number) => {
    return answeredQuestions.includes(idx);
  };

  const context: questionContextType = {
    active: selected,
    items: questions,
    answered: answeredQuestions,
    marked: reviewQuestions,
    answer: handleAnswerQuestion,
    unAnswer: handleUnanswerQuestion,
    markReview: handleReviewQuestion,
    isMarked: handleIsMarked,
    isAnswered: handleIsAnswered,
    selectItem: setSelected,
  };

  return (
    <QuestionContext.Provider value={context}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
