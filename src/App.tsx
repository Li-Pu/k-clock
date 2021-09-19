import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "./models";
import "./App.css";

const numberFormat = (num: number, digit: number = 2) => {
    let res = String(num);

    while (res.length < digit) {
        res = "0" + res;
    }

    return res;
};

function App() {
    const { hour, minute, second } = useSelector(
        (rootState: RootState) => rootState.time
    );
    const dispatch = useDispatch<Dispatch>();

    useEffect(() => {
        dispatch.time.startUpdatingTime();
        return () => dispatch.time.endUpdateTime();
    }, []);

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
