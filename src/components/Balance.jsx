import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Filter out non-numeric values and convert strings to numbers
  const amounts = transactions.map(transaction => parseFloat(transaction.amount)).filter(amount => !isNaN(amount));

  // Calculate the total
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </>
  );
}

export default Balance;
