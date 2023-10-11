import {
  useState,
  useRef
} from "react";

import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 

  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) {     
    e.preventDefault();
    //setResult((result) => result / Number(inputRef.current.value)); 

    // Can't divide by 0
    let divisor = Number(inputRef.current.value); 
    if (divisor == 0 && result == 0) {
      setResult(NaN);
    } else {
      setResult((result) => result / divisor); 
    }
    
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
    //inputRef.current.value = null;
  }; 

  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>React Calculator App</h1> 
      </div> 
      <form> 
        <p id="result" ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number"
        /> 
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button> 
        <button onClick={times}>*</button> 
        <button onClick={divide}>/</button> 
        <button onClick={resetInput}>Clear Input</button>
        <button onClick={resetResult}>Clear Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
