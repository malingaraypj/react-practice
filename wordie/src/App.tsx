import { useState } from "react";
import BoardComponent from "./board/boardComponent";

function App() {
  const [currentGuess, setCurrentGuess] = useState<string>("");
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="bg-amber-500 font-bold text-2xl mb-28 p-5 rounded-lg text-white">
        {currentGuess}
      </div>
      <BoardComponent
        onChange={(newGuess: string) => setCurrentGuess(newGuess)}
      />
    </div>
  );
}

export default App;
