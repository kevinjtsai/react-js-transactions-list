import React from 'react';
import '../App.css';
import TransactionList from '../components/TransactionList';
import TransactionsContext from '../context/transactions-context';
import mockData from '../mock-data/mock-data';

function TransactionsApp() {

  const transactions = mockData;
  
  return (
    <TransactionsContext.Provider className="App" value={{ transactions }}>
      <header className="App-header">
        <h1>
          Transactions
        </h1>
        <TransactionList></TransactionList>
      </header>
    </TransactionsContext.Provider>
  );
}

export default TransactionsApp;
