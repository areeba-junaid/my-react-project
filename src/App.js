import React from 'react'
import './App.css';
import Header from './MyComponent/Header';
import Balance from './MyComponent/Balance';
import TranForm from './MyComponent/TranForm';
import TranHistory from './MyComponent/TranHistory';
import {GlobalProvider} from './Context/GlobalState.js';
function App() {
  return (
    <GlobalProvider >
      <Header/>
      <Balance/>
     <div className='Work-container'>
     <TranForm/>  
     <TranHistory/>
     </div>
   </GlobalProvider>
    
  );
}

export default App;
