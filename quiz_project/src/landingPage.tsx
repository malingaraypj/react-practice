import classes from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h1 className={classes.title}>Welcome to QuizMaster!</h1>
        <p className={classes.subtitle}>
          Test your knowledge and track your progress.
        </p>

        <div className={classes.buttons}>
          <button
            onClick={() => navigate("/quiz")}
            className={`${classes.btn} ${classes.newQuiz}`}
          >
            🧠 Take New Quiz
          </button>
          <button
            onClick={() => navigate("/result")}
            className={`${classes.btn} ${classes.results}`}
          >
            📊 View Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
