import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'

export default function Balance() {
 const {transactions}=useContext(GlobalContext);
 const amounts=transactions.map(transaction => transaction.amount);
 const Total=amounts.reduce((acc,items)=>acc+=items,0);
 const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );


  return (
    <div className='Balance-container b-color'>
        <h1 className='text-center b-color'>Balance: {Total}</h1>
        <hr></hr>
        <div className='expense-container b-color'>
          <h2>Expense:{expense} </h2>
          <h2>Income:{income} </h2>
        </div>

    </div>
  )
}
