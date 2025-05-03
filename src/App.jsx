import { useState } from 'react';
import './App.css'
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <>
      <form>
        <h1>Login</h1>
        <input type="text" placeholder='Enter your name' name='name' className='avatar' />
        <input type="email" placeholder='Enter your email' name='email' className='avatar' />
        <button className='button'>Login</button>
      </form>
    </>
  );
}


  
export default App;
