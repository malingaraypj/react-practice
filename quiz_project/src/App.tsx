import QuizPage from "./QuizPage";
import QuestionContextProvider from "./contexts/questionContextProvider";

function App() {
  return (
    <QuestionContextProvider>
      <QuizPage />
    </QuestionContextProvider>
  );
}

export default App;
