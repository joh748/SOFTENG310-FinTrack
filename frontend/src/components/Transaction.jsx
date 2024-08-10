import React, { useEffect, useState } from 'react';

const Transaction = ({ transaction }) => {
    const [isAmountNegative, setIsAmountNegative] = useState();

    useEffect(() => {
        setIsAmountNegative(transaction.amount < 0);
    }, [transaction.amount]);

    return (
        <div>
            {isAmountNegative ? (
                <div className='flex flex-row justify-between text-body text-red-500 pl-[8px]'>
                    <p className=' '>{transaction.amount}: {transaction.description}</p>
                    <p className=''>{transaction.created_at.substring(0, 10)}</p>
                </div>
            ) : (
                <div className='flex flex-row justify-between text-body text-green-500'>
                    <p className=''>+{transaction.amount}: {transaction.description}</p>
                    <p className=''>{transaction.created_at.substring(0, 10)}</p>
                </div>
            )}
        </div>
    );
};

export default Transaction;
