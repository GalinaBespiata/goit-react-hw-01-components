import PropTypes from 'prop-types';
import css from '../TransactionHistory/transactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headTableTransactions}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, idx, arr) => {
          return (
            <tr key={id} className={css.tr}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
