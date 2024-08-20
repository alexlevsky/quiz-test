import React, { useState, useEffect } from 'react';
import { questions } from '../questions';
import SelectSexQuestion from './SelectSexQuestion';
import SingleAnswerQuestion from './SingleAnswerQuestion';
import CustomInputQuestion from './CustomInputQuestion';
import FinalScreen from './FinalScreen';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [startTime, setStartTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState<{ [key: number]: number }>({});

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const storedAnswers = localStorage.getItem('quiz-answers');
    const storedTimes = localStorage.getItem('quiz-times');
    const storedIndex = localStorage.getItem('quiz-index');
    
    if (storedAnswers && storedTimes && storedIndex) {
      setAnswers(JSON.parse(storedAnswers));
      setTimeSpent(JSON.parse(storedTimes));
      setCurrentQuestionIndex(Number(storedIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quiz-answers', JSON.stringify(answers));
    localStorage.setItem('quiz-times', JSON.stringify(timeSpent));
    localStorage.setItem('quiz-index', currentQuestionIndex.toString());
  }, [answers, timeSpent, currentQuestionIndex]);

  const handleAnswer = (answer: string) => {
    const elapsedTime = Date.now() - startTime;
    setAnswers({ ...answers, [currentQuestion.id]: answer });
    setTimeSpent({ ...timeSpent, [currentQuestion.id]: elapsedTime });

    setStartTime(Date.now());
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setStartTime(Date.now());
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setTimeSpent({});
    setCurrentQuestionIndex(0);
    setStartTime(Date.now());
    localStorage.clear();
  };

  if (!currentQuestion) return null;

  return (
    <div className="quiz-container">
      {currentQuestion.type === 'select-sex' && (
        <SelectSexQuestion
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestion.id]}
        />
      )}
      {currentQuestion.type === 'single-variant' &&
        (!currentQuestion.conditional || answers[1] === currentQuestion.conditional) && (
          <SingleAnswerQuestion
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion.id]}
          />
        )}
      {currentQuestion.type === 'custom-input' && (
        <CustomInputQuestion
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestion.id]}
        />
      )}
      {currentQuestionIndex === questions.length && (
        <FinalScreen timeSpent={timeSpent} resetQuiz={resetQuiz} />
      )}
      {currentQuestionIndex > 0 && (
        <button className="previous-button" onClick={handlePrevious}>
          Previous
        </button>
      )}
    </div>
  );
};

export default Quiz;
