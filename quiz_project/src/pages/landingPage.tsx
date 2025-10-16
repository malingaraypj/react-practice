import { useContext } from "react";
import classes from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../contexts/modalContext";
import QuizModal from "../modals/QuestionModal";

function LandingPage() {
  const navigate = useNavigate();
  const modalCtx = useContext(ModalContext);

  return (
    <div className={classes.container}>
      <QuizModal />
      <div className={classes.card}>
        <h1 className={classes.title}>Welcome to QuizMaster!</h1>
        <p className={classes.subtitle}>
          Test your knowledge and track your progress.
        </p>

        <div className={classes.buttons}>
          <button
            onClick={() => {
              modalCtx.openModal("quiz");
            }}
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
