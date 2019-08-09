import React from 'react';

export const TransactionItem = ({ transaction }) => (
  <tr className="table-row">
      <td className="table-row-data">{transaction.date}</td>
      <td className="table-row-data-long">{transaction.description}</td>
      <td className="table-row-data">{transaction.amount}</td>
      <td className="table-row-data">{transaction.type}</td>
      <td className="table-row-data">{transaction.account}</td>
  </tr>
);

export default TransactionItem;

