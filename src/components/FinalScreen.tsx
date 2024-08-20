import React from 'react';

interface FinalScreenProps {
  timeSpent: { [key: number]: number };
  resetQuiz: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ timeSpent, resetQuiz }) => {
  const totalTimeSpent = Object.values(timeSpent).reduce((total, time) => total + time, 0);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="final-screen bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">You are all set!</h2>
        <p className="mb-4">Total time spent: {Math.round(totalTimeSpent / 1000)} seconds</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetQuiz}
        >
          Reset Quiz
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;