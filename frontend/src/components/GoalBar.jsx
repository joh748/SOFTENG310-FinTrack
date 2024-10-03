import React from 'react';
import PropTypes from 'prop-types';

function GoalBar({ progress, balance, goal, subgoals }) {
  return (
    <div className="w-full bg-gray-200 rounded-lg h-6 relative">
      {/* Progress Bar */}
      <div
        className="bg-gradient-to-r from-blue-400 bg-primary h-full rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Labels for Subgoals */}
      { Number(balance) >= Number(goal) ? 
      // the user reached the goal
      <div className="absolute w-full flex justify-between -top-full">
        <div className="bg-green-100 w-full border border-green-300 rounded-lg">
              <p className="text-green-700 font-semibold">🎉 Congratulations! 🎉</p>
              <p>You have reached your goal of ${goal}.</p>
        </div>
      </div>
      : 
      // the user didn't reach the goal
      <div className="absolute w-full flex justify-between -top-6">
        {subgoals.map((subgoal, index) => (
          <div key={index} className="text-center w-0 relative">
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 text-xs 
                  ${Number(balance) >= Number(subgoal) ? "text-green-700" : "text-red-500"}`}
              >
                ${subgoal}
              </span>
            </div>
          ))}
        </div>}
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
