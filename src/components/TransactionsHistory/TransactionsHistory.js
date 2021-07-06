import PropTypes from "prop-types";
import s from "../TransactionsHistory/TransactionsHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <div>
      <h2>Transaction history</h2>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.type}</td>
              <td>{i.amount}</td>
              <td>{i.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
