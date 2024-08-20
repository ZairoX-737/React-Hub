import React from "react";
import { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import TimerSettingTab from "./TimerSettingTab";

const TimerSettings = () => {
  const [isTimerModal, setIsTimerModal] = useState(false)

  const handleOpenTimerModal = () => {
    if (isTimerModal) setIsTimerModal(false);
    else setIsTimerModal(true);
  };

  return (
    <>
      <div className="search timer-settings-bar" onClick={handleOpenTimerModal}>
        <div className="timer-settings-img">
          <MdOutlineSettings size="1.6rem" />
        </div>
        <div className="timer-settings-text">Settings</div>
      </div>
      {isTimerModal ? (<TimerSettingTab handleOpenTimerModal={handleOpenTimerModal} />) : (<></>)}
      
    </>
  );
};

export default TimerSettings;
