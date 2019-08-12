import React, { useContext } from 'react';
import TransactionsContext from '../context/transactions-context';

const TransactionFilters = () => {
  const { filters, filtersDispatch } = useContext(TransactionsContext);

  const onSortChange = (e) => {
    if (e.target.value === "date") {
      filtersDispatch({ type: 'SORT_BY_DATE' });
    } else if (e.target.value === "amount") {
      filtersDispatch({ type: 'SORT_BY_AMOUNT' });
    }
  }

  return (
    <div className="filters-container">
      <div>
        <select
          className="select"
          value={filters.sortBy}
          onChange={(e) => onSortChange(e)}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <input
        className="search-text-input"
        placeholder="Search by description"
        value={filters.searchText}
        onChange={(e) => filtersDispatch({ type: 'SET_SEARCH_TEXT_FILTER', searchText: e.target.value })}
      />
    </div>
  );
};

export { TransactionFilters as default }