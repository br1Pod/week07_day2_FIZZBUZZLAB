import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  
  const [currentNum, setCurrentNum] = useState(1);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    checkNum();
  }, [currentNum])

  const checkNum = () => {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
      setAnswer("fizzbuzz");
    } else if (currentNum % 3 === 0) {
      setAnswer("fizz");
    } else if (currentNum % 5 === 0) {
      setAnswer("buzz");
    } else {
      setAnswer(currentNum);
    }
  }

  const handleInc = () => {
    setCurrentNum(currentNum + 1);
  }

  const handleMatch = (e) => {
    if (e.target.value === checkNum()) {
      return 
    }
  }  

  return (
    <>
      <h2>Current Number: {answer}</h2>
      <button value={currentNum} onClick={handleInc}>Play!</button>
      <button value='fizz' onClick={handleMatch} >Fizz</button>
      <button value='buzz' onClick={handleMatch} >Buzz</button>
      <button value='fizzbuzz' onClick={handleMatch} >FizzBuzz</button>
    
    </>
  );
}

export default App;
