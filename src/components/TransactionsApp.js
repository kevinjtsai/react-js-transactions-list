import React from 'react';
import '../styles/App.scss';
import TransactionList from '../components/TransactionList';
import TransactionsContext from '../context/transactions-context';
import mockData from '../mock-data/mock-data';

function TransactionsApp() {

  const transactions = mockData;

  return (
    <TransactionsContext.Provider className="app" value={{ transactions }}>
      <header className="app-header">
        <h1 className="transctions-title">
          Transactions
        </h1>
      </header>
      <TransactionList></TransactionList>
    </TransactionsContext.Provider>
  );
}

export default TransactionsApp;
