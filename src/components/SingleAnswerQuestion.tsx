import React from 'react';

interface SingleAnswerQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

const SingleAnswerQuestion: React.FC<SingleAnswerQuestionProps> = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="single-answer-question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map(option => (
          <label key={option}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswer(option)}
              className='form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 font-sans'
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SingleAnswerQuestion;
