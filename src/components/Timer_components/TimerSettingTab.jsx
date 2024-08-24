import React from "react";
import { MdClose } from "react-icons/md";

const TimerSettingTab = ({ handleOpenTimerModal }) => {
  return (
    <div className="timer-modal-box">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            marginRight: "auto",
            visibility: "hidden",
            marginLeft: "5px",
          }}
        >
          <MdClose size="1.8em" style={{ marginTop: "10px" }} />
        </div>

        <div>
          <h2>Settings</h2>
        </div>

        <div
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={handleOpenTimerModal}
        >
          <MdClose
            size="1.8em"
            style={{ marginTop: "10px", marginRight: "5px" }}
          />
        </div>
      </div>

      <hr></hr>
      <div className="timer-settings-container">
        <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
          H:
          <input type="number" min='0' ></input>
        </div>

        <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
          M:
          <input type="number"></input>
        </div>

        <div style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
          S:
          <input type="number"></input>
        </div>
      </div>
    </div>
  );
};

export default TimerSettingTab;
