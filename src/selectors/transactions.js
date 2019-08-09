import moment from 'moment';

const selectTransactions = (transactions, { searchText, sortBy, startDate, endDate }) => {
  return transactions.filter((transaction) => {
    console.log("description is: " + transaction.description);
    const createdAtMoment = moment(transaction.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = transaction.description.toLowerCase().includes(searchText.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
    return 0;
  });
};

export { selectTransactions as default }