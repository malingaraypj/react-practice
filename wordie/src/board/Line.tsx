import TileComponent from "./TileComponent";
import classes from "./board.module.css";

export default function Line({
  guessWord,
  word,
}: {
  guessWord: string;
  word: string;
}) {
  const cols = [];

  for (let i = 0; i < 5; i++) {
    let tileClass = "";
    const char = guessWord[i] ? guessWord[i] : "";

    if (!guessWord) {
      tileClass = "";
    } else if (char === word[i]) {
      tileClass = classes.correct;
      // } else if (word.includes(char)) {
      //   tileClass = classes.present;
    } else {
      tileClass = classes.absent;
    }

    cols.push(
      <TileComponent key={i} wordChar={guessWord[i]} classes={tileClass} />
    );
  }

  return <div>{cols}</div>;
}
