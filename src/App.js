import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Example() {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);
  console.dir(count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> 
        Click me
      </button>
      <br></br>
    </div>
  );
 }
export default Example;
