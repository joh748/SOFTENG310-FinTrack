import TransactionContext from "./TransactionContext.jsx";
import { filterPastWeekTransactions, filterPastMonthTransactions, filterPastYearTransactions } from '../utility/transactionFilters.js';
import { useEffect, useState } from 'react';
import axios from 'axios';


export function TransactionContextProvider({ children }) {
    const [currency, setCurrency] = useState('NZD'); // default currency is NZD
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState('');

    // fetch transactions from the server and filter them
    useEffect(() => {
        axios.get(`http://localhost:4000/transaction/page/${currentPage}`)
            .then((response) => {
                let allTransactions = response.data.result;

                if (filter === 'year') {
                    allTransactions = filterPastYearTransactions(allTransactions);
                } else if (filter === 'month') {
                    allTransactions = filterPastMonthTransactions(allTransactions);
                } else if (filter === 'week') {
                    allTransactions = filterPastWeekTransactions(allTransactions);
                }
                setTransactions(allTransactions);
            })
            .catch((error) => {
                console.error('Not logged in ', error);
                window.location.href = '/login';
            });
    }, [currentPage, filter]);

    //functions to filter transactions
    const filterYear = () => {
        if (filter === 'year') {
            setFilter('');
        } else {
            setFilter('year');
        }
    };

    const filterMonth = () => {
        if (filter === 'month') {
            setFilter('');
        } else {
            setFilter('month');
        }
    };

    const filterWeek = () => {
        if (filter === 'week') {
            setFilter('');
        } else {
            setFilter('week');
        }
    };

    // all values and functions that can be accessed when consuming this context provider
    const contextValue = {
        currency,
        transactions,
        filter,
        currentPage,
        setFilter,
        filterYear,
        filterMonth,
        filterWeek,
        setCurrentPage,
        setCurrency,
    };

    return (
        <TransactionContext.Provider value={contextValue}>
            {children}
        </TransactionContext.Provider>);
};

export default TransactionContextProvider;
