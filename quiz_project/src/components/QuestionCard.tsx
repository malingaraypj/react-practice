import { useEffect, useRef } from "react";
import classes from "./questionCard.module.css";
import he from "he";
import { shuffleArray } from "../helper/questionCard";

interface questionType {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface reactCardType {
  question: questionType;
  isActive: boolean;
  serialNo: number;
}

const QuestionCard: React.FC<reactCardType> = ({
  question,
  isActive,
  serialNo,
}) => {
  const questionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isActive) {
      questionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isActive]);
  const mixedQuestions = [...question.incorrect_answers];
  mixedQuestions.push(question.correct_answer);
  const shuffledAnswers = shuffleArray(mixedQuestions);
  return (
    <div ref={questionRef} className={classes.card}>
      <h1>
        <span style={{ margin: "5px" }}>{serialNo}</span>
        {he.decode(question.question)}
      </h1>

      {shuffledAnswers.map((answer, idx) => (
        <li key={idx}>{he.decode(answer)}</li>
      ))}
    </div>
  );
};

export default QuestionCard;
