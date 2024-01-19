import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({setQuiz}) => {
  const navigate = useNavigate();

  const startQuiz = () => {
    // Navigate to the Quiz component when the button is clicked
    navigate('/quiz');
    setQuiz(false);
  };

  return (
    <div className="col-md-12 text-center home">
      <h1>Easy Quiz</h1>
      <p>*There is a time limit for each question <br />
        *To be considered successful, you must
        complete at least 70% of the questions</p>
      <button className="btn-quiz" onClick={startQuiz}>
        <Link className="btn-quiz-link" to="/quiz"> Start Quiz </Link>
      </button>
    </div>
  );
}

export default Home;