import React from "react";
import { TypeAnimation } from "react-type-animation";

const Timer = () => {
  return (
    <div className="test-main">
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
    </div>
  );
};

export default Timer;
