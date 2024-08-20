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
        <div className='flex items-center  w-full h-15 border-2 border-black mx-0 px-2' key={option}>
          <label>
            <div className='flex items-center justify-center'>
                <div>
                    <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => onAnswer(option)}
                    className='form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 font-sans mx-1'
                    />
                </div>
                <div>
                    {option}
                </div>
            </div>
          </label>
        </div>
        ))}
      </div>
    </div>
  );
};

export default SingleAnswerQuestion;
