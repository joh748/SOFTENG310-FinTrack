import { useState, useEffect } from "react";
import axios from "axios";
import TransactionForm from "./TransactionForm";

export default function AddTransactionButton() {
  const [showForm, setShowForm] = useState(false);
  const [balance, setBalance] = useState(0);

  // Fetch the user's current balance when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const axiosInstance = axios.create({
      baseURL: "http://localhost:4000",
      headers: { Authorization: `Bearer ${token}` },
    });

    axiosInstance
      .get("/user/balance")
      .then((response) => {
        setBalance(response.data.result.balance);
      })
      .catch((error) => {
        console.error("Error fetching user balance:", error);
      });
  }, [balance]); // Empty dependency array to run only on mount

  const handleFormSubmit = async ({
    title,
    amount,
    description,
    transactionType,
  }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("User is not authenticated.");
      return;
    }

    const axiosInstance = axios.create({
      baseURL: "http://localhost:4000",
      headers: { Authorization: `Bearer ${token}` },
    });

    try {
      // Post request to create the transaction
      const response = await axiosInstance.post("/transaction", {
        title,
        amount,
        description,
      });

      console.log("Transaction created successfully.", response.data);

      // Update the balance after the transaction is created
      const newBalance =
        transactionType === "income"
          ? balance + parseFloat(amount)
          : balance - parseFloat(amount);

      // PATCH request to update the balance
      await axiosInstance.patch("/user/balance", { balance: newBalance });

      console.log("Balance updated successfully.");
      setBalance(newBalance); // Update the balance state
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setShowForm(false);
    }
  };

  return (
    <>
      <button
        className="bg-primary-purple text-white text-button px-3 py-3 min-w-[280px] rounded-full hover:bg-primary-purple-dark active:bg-primary-pruple-darker"
        onClick={() => setShowForm(true)}
      >
        Add Transaction
      </button>
      {showForm && (
        <TransactionForm
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}
    </>
  );
}
