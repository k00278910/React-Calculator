// useState is a built-in React hook used for 
// managing state in functional components 
// import from react module
import { useState } from 'react'

function App() {
// declare and initialize state variables using the useState hook

// state variables used to store and update data within component
// when values change, React will automatically re-render the component
// useState(""): This is a call to the useState hook. 
// initializes the state variable calc/result with empty string 

const[calc,setCalc]=useState("");
const[result,setResult]=useState("");

// set operator values
const ops = ['/','*','+','-','.'];

// constant called updateCalc (arrow function)
// we will pass a value to this function
// each value will represent a button

const updateCalc = value => {
// ensure that two operators are not 
// included next to each other
if(
// if the last value is an operator AND the 
// calculation is nothing OR the last value 
// is an operator AND the last value was also
// an operator, then we will return only
// and not do anything

  // eslint-disable-next-line no-mixed-operators
  ops.includes(value) && calc===''||
  // eslint-disable-next-line no-mixed-operators
  ops.includes(value) && ops.includes(calc.slice(-1)
  )
){
  return;
}

  // when a button is pressed, it will be applied to our 
  // calc state variables
  setCalc(calc+value);

  //update results
  if (!ops.includes(value)){
    // set the setResult state variable
    // eval will evaluate whatever you pass in
    // eslint-disable-next-line no-eval
    setResult(eval(calc+value).toString());

  }

}



// Function to add Numbers 0-9 on display markup
const createDigits =()=>{
  // array of digits to store array elements
  const digits = [];

  for (let i=1;i<10;i++){
// add digit to existing array of digits on click
    digits.push(
      //<button key={i}>{i}</button>
      <button onClick={()=>updateCalc(i.toString())}
      key={i}>
        {i}
      </button>
    )

  }
  return digits;
}

// calculate result on = button
// we will evaluate setCalc and return it
const calculate = () =>{
  // eslint-disable-next-line no-eval
  setCalc(eval(calc.toString()))
}

// delete function
const deleteLast = () =>{
  if(calc ===''){
    return;
  }
  // else - remove last value
  const value = calc.slice(0,-1);
  setCalc(value);
}

  return (
    <div className="App">
      {/* add HTML markup for display*/}
      <div className="App">
        <div className="calculator">

          <div className="display">
            {/* update display using calc value from updateCalc */}
            {/* display result(calc) else nothing */}
          {result ? <span>({result})</span>:''}&nbsp;
          {calc||"0"}
          </div>
          
          <div className="operators">
            {/* add updateCalc functionality to operator buttons */}
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          
          { createDigits() }
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>

          {/* call calculate function to evaluate */}
          <button onClick={calculate}>=</button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
