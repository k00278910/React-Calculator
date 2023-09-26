

function App() {

// Function to add Numbers 0-9 on display
const createDigits =()=>{
  // array of digits to store array elements
  const digits = [];

  for (let i=1;i<10;i++){

    digits.push(
      <button key={i}>{i}</button>
    )

  }
  return digits;
}

  return (
    <div className="App">
      {/* add HTML markup for display*/}
      <div className="App">
        <div className="calculator">
          <span>(0)</span>0
        </div>

        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>

          <button>DEL</button>
        </div>

        <div className="digits">
          {/* create buttons 1-9 using a function */}
          {createDigits()}
          <button>.</button>
          <button>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
