import React, { useReducer } from 'react';
import '../styles/transactions.scss';
import TransactionList from '../components/TransactionList';
import TransactionsContext from '../context/transactions-context';
import filtersReducer from '../reducers/filters';
import mockData from '../mock-data/mock-data';

function TransactionsApp() {

  const [ filters, dispatch ] = useReducer(filtersReducer, []);

  const transactions = mockData;

  // useEffect(() => {
  //   if (transactions) {
  //     dispatch({ type: 'POPULATE_TRANSACTIONS', transactions });
  //   }
  // }, []);

  return (
    <TransactionsContext.Provider className="app" value={{ transactions, filters, dispatch }}>
      <div className="app-container">
        <header className="app-header">
          <h1 className="transctions-title">Transactions</h1>
        </header>
        <TransactionList></TransactionList>
      </div>
    </TransactionsContext.Provider>
  );
}

export default TransactionsApp;
