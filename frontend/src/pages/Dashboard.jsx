import CurrentBalance from '../components/CurrentBalance';
import TransactionLog from '../components/TransactionLog';

export default function Dashboard() {
  return (
    <div>
      <CurrentBalance />
      <TransactionLog />
    </div>
  );
}
