import React ,{useState,useContext} from  'react'
import {GlobalContext} from '../Context/GlobalState';
export default function TranForm(){
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction}=useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
  }
  return (
    <form className='form-container' onSubmit={onSubmit}>
      <h1 className='text-center'>Transaction </h1>
      <hr></hr>
      <label>Enter Amount: </label> <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter your amount' />
      <br></br>
      <label>Enter Transaction: </label> <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your transaction info.' />
      <button>Submit</button>
    </form>
  );
}


