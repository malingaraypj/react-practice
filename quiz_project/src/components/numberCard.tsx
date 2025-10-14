import type { ComponentProps } from "react";
import classes from "./numberCard.module.css";

type numberCardTypes = {
  curNumber: number;
  isActive: boolean;
} & ComponentProps<"div">;

const NumberCard: React.FC<numberCardTypes> = ({
  curNumber,
  isActive,
  ...props
}) => {
  return (
    <div {...props}>
      <div className={`${classes.card} ${isActive ? classes.active : ""}`}>
        {curNumber}
      </div>
    </div>
  );
};

export default NumberCard;
