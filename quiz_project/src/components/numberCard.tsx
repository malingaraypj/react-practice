import { useContext, type ComponentProps } from "react";
import classes from "./numberCard.module.css";
import { QuestionContext } from "../contexts/questionContext";

type numberCardTypes = {
  curIdx: number;
  isActive: boolean;
} & ComponentProps<"div">;

const NumberCard: React.FC<numberCardTypes> = ({
  curIdx,
  isActive,
  ...props
}) => {
  const contx = useContext(QuestionContext);
  return (
    <div {...props}>
      <div
        className={`${classes.card} ${isActive ? classes.active : ""} ${
          contx.isAnswered(curIdx) ? classes.answered : classes["not-answered"]
        } ${contx.isMarked(curIdx) ? classes.marked : ""}`}
      >
        {curIdx + 1}
      </div>
    </div>
  );
};

export default NumberCard;
