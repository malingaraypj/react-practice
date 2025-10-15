import { useContext } from "react";
import ModalDialog from "./ModalDialog";
import { ModalContext } from "../contexts/modalContext";

function QuestionModal() {
  const modalCtx = useContext(ModalContext);
  return (
    <ModalDialog open={modalCtx.activeModal === "quiz"}>
      <div>start the quiz</div>
    </ModalDialog>
  );
}

export default QuestionModal;
