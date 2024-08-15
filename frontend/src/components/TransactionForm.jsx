import { useState } from "react";

export default function TransactionForm({ onSubmit, onCancel }) {
  const labelStyle = "text-2xl";
  const inputStyle = "mt-2 border p-2 w-full";
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");

  // Prevent form submission on enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
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
          {/* amount,title,description */}
          <div className="flex flex-col">
            <label className={labelStyle}>Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onKeyDown={handleKeyDown}
              className={inputStyle}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className={labelStyle}>Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onKeyDown={handleKeyDown}
              className={inputStyle}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className={labelStyle}>Description</label>
            <textarea
              id="description"
              value={description}
              className={`${inputStyle}  min-h-[250px] max-h-[400px]`}
              rows="4"
            />
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={onSubmit}
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
