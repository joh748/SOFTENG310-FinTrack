import { useEffect, useState } from 'react';
import axios from 'axios';
import Transaction from './Transaction';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { filterPastWeekTransactions, filterPastMonthTransactions, filterPastYearTransactions } from '../utility/transactionFilters.js';

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/transaction/page/${currentPage}`)
      .then((response) => {
        // setTransactions(response.data.result);
        let fetchedTransactions = response.data.result;

        if (filter === 'year') {
          fetchedTransactions = filterPastYearTransactions(fetchedTransactions);
        }
        else if (filter === 'month') {
          fetchedTransactions = filterPastMonthTransactions(fetchedTransactions);
        }
        else if (filter === 'week') {
          fetchedTransactions = filterPastWeekTransactions(fetchedTransactions);
        }
        setTransactions(fetchedTransactions);
      })
      .catch((error) => {
        console.error('Not logged in');
        window.location.href = '/login';
      });
  }, [currentPage], [filter]);

  //function to create dummy transcation
  const createTransaction = async () => {
    try {
      await axios.post('http://localhost:4000/transaction', {
        title: 'tes2t',
        amount: -22,
        description: 'beer',
      });
      setCurrentPage(1);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  //function to filter transactions
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


  return (
    <div className='flex flex-col items-center'>

      <div className=' w-[50%]'>
        <div className='flex flex-row gap-4 items-center'>
          <h1 className='text-body '>Transaction Log</h1>
          <button className={filter === 'week' ? 'bg-primary-dark text-white text-xl font-bold rounded-full py-0 px-3 w-[130px]' : 'bg-primary text-white text-xl font-bold rounded-full py-0 px-3 w-[130px]'} onClick={filterWeek}>Last week</button>
          <button className={filter === 'month' ? 'bg-primary-dark text-white text-xl font-bold rounded-full py-0 px-3 w-[130px]' : 'bg-primary text-white text-xl font-bold rounded-full py-0 px-3 w-[130px]'} onClick={filterMonth}>Last month</button>
          <button className={filter === 'year' ? 'bg-primary-dark text-white text-xl font-bold rounded-full py-0 px-3 w-[130px]' : 'bg-primary text-white text-xl font-bold rounded-full py-0 px-3 w-[130px]'} onClick={filterYear}>Last year</button>
          <button onClick={createTransaction}> temp create transaction button</button>
        </div>
        <div className=' flex justify-between flex-col items-center min-h-[400px]'>

          <div className='w-[80%] mt-[40px]'>
            <ul>
              {transactions.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} className='' />
              ))}
            </ul>
          </div>

          <div className='flex flex-row'>
            <button className={currentPage === 1 ? 'text-gray-400' : ''} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              <IoIosArrowBack size={35} />
            </button>
            <h2 className='text-subheading w-4'>{currentPage}</h2>
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              <IoIosArrowForward size={35} />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
