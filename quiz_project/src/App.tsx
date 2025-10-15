import QuestionContextProvider from "./contexts/questionContextProvider";
import LandingPage from "./pages/landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import ModalContextProvider from "./contexts/modalContextProvider";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/quiz", element: <QuizPage /> },
  ]);

  return (
    <QuestionContextProvider>
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </QuestionContextProvider>
  );
}

export default App;
