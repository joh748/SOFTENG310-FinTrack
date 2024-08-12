import CurrentBalance from "../components/CurrentBalance";
import SavingsTracker from "../components/SavingsTracker";
import TransactionLog from "../components/TransactionLog";

/*
 * When adding your new component:
 * remove the p tags and replace them with your respective react components, and remove the bg-[colour] property in its wrapped <div>
 *
 * The bg-[colour] properties have been added to help visualise where each component should go.
 */

export default function Dashboard() {
  return (
    <>
      <div className="bg-blue-200">
        <p>HEADER</p>
      </div>

      <div className=" flex flex-col px-[8%]">
        <div className="flex flex-row">
          <div className=" flex flex-col w-[80%]">
            <div className=" flex flex-col items-start">
              <CurrentBalance />
            </div>
            <TransactionLog />
          </div>

          <div className="bg-slate-500 flex flex-col w-[20%] items-center">
            <p>BUTTON</p>
            <p>BUTTON</p>
            <p>DROPDOWN</p>
          </div>
        </div>

        <div className="bg-orange-200 flex flex-row justify-center">
          <SavingsTracker></SavingsTracker>
        </div>

        <div className="bg-green-300 flex flex-row justify-center">
          <p>INCOME STATS</p>
        </div>
      </div>
    </>
  );
}
