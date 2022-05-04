import './App.css';
import React, { useState, useRef } from 'react';

function Button(props) {
  const handleClick = () => props.onClickFunction(userValue);
  let userValue = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior of the browser. Without it If I submit the page is going to refresh
    props.onClickFunction(userValue)
  }
  return (
    <>
      <button onClick={handleClick}>+1</button>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter a value' ref={userValue}></input>
        <button>Add value</button>
      </form>
    </>
  )
}

function App() {
  const [counter, setCount] = useState(1);
  const incrementCounter = (userValue) => {
    setCount(counter + 1);
    console.log(userValue.current.value)
  };

  return (
    <div>
      <p>You clicked {counter} times</p>
      <Button onClickFunction={incrementCounter} increment={counter}>
        Click me
      </Button>

    </div>
  );
}

export default App;
