import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  MdEventNote,
  MdOutlineCloud,
  MdOutlineAccessTime,
} from "react-icons/md";

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
            <div className="link-button">
              <MdEventNote size="25" />
              <span>/Notes</span>
            </div>
          </Link>

          <Link to="Weather" className="link-list-container">
            <div className="link-button">
              <MdOutlineCloud size="25" />
              <span>/Weather</span>
            </div>
          </Link>

          <Link to="Timer" className="link-list-container">
            <div className="link-button">
              <MdOutlineAccessTime size="25" />
              <span>/Timer</span>
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Hub;
