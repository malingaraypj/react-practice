import { useContext } from "react";
import classes from "./resultPage.module.css";
import { QuestionContext } from "../contexts/questionContext";
import ResultCard from "../components/resultCard";

function ResultPage() {
  const questionCtx = useContext(QuestionContext);
  return (
    <div className={classes.container}>
      <div className={classes.questions}>
        {questionCtx.items.map((question, idx) => (
          <ResultCard key={`${question} ${idx}`} question={question} />
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
