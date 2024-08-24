import React from "react";
import { Link, Outlet, useOutlet } from "react-router-dom";
import { useState } from "react";
import {
  MdEventNote,
  MdOutlineCloud,
  MdOutlineAccessTime,
  MdDarkMode,
  MdSunny,
} from "react-icons/md";
import { useTimer } from "../components/Timer_components/useTimer";
import HubDefault from "./HubDefault";

const Hub = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [TimerIsRunning, setTimerIsRunning] = useState(false);
  const [TimerMode, setTimerMode] = useState('')
  const [TimerTime, setTimerTime] = useState(1500);
  const time = useTimer(TimerTime, TimerIsRunning, TimerMode);

  const outlet = useOutlet();

  return (
    <>
      <div className={`${darkMode && "dark-mode"} hub-container`}>
        <div className="link-list">
          <div>
            <div style={{width: 'max-content'}}>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "#0d1117",
                  width: "max-content",
                }}
              >
                <h1>./Hub</h1>
              </Link>
            </div>
            <button
              onClick={() =>
                setDarkMode((previousDarkMode) => !previousDarkMode)
              }
              className="save"
            >
              {darkMode ? (
                <MdSunny size="1.5em" />
              ) : (
                <MdDarkMode size="1.5em" />
              )}
            </button>
          </div>
          <nav>
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
          </nav>
        </div>
        {outlet ? (
          <Outlet
            context={[TimerIsRunning, setTimerIsRunning, TimerTime, setTimerTime, time,TimerMode, setTimerMode]}
          />
        ) : (
          <HubDefault />
        )}
      </div>
    </>
  );
};

export default Hub;
