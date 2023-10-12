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
     
    if (divisor === 0 && result === 0) {
      setResult(NaN.toString());
    } else {
      setResult((result) => result / divisor); 
    }
    
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0;
  }; 

  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1 className="title">React Calculator</h1> 
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

        <div className="mathOps">
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button> 
          <button onClick={times}>*</button> 
          <button onClick={divide}>/</button> 
        </div>

        <div className="clearOps">
          <button onClick={resetInput}>Clear Input</button>
          <button onClick={resetResult}>Clear Result</button>
        </div>

      </form> 
    </div> 
  ); 
} 
 
export default App; 
