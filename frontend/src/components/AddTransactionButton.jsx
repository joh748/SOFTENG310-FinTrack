import { useState } from "react";
import axios from "axios";
import TransactionForm from "./TransactionForm";

export default function AddTransactionButton() {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = async ({
    title,
    amount,
    description,
    transactionType,
  }) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("User is not authenticated.");
        return;
      }

      const transactionURL = "http://localhost:4000/transaction";
      const balanceURL = "http://localhost:4000/user/balance";

      console.log("Posting transaction to:", transactionURL);

      // Post request to create the transaction
      const response = await axios.post(
        transactionURL,
        {
          title,
          amount,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response data:", response.data);

      if (response.status === 200) {
        console.log("Transaction created successfully.");

        // Fetch the user balance
        try {
          const balanceResponse = await axios.get(balanceURL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log("Balance response data:", balanceResponse.data);

          const userBalance = balanceResponse.data.balance;
          console.log("Fetched user balance:", userBalance);

          const newBalance =
            transactionType === "income"
              ? userBalance + parseFloat(amount)
              : userBalance - parseFloat(amount);

          // PATCH request to update the balance
          const patchResponse = await axios.patch(
            balanceURL,
            {
              balance: newBalance,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Balance before update:", userBalance);
          console.log("Amount added/subtracted:", amount);
          console.log("Balance after update:", patchResponse.data.balance);
          console.log("Balance updated successfully");
        } catch (balanceError) {
          console.error("Error fetching user balance:", balanceError);
        }
      }
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
