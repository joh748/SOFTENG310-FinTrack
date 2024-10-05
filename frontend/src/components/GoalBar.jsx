import React from 'react';
import PropTypes from 'prop-types';

function GoalBar({ progress, balance, goal, subgoals }) {
  const hasReachedGoal = Number(balance) >= Number(goal);

  return (
    <div className="w-full bg-gray-200 rounded-lg h-6 relative">
      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-lg h-6 relative">
        <div
          className="bg-gradient-to-r from-blue-400 bg-primary h-full rounded-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Labels for Subgoals */}
      <div className="absolute w-full flex justify-between -top-6">
        {subgoals.map((subgoal, index) => (
          <div key={index} className="text-center w-0 relative">
            <span
              className={`absolute left-1/2 transform -translate-x-1/2 text-xs 
                ${Number(balance) >= Number(subgoal) ? "text-green-700 border-green-500" : "text-red-500 border-red-500"} 
                border rounded px-1`}
            >
              ${subgoal}
            </span>
          </div>
        ))}
      </div>

      {/* Completion Message */}
      {hasReachedGoal && (
        <div className="mt-2 w-full bg-green-100 border border-green-300 rounded-lg p-2">
          <p className="text-green-700 font-semibold">🎉 Congratulations! 🎉</p>
          <p>You have reached your goal of ${goal}.</p>
        </div>
      )}
      
    </div>
  );
}
GoalBar.propTypes = {
  progress: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  balance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  goal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  subgoals: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,
};

export default GoalBar;
