import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [total, setTotal] = useState(0);
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let numarr = []
  return (
    <>
     
        <header className="hero">
          <button
            className="calc-block"
            onClick={() => {
              console.log("calculator");
            }}>
            <b>Calculator</b>
          </button>
        </header>
     


        
        <body>
        <div className="calc">
          {digits.map((digit) => {
            return (
              <button onClick={() => {
                numarr.push(digit)
              }} key={digit}>
                {digit}
              </button>
            );
          })}
          <button onClick={() => {
            let sum = 0
            for (let i = 0; i < numarr.length; i++) {
              sum += numarr[i]
            }
            setTotal(total + sum)
          }}>
            <b>add</b>
          </button>
          <button onClick={() => {
            setTotal(0)
          }}><b>reset</b></button>
          <button onClick={() => {
            let sum = 0
            for (let i = 0; i <numarr.length; i++) {
              sum += numarr[i]
            }
            setTotal(total * sum)
          }}><b>multiply</b></button>
          <button onClick={() => {
            let sum = 0
            for (let i = 0; i <numarr.length; i++) {
              sum += numarr[i]
            }
            setTotal(total / sum)
          }}><b>divide</b></button>
          <button onClick={() => {
            let sum = 0
            for (let i = 0; i <numarr.length; i++) {
              sum += numarr[i]
            }
            setTotal(total - sum)
          }}><b>subtract</b></button>
          <div className="total">
            <b>Total: {total}</b>
          </div>
        </div>
      </body>

      {/* <div className="table" id="table">
        <div className="timezone-form">
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div> */}
    </>
  );
}
export default App;
