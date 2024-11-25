import { useMemo, useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(1000000);

  const calculateSum = () => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += i;
    }
    return sum;
  };


  const sum = useMemo(calculateSum, []);
  
  return (
    <>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
    </>
  )
}

