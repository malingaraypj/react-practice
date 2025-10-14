import QuestionContextProvider from "./contexts/questionContextProvider";
import LandingPage from "./landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./QuizPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/quiz", element: <QuizPage /> },
  ]);

  return (
    <QuestionContextProvider>
      <RouterProvider router={router} />
    </QuestionContextProvider>
  );
}

export default App;
