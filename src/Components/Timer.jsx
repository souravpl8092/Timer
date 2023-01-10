import { useState, useRef } from "react";

let fixTime = (time) => (time < 10 ? `0${time}` : time);

let formatTimeToString = (time) => {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 3600) % 60;
  let outputString = `${fixTime(hours)}:${fixTime(minutes)}:${fixTime(
    seconds
  )}`;
  return outputString;
};
export default function Timer() {
  const style = {
    padding: "2% 5%",
    backgroundColor: "gray",
    border: "none",
    borderRadius: "10px",
    margin: "2%",
    fontWeight: "bolder"
  };
  let [time, setTimer] = useState(0);
  let ref = useRef(null);
  if (time <= 0) {
    clearInterval(ref.current);
  }
  let startTimer = () => {
    if (time === 0) return 0;
    if (ref.current != null) return;
    ref.current = setInterval(() => {
      setTimer((perv) => perv - 1);
      console.log(new Date().getUTCSeconds());
    }, 1000);
  };
  let stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  let resetTimer = () => {
    stopTimer();
    setTimer(0);
  };
  let handleChange = (e) => {
    let res = e.target.value;
    setTimer(res);
  };
  return (
    <div className="App">
      <h2 style={{ padding: "2%", width: "100%", backgroundColor: "white" }}>
        TIMER
      </h2>
      <h1
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "5px",
          fontSize: "50px",
          height: "200px"
        }}
      >
        {formatTimeToString(time)}
      </h1>
      <input
        placeholder="00h:00m:00s"
        onChange={handleChange}
        style={{
          padding: "5px",
          fontSize: "20px",
          width: "100%",
          height: "50px",
          margin: "auto",
          textAlign: "center"
        }}
      />
      <button onClick={startTimer} style={style}>
        START
      </button>
      <button onClick={stopTimer} style={style}>
        STOP
      </button>
      <button onClick={resetTimer} style={style}>
        RESET
      </button>
    </div>
  );
}
