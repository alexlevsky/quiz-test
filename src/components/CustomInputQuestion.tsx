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
        className="border rounded w-full py-2 px-3 my-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-sans"
      />
      <button
        onClick={handleNext}
        disabled={!inputValue}
        className="bg-primary text-white px-4 py-2 rounded w-full font-sans my-2"
      >
        Next
      </button>
    </div>
  );
};

export default CustomInputQuestion;
