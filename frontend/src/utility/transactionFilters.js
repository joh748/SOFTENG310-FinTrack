const filterPastTransactions = (transactions, daysBefore) => {
    const currDate = new Date();    
    const lowerBound = new Date();

    lowerBound.setDate(currDate.getDate() - daysBefore);

    return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.created_at);
        return transactionDate >= lowerBound;
    });
}

// Ensure that "transactions" is a primitive Javascript array, and not some JSON data that needs to be parsed
export const filterPastWeekTransactions = (transactions) => {
    return filterPastTransactions(transactions, 7);
}

// For filtering by past month and year, we don't worry about the exact number of days in the month or leap years.
// We don't need to be extremely precise for this use case since we just want to give a rough idea of past transactions

export const filterPastMonthTransactions = (transactions) => {
    return filterPastTransactions(transactions, 30);
}

export const filterPastYearTransactions = (transactions) => {
    return filterPastTransactions(transactions, 365);
}
