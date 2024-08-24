import React from "react";
const TimerModes = ({ setTimerIsRunning, setTimerMode }) => {
  const changeTimerMode = (e) => {
    const timerBox = document.querySelector(".timer-box");
    console.log(timerBox);
    if (e.target.id) {
      switch (e.target.id) {
        case "1":
          setTimerIsRunning(false);
          setTimerMode(1);
          timerBox.style.backgroundColor = "#ba4949";
          break;
        case "2":
          setTimerIsRunning(false);
          setTimerMode(2);
          timerBox.style.backgroundColor = "#38858a";
          break;
        case "3":
          setTimerIsRunning(false);
          setTimerMode(3);
          timerBox.style.backgroundColor = "#397097";
          break;
        default:
          break;
      }
    }
  };
  return (
    <div className="timer-modes-container">
      <button id="1" onClick={changeTimerMode}>
        Work Time
      </button>
      <button id="2" onClick={changeTimerMode}>
        Short Break
      </button>
      <button id="3" onClick={changeTimerMode}>
        Long Break
      </button>
    </div>
  );
};

export default TimerModes;
