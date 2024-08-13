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
          <h2>Set New Savings Goal</h2>
          <input type="range" min="0" onChange={handleSliderChange}></input>
          <input type="number" onChaneg={handleInputChange}></input>
          <div>
            <button
              className=" bg-primary-highlight hover:bg-primary text-white font-bold py-2 px-4 rounded"
              onClick={updateGoal}
            >
              Set New Goal
            </button>
            <button
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
