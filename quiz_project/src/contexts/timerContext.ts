import { createContext } from "react";

export interface timerType {
  startTimer: () => void;
  stopTimer: () => void;
  curTime: number;
}

export const TimerContext = createContext({
  startTimer: () => {},
  stopTimer: () => {},
  curTime: 0,
});
