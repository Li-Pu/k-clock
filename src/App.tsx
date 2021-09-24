import React from "react";
import "./App.css";
import { useTime } from "./hooks";

const numberFormat = (num: number, digit: number = 2) => {
    let res = String(num);

    while (res.length < digit) {
        res = "0" + res;
    }

    return res;
};

function App() {
    const { hour, minute, second } = useTime();

    return (
        <div className="App">
            <header className="App-header">
                <div className="App-time-container">
                    {[hour, minute, second]
                        .map((value) => numberFormat(value, 2))
                        .join(":")}
                </div>
            </header>
        </div>
    );
}

export default App;
