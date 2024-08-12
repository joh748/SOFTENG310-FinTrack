import React from "react";
import { useState, useEffect } from "react";

export default function SavingsTracker() {
  const [balance, setBalance] = useState(0);
  const [goal, setGoal] = useState(0);
  const progress = goal > 0 ? (balance / goal) * 100 : 0;
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-subheading"> Current Savings Goal</h2>
        <p className="text-body">
          ${balance}/${goal}
        </p>
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 outline-primary-highlight outline outline-1">
          <div
            className="h-6 bg-primary-highlight"
            style={{ width: `${progress}` }}
          ></div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded">
          Set New Goal
        </button>
      </div>
    </>
  );
}
