import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home'
import CreateLocation from './pages/CreateLocation'
import Routes from './routes';

function App() {
  const [counter, setCounter] = useState(1);
  function handleButtonClick() {
    setCounter(counter + 1);
    console.log(counter)
  }
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
