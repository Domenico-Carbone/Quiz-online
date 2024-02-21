import "./Summary.css";
import imgQuizComplete from "../../assets/quiz-complete.png";
import questions from "../../questions";
import SummaryStats from "./SummaryStats";

export default function Summary({ answers, start }) {
  const answersSkippedPercent = Math.floor(
    (100 / 7) * answers.filter((answer) => answer.status === "skipped").length
  );
  const answersCorrectPercent = Math.floor(
    (100 / 7) * answers.filter((answer) => answer.status === "correct").length
  );
  const answersWrongPercent = Math.floor(
    (100 / 7) * answers.filter((answer) => answer.status === "wrong").length
  );

  const maxValue = Math.max(answersSkippedPercent,answersCorrectPercent,answersWrongPercent);

  return (
    <div id="summary">
      <img src={imgQuizComplete} alt="quiz-complete" />
      <h2>QUIZ COMPLETED!</h2>
      <div id="summary-stats">
        <SummaryStats 
          text={"SKIPPED"} 
          stats={answersSkippedPercent} 
          max={maxValue} 
        />
        <SummaryStats
          text={"ANSWERED CORRECTLY"}
          stats={answersCorrectPercent}
          max={maxValue}
        />
        <SummaryStats
          text={"ANSWERED INCORRECTLY"}
          stats={answersWrongPercent}
          max={maxValue}
        />
      </div>

      <ol>
        {questions.map((question, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{question.text}</p>
              {answers[index].text === "skipped" ? (
                <p className="user-answer skipped">Skipped</p>
              ) : (
                <p className={`question user-answer ${answers[index].status}`}>
                  {answers[index].text}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <button className="button-restart" onClick={start}>Back to start</button>
    </div>
  );
}
