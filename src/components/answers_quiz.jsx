// Answers_quiz.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import Quastion_quiz from "./quastion_quiz";
import { useNavigate } from "react-router-dom";

export default function Answers_quiz({
  setquestions_num,
  setquestions_counter,
}) {
  const [questionactuelle, setquestionactuelle] = useState(Number(0));
  const [questions, Setquestions] = useState([]);
  const [answer, setanswar] = useState([]);
  const [isClicked, setIsClicked] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const navigate = useNavigate();
  setquestions_num(questions.length);
  useEffect(() => {
    axios
      .get(
        "https://quizapi.io/api/v1/questions?apiKey=tXahjEmD6aW8husYw4d3wOl8ZMtVKtosn4o8bw3L&limit=8&category=Docker"
      )
      .then((quest) => Setquestions(quest.data));

      setIsLoading(false);
  }, []);

  const handleNextQuestion = () => {
    if (isClicked) {
      setquestionactuelle(questionactuelle + 1);
      // i am cllectiong the users answer when ever he clicks on suivant
      setSelectedAnswers([...selectedAnswers, isClicked]);
      setIsClicked(null);
      setquestions_counter(questionactuelle + 1);
      console.log(selectedAnswers);
    }
  };
  const handlePrevQuestion = () => {
    setquestionactuelle(questionactuelle - 1);
    setIsClicked(null);
    setquestions_counter(questionactuelle - 1);
  };

  useEffect(() => {
    const currentAnswers = questions[questionactuelle]?.answers;

    if (currentAnswers) {
      const answersArray = Object.values(currentAnswers).filter(
        (val) => val !== null
      );
      setanswar(answersArray);
    }
  }, [questionactuelle, questions]);

  const setreponses = () => {
    // Inversez l'état isClicked lorsqu'il est cliqué
    setIsClicked((prevState) => !prevState);
  };

  return (
    <>
        <Quastion_quiz
        questions={questions}
        questionactuelle={questionactuelle}
        handleNextQuestion={handleNextQuestion}
      />
      
      <div className="row answers">
        <div className="cards">
          {answer.map((val, ind) => (
            <div
              key={ind}
              className={`card ${
                isClicked === ind ? "border-info border-5" : ""
              }`}
              onClick={() => {
                setreponses();
                setIsClicked(ind);
              }}
            >
              {/* <a href="#"> */}
              <div className="card-body">
                {/* <h5 className="card-title">A</h5> */}
                {
                  val.startsWith("$") ? (
                    <code>{val.slice(1)}</code> // If the text starts with $, render it as code
                  ) : (
                    <p className="card-text">{val}</p>
                  ) // Otherwise, render it as normal text
                }
              </div>
              {/* </a> */}
            </div>
          ))}
        </div>
        <div className="row text-light fs-5 mt-3">
          {questionactuelle && (
            <button
              className="col-6 btn btn-warning"
              onClick={handlePrevQuestion}
            >
              précident
            </button>
          )}
          {questionactuelle < questions.length - 1 ? (
            <button
              className="col-6 btn btn-primary"
              onClick={handleNextQuestion}
            >
              Suivant
            </button>
          ) : (
            <button
              className="col-6 btn valider"
              onClick={navigate("/result", {
                state: [{ selectedAnswers }, { questions }],
              })}
            >
              valider
            </button>
          )}
        </div>
      </div>
    </>
  );
}
