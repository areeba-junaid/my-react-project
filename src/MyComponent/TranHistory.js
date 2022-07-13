import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'
export default function TranHistory() {
  const {transactions}=useContext(GlobalContext);
    return (
    <div>
        <h1>Transaction History </h1>
        <hr></hr>
        <ul>
            {transactions.map(transaction => <li className='Tran-list'>
                <span>{transaction.text }</span>
                <span>{transaction.amount} </span>
            </li>)}
        </ul>
        
    </div>
  )
}

