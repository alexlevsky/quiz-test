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
              className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SingleAnswerQuestion;
