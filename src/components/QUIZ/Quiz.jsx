import "./Quiz.css";
import questions from "../../questions";
import { useState, useEffect } from "react";
import Progress from "./progress/Progress";

const TIMER = 10000;
export default function Quiz({ complete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(TIMER);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);

      return () => {
        clearInterval(interval);
      };
    }, 10);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { text: "skipped", status: "skipped" },
      ]);
      goToNextQuestion();
    }
  }, [remainingTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextQuestion();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [currentQuestionIndex]);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setRemainingTime(TIMER);
  };

  const handleAnswerClick = (answer, index) => {
    const isCorrect = Math.floor(Math.random() * 4) === index;
    const answerObject = {
      text: answer,
      status: isCorrect ? "correct" : "wrong",
    };
    setAnswers((prevAnswers) => [...prevAnswers, answerObject]);
    goToNextQuestion();
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <div id="quiz">
          <div id="question">
            <Progress remainingTime={remainingTime} timer={TIMER} />
            <h2>{currentQuestion.text}</h2>
            <div id="answers">
              {currentQuestion.answers.map((answer, index) => (
                <div className="answer " key={index}>
                  <button onClick={() => handleAnswerClick(answer, index)}>
                    {answer}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        complete(answers)
      )}
    </>
  );
}
