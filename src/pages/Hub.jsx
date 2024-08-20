import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  MdEventNote,
  MdOutlineCloud,
  MdOutlineAccessTime,
} from "react-icons/md";
import { useTimer } from "../components/Timer_components/useTimer";

const Hub = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [TimerIsRunning, setTimerIsRunning] = useState(false);
  const [TimerTime, setTimerTime] = useState(1500);
  const time = useTimer(TimerTime, TimerIsRunning);

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
            <div className="link-button timer-link-button">
              <div>
                <MdOutlineAccessTime size="25" />
                <span>/Timer</span>
              </div>
              {TimerIsRunning ? (
                <div
                  style={{
                    backgroundColor: "#FF4040",
                    borderRadius: "30px",
                    width: "15px",
                    height: "15px",
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
        <Outlet
          context={[TimerIsRunning, setTimerIsRunning, setTimerTime, time]}
        />
      </div>
    </>
  );
};

export default Hub;
