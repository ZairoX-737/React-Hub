import { useEffect } from "react";
import { useState } from "react";

export const useTimer = (initialTime, isRunning, TimerMode) => {
  const [time, setTime] = useState(initialTime);

  let hours = Math.floor(time / (60 * 60));
  let divisor_for_minutes = time % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);
  if (hours !== 0) {
    minutes += hours * 60;
  }

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };

  useEffect(() => {
    if (isRunning) {
      const customInterval = setInterval(() => {
        if (time > 0) {
          setTime((prev) => prev - 1);
          console.log(time)
        }
      }, 1000);

      return () => clearInterval(customInterval);
    }
  }, [isRunning, time]);
  
  useEffect(() => {
    if(TimerMode){
      switch (TimerMode) {
        case 1:
          setTime(1500)
          break;
        case 2:
          setTime(300);
          break;
        case 3:
          setTime(900);
          break;
        default:
          break;
      }
    }
  }, [TimerMode])
  return obj;
};
