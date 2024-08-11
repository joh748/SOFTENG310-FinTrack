import CurrentBalance from '../components/CurrentBalance';
import TransactionLog from '../components/TransactionLog';

export default function Dashboard() {
  return (
    <>
      <div className='bg-blue-200'>
        <p>HEADER</p>
      </div>

      <div className=' flex flex-col px-[8%]'>
        <div className='flex flex-row'>
          <div className=' flex flex-col w-[80%]'>
            <CurrentBalance />
            <TransactionLog />
          </div>

          <div className='bg-slate-500 flex flex-col w-[20%] items-center'>
            <p>BUTTON</p>
            <p>BUTTON</p>
            <p>DROPDOWN</p>
          </div>
        </div>

        <div className='bg-orange-200 flex flex-row justify-center'>
          <p>SAVINGS TRACKER/GOALS</p>
        </div>

        <div className='bg-green-300 flex flex-row justify-center'>
          <p>INCOME STATS</p>
        </div>

      </div>
    </>
  );
}
