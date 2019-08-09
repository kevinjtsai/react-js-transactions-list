import React, { useContext } from 'react';
import TransactionListItem from './TransactionItem';
import TransactionsContext from '../context/transactions-context';

const TransactionsList = () => {

    const { transactions } = useContext(TransactionsContext);

    return (
        <table className="transactions-table">
            <thread className="table-header">
              <tr className="table-header-row">
                <td className="table-header-row-data">Date</td>
                <td className="table-header-row-data-long">Description</td>
                <td className="table-header-row-data">Amount</td>
                <td className="table-header-row-data">Type</td>
                <td className="table-header-row-data">Account</td>
              </tr>
            </thread>
            <tbody className="table-body">
            {
            transactions.length === 0 ? (
                <tr className="table-item">
                <span>No transactions</span>
                </tr>
            ) : (
                transactions.map((transaction) => {
                return <TransactionListItem key={transactions.description} transaction={transaction} />;
                })
            )
            }
            </tbody>
        </table>
    )
};

export { TransactionsList as default }