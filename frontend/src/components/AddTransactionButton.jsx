import TransactionForm from "./TransactionForm";
import React from "react";

export default function AddTransactionButton() {
  const [showForm, setShowForm] = React.useState(false);

  const handleFormSubmit = () => {
    // TODO: Handle transaction submission
    console.log("Transaction submitted!");
    setShowForm(false);
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
