import React, { useContext } from 'react';
import TransactionListItem from './TransactionItem';
import TransactionsContext from '../context/transactions-context';

const TransactionsList = (props) => {

    const { transactions } = useContext(TransactionsContext);

    return (
        <div className="content-container">
            <div className="list-header">
            <div className="show-for-mobile">Transactions</div>
            <div className="show-for-desktop">Date</div>
            <div className="show-for-desktop">Description</div>
            <div className="show-for-desktop">Amount</div>
            <div className="show-for-desktop">Type</div>
            <div className="show-for-desktop">Account</div>
            </div>
            <div className="list-body">
            {
            transactions.length === 0 ? (
                <div className="list-item list-item--message">
                <span>No transactions</span>
                </div>
            ) : (
                transactions.map((transaction) => {
                return <TransactionListItem key={transactions.description} transaction={transaction} />;
                })
            )
            }
            </div>
        </div>
    )
};

export { TransactionsList as default }