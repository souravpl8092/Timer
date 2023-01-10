import Timer from "./Components/Timer";
import React from "react";
import Stopwatch from "./Components/Stopwatch";

import "./styles.css";

export default function App() {
  const [status, setStatus] = React.useState(true);

  return (
    <div className="App">
      <div className="watch">
        <div>
          <button className="btn" onClick={() => setStatus(!status)}>
            TIMER
          </button>
          <button className="btn" onClick={() => setStatus(!status)}>
            STOPWATCH
          </button>
        </div>
        <hr />
        {status ? <Stopwatch /> : <Timer />}
      </div>
    </div>
  );
}
