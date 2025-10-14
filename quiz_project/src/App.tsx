import { useEffect, useState } from "react";
import classes from "./app.module.css";
import { getData } from "./data/questions";
import NumberCard from "./components/numberCard";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [active, setActive] = useState<number>(-1);
  useEffect(() => {
    async function fetchQuestions() {
      const newQuestions = await getData();
      setQuestions(newQuestions);
      console.log(newQuestions);
    }

    fetchQuestions();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Quiz questions</h1>
      </div>
      <div className={classes.numberCards}>
        {questions.map((_, idx) => (
          <NumberCard
            key={idx}
            onClick={() => setActive(idx)}
            isActive={idx === active}
            curNumber={idx + 1}
          />
        ))}
      </div>

      <div className={classes.questions}>
        {questions &&
          questions.map((question, idx) => (
            <QuestionCard
              key={idx}
              serialNo={idx + 1}
              isActive={active === idx}
              question={question}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
