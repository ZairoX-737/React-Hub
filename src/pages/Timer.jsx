import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useTimer } from "../components/Timer_components/useTimer";
import { useState } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const initialTime = 1500; //seconds
  const time = useTimer(initialTime, isRunning);
  function handleRun() {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }
  return (
    <div className="timer-main">
      <div className="header">
        <TypeAnimation
          sequence={["./Hub/Timer"]}
          wrapper="h1"
          cursor={false}
          repeat={0}
          speed={25}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      </div>
      <div>
        {time.m}
        <hr />
        {time.s}
        {isRunning ? (
          <button onClick={handleRun}>Stop</button>
        ) : (
          <button onClick={handleRun}>Start</button>
        )}
      </div>
    </div>
  );
};

export default Timer;
