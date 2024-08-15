import { useState } from "react";

export default function TransactionForm({ onSubmit, onCancel }) {
  const labelStyle = "text-2xl";
  const inputStyle = "mt-2 border p-2 w-full";
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("income");

  // Prevent form submission on enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleSubmit = () => {
    onSubmit({
      title,
      amount,
      description,
      transactionType,
    });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <button
            onClick={onCancel}
            className="text-2xl absolute top-0 right-2 text-gray-600 hover:text-primary-red"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Add New Transaction
          </h2>
          {/*Transaction Type element*/}
          <div className="flex flex-col mt-4">
            <label className={`${labelStyle} mb-2`}>Transaction Type</label>
            <div className="w-full flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setTransactionType("income")}
                className={`w-full px-4 py-2 font-bold rounded ${
                  transactionType === "income"
                    ? "bg-primary-green text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Income
              </button>
              <button
                type="button"
                onClick={() => setTransactionType("expense")}
                className={`w-full px-4 py-2 font-bold rounded ${
                  transactionType === "expense"
                    ? "bg-primary-red text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Expense
              </button>
            </div>
          </div>
          {/*Title element*/}
          <div className="flex flex-col">
            <label className={labelStyle}>Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className={inputStyle}
            ></input>
          </div>
          {/*Amount element*/}
          <div className="flex flex-col">
            <label className={labelStyle}>Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              onKeyDown={handleKeyDown}
              className={inputStyle}
            ></input>
          </div>
          {/*Description element*/}
          <div className="flex flex-col">
            <label className={labelStyle}>Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${inputStyle}  min-h-[250px] max-h-[400px]`}
              rows="4"
            />
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={handleSubmit}
              className=" bg-primary-highlight hover:bg-primary text-white font-bold py-2 px-4 rounded w-full"
            >
              Apply
            </button>
            <button
              onClick={onCancel}
              className="bg-gray-600  hover:bg-primary-red text-white font-bold py-2 px-4 rounded mr-2 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
