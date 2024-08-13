import React from "react";

export default function SetGoal({
  newGoal,
  setNewGoal,
  updateGoal,
  closeModal,
}) {
  const handleSliderChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewGoal(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={closeModal}>&times;</button>
          <h2>Set New Savings Goal</h2>
          <input
            type="range"
            min="0"
            value={newGoal}
            onChange={handleSliderChange}
          ></input>
          <input
            type="number"
            value={newGoal}
            onChaneg={handleInputChange}
          ></input>
          <div className="flex justify-center mt-4">
            <button
              className=" bg-primary-highlight hover:bg-primary text-white font-bold py-2 px-4 rounded"
              onClick={updateGoal}
            >
              Apply New Goal
            </button>
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
