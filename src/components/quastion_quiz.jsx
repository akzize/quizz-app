export default function Quastion_quiz({ questions, questionactuelle }) {
  // Vérifiez que 'questions' et 'questions[questionactuelle]' sont définis
  const numero = questionactuelle
  const currentQuestion = questions?.[numero];
  return (
    <div className='row quastions'>
      <div className="col-md-12 text-center mt-5 ">
        {/* Utilisez l'opérateur de coalescence nulle pour éviter les erreurs */}
        <h5>{numero+1} {currentQuestion?.question}</h5>
      </div>
    </div>
  );
}