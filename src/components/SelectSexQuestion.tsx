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
          <button
            key={option}
            className={`bg-primary text-white px-4 py-2 rounded font-sans ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectSexQuestion;
