import React from 'react';

export const TransactionItem = ({ transaction }) => (
  <div>
    <div>
      <h3 className="list-item__title">{transaction.date}</h3>
    </div>
    <div>
      <h3 className="list-item__title">{transaction.description}</h3>
    </div>
    <div>
        <h3 className="list-item__data">{transaction.amount}</h3>
    </div>
    <div>
        <h3 className="list-item__data">{transaction.type}</h3>
    </div>
    <div>
        <h3 className="list-item__data">{transaction.account}</h3>
    </div>
  </div>
);

export default TransactionItem;

