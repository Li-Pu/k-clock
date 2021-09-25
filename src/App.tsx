import React from "react";
import { DialSelect } from "./views";

function App() {
    return (
        <div className="align-center">
            <header className="h-screen flex flex-col items-stretch bg-gray-900 bg-opacity-100">
                <DialSelect className="flex-auto" />
            </header>
        </div>
    );
}

export default App;
