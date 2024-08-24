import React from "react";
import { useState } from "react";
import { MdOutlineSettings } from "react-icons/md";
import TimerSettingTab from "./TimerSettingTab";



const TimerSettings = () => {
  const [isTimerModal, setIsTimerModal] = useState(false);

  const handleOpenTimerModal = () => {
    const timerModal = document.querySelector(".timer-modal-box");
    if (isTimerModal) {
      setIsTimerModal(false);
      timerModal.classList.remove("timer-modal-box-show");
      
    } else {
      setIsTimerModal(true);
      timerModal.classList.add("timer-modal-box-show");
    }
  };

  return (
    <>
      <div className="search timer-settings-bar" onClick={handleOpenTimerModal}>
        <div className="timer-settings-img">
          <MdOutlineSettings size="1.6rem" />
        </div>
        <div className="timer-settings-text">Settings</div>
      </div>
      <TimerSettingTab handleOpenTimerModal={handleOpenTimerModal} />
    </>
  );
};

export default TimerSettings;
