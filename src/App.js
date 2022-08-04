import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const options = [
  {
    label: "PST",
    value: "PST",
  },
  {
    label: "GMT",
    value: "GMT",
  },
  {
    label: "EST",
    value: "EST",
  },
];

function App() {
  const [total, setTotal] = useState(0);
  const [date, getDate] = useState(0);
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
    <div className="table" id="calc">
    {digits.map((digit) => {
     return <button onClick={() => {
      setTotal(total + digit)
     }} key={digit}>{digit}</button>
    })}
    <button onClick={() => setTotal(0)}><b>reset</b></button>
    <div className="total">Total: {total}</div>
    </div>
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
