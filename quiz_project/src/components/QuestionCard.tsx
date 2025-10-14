import { useEffect, useRef } from "react";
import classes from "./questionCard.module.css";

interface questionType {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_anwers: string[];
}

interface reactCardType {
  question: questionType;
  isActive: boolean;
}

const QuestionCard: React.FC<reactCardType> = ({ question, isActive }) => {
  const questionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isActive) {
      questionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isActive]);
  return (
    <div ref={questionRef} className={classes.card}>
      {question.category}
    </div>
  );
};

export default QuestionCard;
