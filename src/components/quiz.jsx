import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Haed_quiz from './haed_quiz';
import Quastion_quiz from './quastion_quiz';
import Answers_quiz from './answers_quiz';


const Quiz = ({ setQuiz }) => {
  const navigate = useNavigate();
  const [questions_num, setquestions_num] = React.useState(0);
  const [questions_counter, setquestions_counter] = React.useState(0);

  useEffect(() => {
    // When the Quiz component mounts, set quiz in progress to false
    return () => setQuiz(false);
  }, []);

  return (
    <>
    <Haed_quiz questions_num={questions_num} questions_counter={questions_counter}/>
    {/* <Quastion_quiz /> */}
    <Answers_quiz setquestions_num={setquestions_num} setquestions_counter={setquestions_counter}/> 

  
   
    </>
  );
};

export default Quiz;