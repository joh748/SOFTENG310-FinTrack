import React from "react";
import { useState, useEffect } from "react";

export default function SavingsTracker() {
  const [balance, setBalance] = useState(0);
  const [goal, setGoal] = useState(0);
  return (
    <div>
      <h2> Current Savings Goal:</h2>
      <p>
        ${balance}/${goal}
      </p>
      <progress value={goal} max={goal}>
        {goal}%
      </progress>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Set New Goal
      </button>
    </div>
  );
}
