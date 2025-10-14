import { useContext } from "react";
import classes from "./questionsPage.module.css";
import NumberCard from "./components/numberCard";
import QuestionCard from "./components/QuestionCard";
import { QuestionContext } from "./contexts/questionContext";

function QuizPage() {
  const contx = useContext(QuestionContext);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Quiz questions</h1>
      </div>
      <div className={classes.numberCards}>
        {contx.items.map((_, idx) => (
          <NumberCard
            key={idx}
            onClick={() => contx.selectItem(idx)}
            isActive={idx === contx.active}
            curIdx={idx}
          />
        ))}
      </div>

      <div className={classes.questions}>
        {contx.items &&
          contx.items.map((question, idx) => (
            <QuestionCard
              key={idx}
              serialNo={idx + 1}
              isActive={contx.active === idx}
              question={question}
            />
          ))}
      </div>
    </div>
  );
}

export default QuizPage;
