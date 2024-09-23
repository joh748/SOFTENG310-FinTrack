import { useState, useEffect } from "react";

export default function TransactionDetailPopup({transaction, setShowDetails}){
   const handleExit =() => {
     setShowDetails(false);
   }

  
  return(
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-3 rounded-2xl w-96 relative flex flex-col">
              <h2 className="text-sub-heading mx-auto pb-3">Transaction Details</h2>

              <h2 className="pl-2 text-body">Title: {transaction.title}</h2>
        
              <h2 className="pl-2 text-body">Amount: ${transaction.amount}</h2>

              <h2 className="pl-2 text-body">Description: {transaction.description}</h2>

              <button className="mr-0 ml-auto pt-3" onClick= {handleExit}>
                 <div className="bg-primary-dark p-2 rounded-2xl w-20 relative"><h1 className="text-button-small text-white">exit</h1></div>
              </button>
          </div>
        </div>
      </>
  )
}