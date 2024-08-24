import React from "react";
import { TypeAnimation } from "react-type-animation";

const HubDefault = () => {
  return (
    <div style={{ userSelect: "none" }}>
      <TypeAnimation
        sequence={[
          "./Hub/Notes",
          1000,
          "./Hub/Weather",
          1000,
          "./Hub/Timer",
          1000,
        ]}
        wrapper="h1"
        cursor={false}
        repeat={Infinity}
        speed={150}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
      <hr></hr>
      <h2>
        Explore /Hub by clicking <br /> on one of the buttons on left{" "}
      </h2>
      <hr></hr>
      <div className="copyright">
        <a href="https://github.com/ZairoX-737">
          <h4 style={{ fontWeight: "600" }}>Creator Github: ZairoX-737</h4>
        </a>
        <a href="https://github.com/ZairoX-737/React-Hub">
            <h4 style={{ fontWeight: "600" }}>Project Github: React-Hub</h4>
        </a>
      </div>
    </div>
  );
};

export default HubDefault;
