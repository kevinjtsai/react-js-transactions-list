import React, { useEffect, useReducer } from 'react';
import '../styles/transactions.scss';
import TransactionFilters from '../components/TransactionFilters';
import TransactionsTable from '../components/TransactionsTable';
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

  useEffect(() => {
    const transactions = mockData;
    if (transactions) {
      transactionsDispatch({ type: 'POPULATE_TRANSACTIONS', transactions });
    }
  }, []);

  return (
    <TransactionsContext.Provider className="transctions" value={{ transactions, transactionsDispatch, filters, filtersDispatch }}>
      <div className="transctions-container">
        <header className="transctions-header">
          <h1 className="transctions-title">Transactions</h1>
        </header>
        <TransactionFilters />
        <TransactionsTable />
      </div>
    </TransactionsContext.Provider>
  );
}

export default TransactionsApp;
