import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Result({ setQuiz }) {
  const navigate = useNavigate();
  const [score, setScore] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);

  setQuiz(false);

  const startQuiz = () => {
    navigate("/quiz");
    setQuiz(false);
  };

  const gotoHome = () => {
    navigate("/");
    setQuiz(true);
  };

  // The use location is used to get the anszwer send by the usenavigate in answer_quiz
  const location = useLocation();
  const selectedAnswers = location.state[0].selectedAnswers;
  const questions = location.state[1].questions;

//   count the score

const newScore = selectedAnswers.reduce((score, answer, index) => {
    const correctAnswers = Object.values(questions[index].correct_answers).map(answer => answer);
    if (correctAnswers[answer] === 'true') {
        return score + 1;
    } else {
        return score;
    }
}, 0);
useEffect(() => {
setScore(newScore);
setPercentage((newScore / questions.length) * 100);
}, []);


console.log('score ', score);

  console.log("here fro result page ", selectedAnswers);
  console.log("here fro result page ", questions);
  return (
    <div className="row ">
      <div className="col-md-6 results-container">
        <div className="results">
          <p className="nav-link links">
            <i className="bi bi-check-circle-fill nace_result"></i>
            <span> {score}/{questions.length}</span>
          </p>
          <p className="nav-link links">
            <i className="bi bi-x-circle-fill bad_result"></i>{" "}
            <span> {questions.length - score}/{questions.length}</span>
          </p>
          <p>
            SCORE: <span>{percentage} %</span>
          </p>

          {percentage < 70 ?(<p>
            <i className="bi bi-x-lg bad_result"></i>{" "}
            <span>try again you must have 70%</span>
          </p>):
          (<p>
            <i className="bi bi-check-lg nace_result"></i>{" "}
            <span>congatulation</span>
          </p>)}
          <button className="btn-quiz" onClick={gotoHome}>
            <Link className="btn-quiz-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </button>

          <button className="btn-quiz ms-2" onClick={startQuiz}>
            <Link className="btn-quiz-link" to="/quiz">
              {" "}
              Try Again{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className="col-md-6 results-container">
        <div className="results_of_quastions">
          {questions.map((q, index) => {
            const answers = Object.values(q.answers).filter(
              (answer) => answer !== null && answer
            );
            const answers_num = Object.values(q.correct_answers).map((answer) =>
              answer === "true" ? 1 : 0
            );
            console.log(answers_num);
            let style = answers_num[selectedAnswers[index]]
              ? "quiz-question"
              : "quiz-question_1";

            

              const answer_html = answers.map((answer, key) => (
                <li
                key={key}
                className={`${
                    answers_num[key] === selectedAnswers[index] || answers_num[key]
                    ? "good"
                    : selectedAnswers[index] === key
                    ? "bad"
                    : ""
                }`}
                >
                    {key + 1}. 
                    {
                        answer.startsWith('$') 
                        ? <code>{answer.slice(1)}</code> // If the answer starts with $, render it as code
                        : answer // Otherwise, render it as normal text
                    }
                </li>
            ));
            return (
              <div key={index} className={style}>
                <p className="question">
                  {index + 1}. {q.question}
                </p>
                <ul className="options">
                  {answer_html}
                </ul>
              </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}
