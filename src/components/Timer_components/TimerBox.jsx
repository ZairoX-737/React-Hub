import React from "react";
import { MdOutlineNotStarted, MdOutlineStopCircle } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

const TimerBox = () => {
const [TimerIsRunning, setTimerIsRunning, setTimerTime, time] =
  useOutletContext();

  function handleRun() {
    if (TimerIsRunning) {
      setTimerIsRunning(false);
      const timeconverted = 
      (time.h * 3600) + 
      (time.m * 60) +
      (time.s * 1)
      setTimerTime(timeconverted)
    } else {
      setTimerIsRunning(true);
    }
  }
  return (
    <div className="timer-box">
      <h1>
        {time.m < 10 ? "0" : ""}
        {time.m}:{time.s < 10 ? "0" : ""}
        {time.s}
      </h1>
      {TimerIsRunning ? (
        <div className="timer-starter" onClick={handleRun}>
          <MdOutlineStopCircle size="35" />
        </div>
      ) : (
        <div className="timer-starter" onClick={handleRun}>
          <MdOutlineNotStarted size="35" />
        </div>
      )}
    </div>
  );
};

export default TimerBox;
