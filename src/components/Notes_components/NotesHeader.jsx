import React from "react";
import { TypeAnimation } from 'react-type-animation';

const NotesHeader = () => {
  return (
    <div>
      <TypeAnimation
        sequence={["./Hub/Notes"]}
        wrapper="h1"
        cursor={false}
        repeat={0}
        speed={25}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
};

export default NotesHeader;
