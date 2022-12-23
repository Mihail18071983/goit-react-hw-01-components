import './TransactionItem.css';
import PropTypes from 'prop-types';

export const TransactionItem =({ type, amount, currency })=>(
    <tr>
    <td>{type}</td>
    <td>{Number(amount)}</td>
    <td>{currency}</td>
  </tr>
)

TransactionItem.propTypes={
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}