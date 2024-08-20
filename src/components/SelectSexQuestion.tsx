import React from 'react';

interface SelectSexQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

const SelectSexQuestion: React.FC<SelectSexQuestionProps> = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="select-sex-question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map(option => (
          <div className='flex items-center' key={option}>
            <button 
              key={option}
              className={`bg-primary text-white px-4 py-2 rounded font-sans my-1 w-full
              ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectSexQuestion;
