import { useContext, useEffect, useRef } from "react";
import classes from "./questionCard.module.css";
import he from "he";
import { shuffleArray } from "../helper/questionCard";
import type { questionType } from "../module/questionModule";
import { QuestionContext } from "../contexts/questionContext";
import { ImCheckmark2 } from "react-icons/im";

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
  const contex = useContext(QuestionContext);
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
      <div className={classes.header}>
        <div>
          <h1>
            <span style={{ margin: "5px" }}>{serialNo}</span>
            {he.decode(question.question)}
          </h1>
        </div>
        <div
          className={classes.icons}
          onClick={() => contex.markReview(serialNo - 1)}
          title="Mark for Review"
        >
          <ImCheckmark2 color="white" />
        </div>
      </div>
      <div className={classes.options}>
        {shuffledAnswers.map((answer, idx) => (
          <li onClick={() => contex.answer(serialNo - 1, answer)} key={idx}>
            <span style={{ margin: "10px" }}>{idx + 1}</span>
            {he.decode(answer)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
