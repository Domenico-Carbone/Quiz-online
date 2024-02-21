import Header from "./components/Header";
import Summary from "./components/SUMMARY/Summary";
import Quiz from "./components/QUIZ/Quiz";
import StartButton from "./components/StartButton";
import { useState } from "react";

function App() {
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(false);

  function setComplited(answers) {
    setAnswers([...answers]);
  }

  function handleStart(){
    setStart(true);
  }

  function handleStartBack(){
    setStart(false);
    setAnswers([]);
  }

  return (
    <>
      <Header />
      {!start 
      ? <StartButton start={handleStart} /> 
      : (answers.length === 7 
      ? <Summary answers={answers}  start={handleStartBack} />
      : <Quiz complete={setComplited} />)
      }
    </>
  );
}

export default App;
