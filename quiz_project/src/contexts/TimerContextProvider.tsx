import { useEffect, useRef, useState } from "react";
import { TimerContext, type timerType } from "./timerContext";

function TimerContextProvider({ children }: { children: React.ReactNode }) {
  const [timer, setTimer] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-stop after 1 hour (3600 seconds)
  useEffect(() => {
    if (timer >= 5 && timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimer(0);
    }
  }, [timer]);

  const handleStartTimer = () => {
    if (timerRef.current !== null) return; // prevent multiple intervals

    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const handleStopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const ctx: timerType = {
    curTime: timer,
    startTimer: handleStartTimer,
    stopTimer: handleStopTimer,
  };

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
}

export default TimerContextProvider;
