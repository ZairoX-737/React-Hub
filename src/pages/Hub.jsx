import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Hub = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`${darkMode && "dark-mode"} hub-container`}>
        <div className="link-list">
          <div>
            <h1>./Hub</h1>
            <button
              onClick={() =>
                setDarkMode((previousDarkMode) => !previousDarkMode)
              }
              className="save"
            >
              Change Mode
            </button>
          </div>

          <Link to="Notes" className="link-list-container">
            <h4>./Notes</h4>
            <button className="link-button hub"></button>
          </Link>

          <Link to="Weather" className="link-list-container">
            <h4>./Weather</h4>
            <button className="link-button hub"></button>
          </Link>
          <Link to="Test" className="link-list-container">
            <h4>./Test</h4>
            <button className="link-button hub"></button>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Hub;
