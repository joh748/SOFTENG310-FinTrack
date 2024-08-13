import React from "react";
import "../App.css";

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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Set New Savings Goal
          </h2>
          <input
            type="range"
            min="0"
            value={newGoal}
            onChange={handleSliderChange}
            className="w-full"
          ></input>
          <input
            type="number"
            value={newGoal}
            min="0"
            onChange={handleInputChange}
            className="mt-2 border p-2 text-center w-full"
          ></input>
          <div className="flex justify-center mt-4 gap-4">
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
