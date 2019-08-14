import React from 'react';

export const TransactionRow = ({ transaction: {date, description, amount, type, account } }) => (
  <tr className="table-row">
      <td className="table-row-data">{date}</td>
      <td className="table-row-data-long">{description}</td>
      <td className="table-row-data">{amount}</td>
      <td className="table-row-data">{type}</td>
      <td className="table-row-data">{account}</td>
  </tr>
);

export default TransactionRow;

