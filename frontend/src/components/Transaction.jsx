import React, { useEffect, useState, useContext } from 'react';
import TransactionContext from '../context/TransactionContext';

const Transaction = ({ transaction }) => {
    const [isAmountNegative, setIsAmountNegative] = useState();
    const [amount, setAmount] = useState();
    const { currency } = useContext(TransactionContext);

    // useEffect check if each transaction is negative and then converts the currency
    useEffect(() => {
        setIsAmountNegative(transaction.amount < 0);
        const convert = async () => {
            await convertCurrency(currency, 'NZD', transaction.amount);
        }
        convert();
    }, [currency]);

    /**
     * converts the currency of each transaction using the Frankfurter API
     * the conversion rates refresh at ~2am NZST every business day
     * 
     * @param to // the currency to convert to
     * @param from // the currency to convert from (default value for this application is NZD)
     * @param amount // the amount of the transaction 
     */
    const convertCurrency = async (to, from, amount) => {
        if (!(to === from)) {
            try {
                const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
                const data = await response.json();
                formatAmount(data.rates[to]);
            } catch (error) {
                console.error("Error calculating conversion", error);
            }
        } else {
            setAmount(amount);
        }
    }

    /**
     * formats the amount to 3 decimal places and sets the new value of amount
     * 
     * @param amount // the amount of money to format
     */
    const formatAmount = (amount) => {
        setAmount(parseFloat(amount).toFixed(3));
    }

    return (
        <div>
            {isAmountNegative ? (
                <div className='flex flex-row justify-between text-body text-red-500 pl-[8px]'>
                    <p className=' '>{amount}: {transaction.description}</p>
                    <p className=''>{transaction.created_at.substring(0, 10)}</p>
                </div>
            ) : (
                <div className='flex flex-row justify-between text-body text-green-500'>
                    <p className=''>+{amount}: {transaction.description}</p>
                    <p className=''>{transaction.created_at.substring(0, 10)}</p>
                </div>
            )}
        </div>
    );
};

export default Transaction;
