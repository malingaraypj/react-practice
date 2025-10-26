import { useContext } from "react";
import type { questionType } from "../module/questionModule";
import classes from "./resultCard.module.css";
import he from "he";
import { QuestionContext } from "../contexts/questionContext";

function ResultCard({ question, serialNo }: { question: questionType, serialNo: number }) {
    const questionCtx = useContext(QuestionContext)
    const isCorrect = questionCtx.isCorrect(serialNo-1);
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <h1>{he.decode(question.question)}</h1>
      </div>
      <div className={classes.answers}>
        {question.answers.map((answer, idx) => (
          <li className={isCorrect && questionCtx.answered} key={`${answer} ${idx}`}>{answer}</li>
        ))}
      </div>
    </div>
  );
}

export default ResultCard;
