import { useEffect, useState, type ReactNode } from "react";
import { QuestionContext, type questionContextType } from "./questionContext";
import { getData } from "../data/questions";
import type { questionType } from "../module/questionModule";
import { shuffleArray } from "../helper/questionCard";

interface Props {
  children: ReactNode;
}

const QuestionContextProvider: React.FC<Props> = ({ children }) => {
  const [questions, setQuestions] = useState<questionType[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    { idx: number; val: string }[]
  >([]);
  const [reviewQuestions, setReviewQuestions] = useState<number[]>([]);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    async function fetchQuestions() {
      const newQuestions = await getData();

      // Shuffle the answers for each question before setting them
      const shuffledQuestions = newQuestions.map((question: questionType) => {
        const answers = shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);
        return { ...question, ["answers"]: answers };
      });

      setQuestions(shuffledQuestions);
      console.log(shuffledQuestions);
    }

    fetchQuestions();
  }, []);

  const handleCheckCorrectness = (idx: number) => {
    const answered = answeredQuestions.find(
      ({ idx: ansIdx }) => ansIdx === idx
    );

    return answered?.val === questions[idx].correct_answer;
  };

  const handleCorrectAnswer = (idx: number) => {
    const question = questions[idx];
    if (!question || !question.answers) return -1;

    return question.answers.findIndex(
      (ans) =>
        ans.trim().toLowerCase() ===
        question.correct_answer.trim().toLowerCase()
    );
  };

  const handleRemoveReview = (idx: number) => {
    if (reviewQuestions.includes(idx)) {
      setReviewQuestions((prev) => prev.filter((revIdx) => revIdx !== idx));
    }
  };

  const handleAnswerQuestion = (idx: number, val: string) => {
    // Check if already answered
    const existingIndex = answeredQuestions.findIndex(
      (question) => question.idx === idx
    );

    console.log(idx, val);
    if (existingIndex === -1) {
      setAnsweredQuestions((prev) => [...prev, { idx, val }]);
    } else {
      setAnsweredQuestions((prev) =>
        prev.map((q) => (q.idx === idx ? { idx, val } : q))
      );
    }

    handleRemoveReview(idx);
  };

  const handleReviewQuestion = (idx: number) => {
    if (!reviewQuestions.includes(idx)) {
      setReviewQuestions((prev) => [...prev, idx]);
    }
  };

  const handleUnanswerQuestion = (idx: number) => {
    setAnsweredQuestions((prev) =>
      prev.filter((question) => question.idx !== idx)
    );
  };

  const handleIsMarked = (idx: number) => {
    return reviewQuestions.includes(idx);
  };

  const handleIsAnswered = (idx: number) => {
    return answeredQuestions.findIndex(({ idx: qIdx }) => qIdx === idx) !== -1;
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
    isCorrect: handleCheckCorrectness,
    handleCorrectAnswer,
  };

  return (
    <QuestionContext.Provider value={context}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
