import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  let [total, setTotal] = useState(0);
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [operator, setOperator] = useState("");
  let [counter, setCounter] = useState(0);
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

      <div className="calculator-whole">
        <div className="calc-header">
          <div className="total">Total: {total || ""}</div>
          <div className="total">
            {" "}
            Current Number:{operator === "" && num1}
            {!total && operator !== "" && num2}
          </div>
        </div>
        <div className="calc">
          {digits.map((digit) => {
            return (
              <button
                onClick={() => {
                  if (operator === "") {
                    setNum1(num1 + String(digit));
                  } else {
                    setNum2(num2 + String(digit));
                  }
                }}
                key={digit}
              >
                <b>{digit}</b>
              </button>
            );
          })}
        </div>
        <div className="operations">
          <button
            className="operator"
            onClick={() => {
              if (counter == 0) {
                setOperator("add");
              } else if (counter > 0) {
                setTotal(total + parseInt(num1));
                setNum1("");
              }
            }}
          >
            <b>+</b>
          </button>
          <button
            onClick={() => {
              setTotal(0);
              setNum1("");
              setNum2("");
              setOperator("");
              setCounter(0);
            }}
          >
            <b>reset</b>
          </button>
          <button
            className="operator"
            onClick={() => {
              if (counter == 0) {
                setOperator("multiply");
              } else if (counter > 0) {
                setTotal(total * parseInt(num1));
                setNum1("");
              }
            }}
          >
            <b>*</b>
          </button>
          <button
            className="operator"
            onClick={() => {
              if (counter == 0) {
                setOperator("divide");
              } else if (counter > 0) {
                setTotal(total / parseInt(num1));
                setNum1("");
              }
            }}
          >
            <b>÷</b>
          </button>
          <button
            className="operator"
            onClick={() => {
              if (counter == 0) {
                setOperator("subtract");
              } else if (counter > 0) {
                setTotal(total - parseInt(num1));
                setNum1("");
              }
            }}
          >
            <b>-</b>
          </button>
          <button
            className="operator"
            onClick={() => {
              if (operator === "add") {
                setTotal((total += parseInt(num1) + parseInt(num2)));
                setNum1("");
                setNum2("");
                setCounter((counter += 1));
                setOperator("");
              } else if (operator === "multiply") {
                setTotal((total += parseInt(num1) * parseInt(num2)));
                setNum1("");
                setNum2("");
                setCounter((counter += 1));
                setOperator("");
              } else if (operator === "divide") {
                setTotal((total += parseInt(num1) / parseInt(num2)));
                setNum1("");
                setNum2("");
                setCounter((counter += 1));
                setOperator("");
              } else if (operator === "subtract") {
                setTotal((total += parseInt(num1) - parseInt(num2)));
                setNum1("");
                setNum2("");
                setCounter((counter += 1));
                setOperator("");
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
