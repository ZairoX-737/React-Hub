import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useTimer } from "../components/Timer_components/useTimer";
import { useState } from "react";
import { MdOutlineNotStarted, MdOutlineStopCircle } from "react-icons/md";

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
      <div className="timer-box">
        <h1>
          {time.m < 10 ? "0" : ""}
          {time.m}:{time.s < 10 ? "0" : ""}
          {time.s}
        </h1>
        {isRunning ? (
          <div className="timer-starter" onClick={handleRun}>
            <MdOutlineStopCircle size="45" />
            <span>Stop</span>
          </div>
        ) : (
          <div className="timer-starter" onClick={handleRun}>
            <MdOutlineNotStarted size="45" />
            <span>Start</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timer;
