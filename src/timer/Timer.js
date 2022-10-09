import React, { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let interval;
    if (flag) {
      interval = setInterval(() => {
        setTimer((prev)=>prev+1);
      }, 1000);
    } else if (!flag) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [flag]);
  function startTimer() {
    setFlag(true);
  }
  function stopTimer() {
    setFlag(false);
  }
  return (
    <div className="App">
      <h1>Timer</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <h1>{timer}</h1>
    </div>
  );
}

export default Timer;
