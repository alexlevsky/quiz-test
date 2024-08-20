import React, { useState } from 'react';

interface CustomInputQuestionProps {
  question: {
    id: number;
    question: string;
  };
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

const CustomInputQuestion: React.FC<CustomInputQuestionProps> = ({ question, onAnswer, selectedAnswer }) => {
  const [inputValue, setInputValue] = useState(selectedAnswer || '');

  const handleNext = () => {
    onAnswer(inputValue);
  };

  return (
    <div className="custom-input-question">
      <h2>{question.question}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Type your answer here..."
        className="text-input"
      />
      <button
        className="next-button"
        onClick={handleNext}
        disabled={!inputValue}
      >
        Next
      </button>
    </div>
  );
};

export default CustomInputQuestion;
