import React, { useEffect, useReducer } from 'react';
import '../styles/transactions.scss';
import TransactionFilters from '../components/TransactionFilters';
import TransactionList from '../components/TransactionList';
import TransactionsContext from '../context/transactions-context';
import transactionsReducer from '../reducers/transactions';
import filtersReducer from '../reducers/filters';
import mockData from '../mock-data/mock-data';
import moment from 'moment';

const filtersReducerDefaultState = {
  searchText: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

function TransactionsApp() {
  const [ filters, filtersDispatch ] = useReducer(filtersReducer, filtersReducerDefaultState);
  const [ transactions, transactionsDispatch ] = useReducer(transactionsReducer, []);

  console.log("filters " + filters);

  useEffect(() => {
    const transactions = mockData;
    if (transactions) {
      console.log('dispatching populate_transactions')
      transactionsDispatch({ type: 'POPULATE_TRANSACTIONS', transactions });
    }
  }, []);

  return (
    <TransactionsContext.Provider className="app" value={{ transactions, transactionsDispatch, filters, filtersDispatch }}>
      <div className="app-container">
        <header className="app-header">
          <h1 className="transctions-title">Transactions</h1>
        </header>
        <TransactionFilters />
        <TransactionList />
      </div>
    </TransactionsContext.Provider>
  );
}

export default TransactionsApp;
