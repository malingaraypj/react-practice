import { useContext } from "react";
import ModalDialog from "./ModalDialog";
import { ModalContext } from "../contexts/modalContext";
import { useNavigate } from "react-router";

function QuizModal() {
  const modalCtx = useContext(ModalContext);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    modalCtx.closeModal();
    navigate("/quiz");
  };

  return (
    <ModalDialog
      onClose={() => modalCtx.closeModal()}
      open={modalCtx.activeModal === "quiz"}
    >
      <div>
        <p>Start the quiz</p>
        <button onClick={handleStartQuiz}>Start</button>
      </div>
    </ModalDialog>
  );
}

export default QuizModal;
