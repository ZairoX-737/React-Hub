import React from "react";
import { TypeAnimation } from "react-type-animation";
import TimerBox from "../components/Timer_components/TimerBox";
import TimerSettings from "../components/Timer_components/TimerSettings";

const Timer = () => {
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

      <div
        style={{
          width: "280px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TimerSettings />
        <TimerBox />
      </div>
    </div>
  );
};

export default Timer;
