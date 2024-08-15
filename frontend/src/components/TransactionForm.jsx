import React from "react";

export default function TransactionForm() {
  const labelStyle = "text-2xl";
  const inputStyle = "mt-2 border p-2 text-center w-full";
  return (
    <form>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <button className="text-2xl absolute top-0 right-2 text-gray-600 hover:text-primary-red">
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Add New Transaction
          </h2>
          {/* amount,title,description */}
          <div className="flex flex-col">
            <label className={labelStyle}>Title</label>
            <input className={inputStyle}></input>
          </div>
          <div className="flex flex-col">
            <label className={labelStyle}>Amount</label>
            <input className={inputStyle}></input>
          </div>
          <div className="flex flex-col">
            <label className={labelStyle}>Description</label>
            <input className={`${inputStyle} p-6`}></input>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button className=" bg-primary-highlight hover:bg-primary text-white font-bold py-2 px-4 rounded w-full">
              Apply
            </button>
            <button className="bg-gray-600  hover:bg-primary-red text-white font-bold py-2 px-4 rounded mr-2 w-full">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
