import React, { useContext } from 'react';
import TransactionsContext from '../context/transactions-context';

const TransactionFilters = () => {

  const { filters, filtersDispatch } = useContext(TransactionsContext);

  return (
    <div className="filters-container">
      <input
        className="search-text-input"
        placeholder="Search transactions"
        value={filters.searchText}
        onChange={(e) => filtersDispatch({ type: 'SET_SEARCH_TEXT_FILTER', searchText: e.target.value })}
      />
    </div>
  );
};

export { TransactionFilters as default }