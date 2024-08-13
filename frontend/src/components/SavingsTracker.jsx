import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SetGoal from "./SetGoal";

export default function SavingsTracker() {
  const [balance, setBalance] = useState(0);
  const [goal, setGoal] = useState(0);
  const [newGoal, setNewGoal] = useState(0);
  const [showSetGoal, setShowSetGoal] = useState(false);
  const progress = goal > 0 ? (balance / goal) * 100 : 0;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:4000",
      headers: { Authorization: `Bearer ${token}` },
    });

    //Fetch the user's current balance
    axiosInstance
      .get("/user/balance")
      .then((response) => {
        setBalance(response.data.result.balance);
      })
      .catch((error) => {
        console.log(error);
      });

    //Fetch the user's savings goal
    axiosInstance
      .get("/user/goal")
      .then((response) => {
        setGoal(response.data.result.goal);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Updates the user's savings goal via the Set New Goal button
  const updateGoal = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:4000",
      headers: { Authorization: `Bearer ${token}` },
    });

    axiosInstance
      .post("/user/goal", { goal: newGoal })
      .then((response) => {
        setGoal(newGoal);
        setShowSetGoal(false);
        alert("Goal updated successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex flex-col items-center gap-2 mb-4 mt-4">
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
        {progress >= 0 && (
          <button
            className="bg-primary-highlight hover:bg-primary text-white font-bold py-1 px-5 rounded"
            onClick={() => setShowSetGoal(true)}
          >
            Set New Goal
          </button>
        )}
        {showSetGoal && (
          <SetGoal
            newGoal={newGoal}
            setNewGoal={setNewGoal}
            updateGoal={updateGoal}
            closeModal={() => setShowSetGoal(false)}
          />
        )}
      </div>
    </>
  );
}
