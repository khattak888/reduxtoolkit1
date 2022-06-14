
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/counterSlice';
function App() {
 const counter  =useSelector(state => state.counter.value);
 const dispatch = useDispatch();


  // const [counter , setCounter ] = useState(0);
 
  const incrementCounter = () => {
   dispatch(increment())
  }
  const decrementCounter = () => {
    dispatch(decrement())
  }

  return (
    <>
    <div className="App">
      <h1>Count: {counter}</h1>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button>
      <button onClick={()=>{dispatch(incrementByAmount(20))}}>incrementByAmount</button>
    </div>
    </>
  );
}

export default App;
