import { useEffect, useState } from "react";
import Line from "./Line";

function BoardComponent({
  onChange,
}: {
  onChange: (newGuess: string) => void;
}) {
  const [word, setWord] = useState<string>("");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>(Array(5).fill(""));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const rows = [];

  useEffect(() => {
    setWord("APPLE");
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") {
        setGuesses((prev) => {
          const newGuesses = [...prev];
          newGuesses[currentIndex] = currentGuess;
          return newGuesses;
        });
        setCurrentIndex((idx) => idx + 1);
        setCurrentGuess("");
      }

      if (e.key === "Backspace") {
        console.log("Backspace was pressed");
      }

      if (e.code >= "KeyA" && e.code <= "KeyZ") {
        setCurrentGuess((prev) => prev + e.key.toUpperCase());
        onChange(currentGuess + e.key.toUpperCase());
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, guesses, currentIndex, word, onChange]);

  for (let i = 0; i < 5; i++) {
    rows.push(<Line key={i} guessWord={guesses[i]} word={word} />);
  }

  return <div>{rows}</div>;
}

export default BoardComponent;
