import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  let [total, setTotal] = useState(0);
  let digits = [0,1,2,3,4,5,6,7,8,9]
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [operator,setOperator] = useState("") 
  return (
    <>
      <header className="hero">
        <button
          className="calc-block"
          onClick={() => {
            console.log("calculator");
          }}
        >
          <b>Calculator</b>
        </button>
      </header>

  
        <div className="calc-header">
          <div className="total">
          {total || ""} 
          {operator === "" && num1}
          {!total && operator !== "" && num2}
           </div>
        </div>
        <div className="calc">
          {digits.map((digit) => {
            return (
              <button
                onClick={() => { 
                  if (operator === "")
                   {
                    setNum1(num1 + String(digit))
                  } else {setNum2(num2 + String(digit))}
                }}
                key={digit}
              >
                {digit}
              </button>
            );
          })}
          <button
            onClick={() => {
              setOperator('add')
            }}
          >
            <b>add</b>
          </button>
          <button
            onClick={() => {
              setTotal(0)
              setNum1('')
              setNum2('')
              setOperator('');
            }}
          >
            <b>reset</b>
          </button>
          <button
            onClick={() => {
            setOperator('multiply')
            }}
          >
            <b>multiply</b>
          </button>
          <button
            onClick={() => {
             setOperator('divide')
            }}
          >
            <b>divide</b>
          </button>
          <button
            onClick={() => {
              setOperator('subtract')
            }}
          >
            <b>subtract</b>
          </button>
          <button onClick={() => {
            if (operator === 'add') {
              setTotal(total += parseInt(num1) + parseInt(num2))
            } else if (operator === 'multiply') {
              setTotal(total += parseInt(num1) * parseInt(num2))
            } else if (operator === 'divide') {
              setTotal(total += parseInt(num1) / parseInt(num2))
            } else if (operator === 'subtract') {
              setTotal(total += parseInt(num1) - parseInt(num2))
            }
          }}>equals</button>
        </div>
    </>
  );
}
export default App;
