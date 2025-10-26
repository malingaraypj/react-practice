import { useContext, useEffect, useRef } from "react";
import classes from "./questionCard.module.css";
import he from "he";
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
  const questionCtx = useContext(QuestionContext);
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
      <div className={classes.header}>
        <div>
          <h1>
            <span style={{ margin: "5px" }}>{serialNo}</span>
            {he.decode(question.question)}
          </h1>
        </div>
        <div
          className={classes.icons}
          onClick={() => questionCtx.markReview(serialNo - 1)}
          title="Mark for Review"
        >
          <ImCheckmark2 color="white" />
        </div>
      </div>
      <div className={classes.options}>
        {question.answers.map((answer, idx) => (
          <li
            key={idx}
            onClick={() => questionCtx.answer(serialNo - 1, answer)}
          >
            <span style={{ margin: "10px" }}>{idx + 1}</span>
            {he.decode(answer)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
