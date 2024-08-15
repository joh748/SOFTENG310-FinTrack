import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SetGoal from "./SetGoal";
import TransactionContext from "../context/TransactionContext";

export default function SavingsTracker() {
  const { balance, setBalance } = useContext(TransactionContext);
  const [goal, setGoal] = useState(0);
  const [newGoal, setNewGoal] = useState(0);
  const [showSetGoal, setShowSetGoal] = useState(false);
  const [progress, setProgress] = useState(0);

  //Variables for axios instance
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch the user's current balance and goal when the component mounts
  useEffect(() => {
    axiosInstance
      .get("/user/balance")
      .then((response) => {
        setBalance(response.data.result.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [balance]);

  // Fetch the user's current savings goal when the component mounts
  useEffect(() => {
    axiosInstance
      .get("/user/goal")
      .then((response) => {
        console.log("Goal response:", response.data);
        console.log("goal:" + goal);
        setGoal(response.data.result.saving_goal);
      })
      .catch((error) => {
        console.log("Error fetching goal:", error);
      });
  }, []);

  //Dynamic progress bar whenver the balance or goal changes
  useEffect(() => {
    if (balance > goal) {
      setProgress(100);
      return;
    }

    if (goal === 0) {
      setProgress(0);
      return;
    }
    const update = (balance / goal) * 100;
    setProgress(update);
    console.log("Progress: ", update);
  }, [balance, goal]);

  // Updates the user's savings goal via the Set New Goal button
  const updateGoal = () => {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:4000",
      headers: { Authorization: `Bearer ${token}` },
    });

    axiosInstance
      .patch("/user/goal", {
        goal: newGoal,
      })
      .then((response) => {
        setGoal(newGoal);
        setShowSetGoal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center gap-2 mb-2 mt-2">
      <h2 className="text-2xl font-semibold"> Current Savings Goal</h2>
      <p className="text-body">
        ${balance}/${goal || "0"}
      </p>
      <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 outline-primary-highlight outline outline-1">
        <div
          className="h-6 bg-primary-highlight"
          style={{ width: `${progress} %` }}
        ></div>
      </div>
      <button
        className="bg-primary-highlight hover:bg-primary text-white font-bold py-1 px-5 rounded"
        onClick={() => {
          setShowSetGoal(true);
        }}
      >
        Update Savings Goal
      </button>
      {showSetGoal && (
        <SetGoal
          newGoal={newGoal}
          setNewGoal={setNewGoal}
          updateGoal={updateGoal}
          closeModal={() => setShowSetGoal(false)}
        />
      )}
    </div>
  );
}
