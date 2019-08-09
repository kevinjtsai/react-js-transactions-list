const filtersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT_FILTER':
      return {
        ...state,
        searchText: action.searchText,
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state;
  }
};

export { filtersReducer as default }