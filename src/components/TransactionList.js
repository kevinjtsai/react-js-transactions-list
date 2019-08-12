import React, { useContext } from 'react';
import TransactionListItem from './TransactionItem';
import TransactionsContext from '../context/transactions-context';
import selectTransactions from '../selectors/transactions';

const TransactionsList = () => {

    const { transactions, filters } = useContext(TransactionsContext);

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
            selectTransactions(transactions, filters).length === 0 ? (
                <tr className="table-row">
                    <td className="table-row-data">No transactions found</td>
                </tr>
            ) : (
                selectTransactions(transactions, filters).map((transaction) => {
                return <TransactionListItem key={transactions.description} transaction={transaction} />;
                })
            )
            }
            </tbody>
        </table>
    )
};

export { TransactionsList as default }