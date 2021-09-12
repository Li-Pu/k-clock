import React, { useState, useEffect } from "react";
import "./App.css";

const numberFormat = (num: number, digit: number = 2) => {
  let res = String(num);

  while (res.length < digit) {
    res = "0" + res;
  }

  return res;
};

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let t: number = -1;
    const updateTime = () => {
      setTime(new Date());
      t = setTimeout(() => updateTime(), 1000);
    };
    updateTime();
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-time-container">
          {[time.getHours(), time.getMinutes(), time.getSeconds()]
            .map((value) => numberFormat(value, 2))
            .join(":")}
        </div>
      </header>
    </div>
  );
}

export default App;
