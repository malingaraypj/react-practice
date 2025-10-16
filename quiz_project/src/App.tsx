import QuestionContextProvider from "./contexts/questionContextProvider";
import LandingPage from "./pages/landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import ModalContextProvider from "./contexts/modalContextProvider";
import TimerContextProvider from "./contexts/TimerContextProvider";
import NavWrapper from "./components/NavWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavWrapper />,
      children: [{ index: true, element: <LandingPage /> }],
    },
    { path: "/quiz", element: <QuizPage /> },
  ]);

  return (
    <QuestionContextProvider>
      <ModalContextProvider>
        <TimerContextProvider>
          <RouterProvider router={router} />
        </TimerContextProvider>
      </ModalContextProvider>
    </QuestionContextProvider>
  );
}

export default App;
