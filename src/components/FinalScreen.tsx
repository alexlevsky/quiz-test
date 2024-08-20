import React from 'react';

interface FinalScreenProps {
  timeSpent: { [key: number]: number };
  resetQuiz: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ timeSpent, resetQuiz }) => {
  const totalTime = Object.values(timeSpent).reduce((acc, time) => acc + time, 0);

  return (
    <div className="final-screen">
      <h2>You are all set!</h2>
      <p>Total time spent: {Math.round(totalTime / 1000)} seconds</p>
      <button className="reset-button" onClick={resetQuiz}>
        Reset
      </button>
    </div>
  );
};

export default FinalScreen;
